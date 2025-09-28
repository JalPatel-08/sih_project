import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PublicIcon from '@mui/icons-material/Public';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Head from 'next/head';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import EventFormModal from '../../components/EventFormModal';
import { formatDateLong } from '../../util/dateFormat';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { TrashIcon, PencilIcon, PlusIcon } from '@heroicons/react/24/outline';
import EventCard from '../../components/EventCard';
import AddEventModal from '../../components/AddEventModal';

export default function Events() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [expandedEventId, setExpandedEventId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    type: 'in-person',
    isPublic: true,
    tags: '',
    maxAttendees: '',
    registrationDeadline: '',
    organizer: {
      name: '',
      contact: ''
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        // Defensive: ensure events is always an array
        setEvents(Array.isArray(data) ? data : Array.isArray(data.data) ? data.data : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleCreateEvent = async (eventData) => {
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create event');
      }

      const data = await response.json();
      setEvents(prev => [data, ...prev]);
      setShowEventModal(false);
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  };

  const handleEditEvent = async (eventData) => {
    try {
      const response = await fetch(`/api/events/${selectedEvent._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
      });

      if (!response.ok) {
        throw new Error('Failed to update event');
      }

      const data = await response.json();
      setEvents(prev => prev.map(event => event._id === data._id ? data : event));
      setShowEventModal(false);
      setSelectedEvent(null);
    } catch (error) {
      console.error('Error updating event:', error);
      throw error;
    }
  };

  const handleDeleteEvent = async (eventId) => {
    if (!confirm('Are you sure you want to delete this event?')) return;
    
    try {
      const response = await fetch('/api/events', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eventId }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete event');
      }

      setEvents(events.filter(event => event._id !== eventId));
      toast.success('Event deleted successfully');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const openEditModal = (event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create event');
      }

      const newEvent = await response.json();
      setEvents([...events, newEvent]);
      setShowAddForm(false);
      setFormData({
        title: '',
        description: '',
        location: '',
        date: '',
        type: 'in-person',
        isPublic: true,
        tags: '',
        maxAttendees: '',
        registrationDeadline: '',
        organizer: {
          name: '',
          contact: ''
        }
      });
      toast.success('Event created successfully!');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleEventExpansion = (eventId) => {
    setExpandedEventId(expandedEventId === eventId ? null : eventId);
  };

  const handleAddEvent = async (eventData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit event');
      }

      const data = await response.json();
      
      // Check if event was submitted for approval or published directly
      if (data.message && data.message.includes('submitted for approval')) {
        // Show success message for pending approval
        console.log('Event submitted for approval');
      } else {
        // Admin user - event published directly
        setEvents(prev => [data, ...prev]);
      }
      
      setShowAddModal(false);
    } catch (error) {
      console.error('Error submitting event:', error);
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={() => {}} />;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Head>
        <title>Events | AlumniSetu</title>
      </Head>
      <main className="page-container">
        <div className="page-header">
          <div className="flex items-center justify-between w-full">
            <h1 className="page-title">Events</h1>
            {session && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAddModal(true)}
                className="btn btn-primary flex items-center space-x-2"
              >
                <PlusIcon className="h-5 w-5" />
                <span>Add Event</span>
              </motion.button>
            )}
          </div>
        </div>
        <div className="page-content">
          {events.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              isAuthenticated={!!session}
              userId={session?.user?.id}
            />
          ))}
        </div>
        {events.length === 0 && (
          <div className="text-center text-slate-500 dark:text-slate-400 mt-8">
            No events available.
          </div>
        )}
      </main>
      <EventFormModal
        open={showEventModal}
        onClose={() => {
          setShowEventModal(false);
          setSelectedEvent(null);
        }}
        onSubmit={selectedEvent ? handleEditEvent : handleCreateEvent}
        event={selectedEvent}
      />
      <AddEventModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleAddEvent}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}