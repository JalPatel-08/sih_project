import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EventIcon from '@mui/icons-material/Event';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const FAQSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const categories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: RocketLaunchIcon,
      color: 'blue',
      count: 8
    },
    {
      id: 'networking',
      name: 'Networking',
      icon: GroupsIcon,
      color: 'purple',
      count: 6
    },
    {
      id: 'careers-jobs',
      name: 'Careers & Jobs',
      icon: BusinessCenterIcon,
      color: 'green',
      count: 10
    },
    {
      id: 'events',
      name: 'Events',
      icon: EventIcon,
      color: 'orange',
      count: 5
    },
    {
      id: 'mentorship',
      name: 'Mentorship',
      icon: HandshakeIcon,
      color: 'teal',
      count: 7
    }
  ];

  const faqData = {
    'getting-started': [
      {
        id: 1,
        question: 'How do I create an account on AlumniSetu?',
        answer: 'Creating an account is simple! Click on the "Join Now" button on the homepage, fill in your details including your graduation year and degree, and verify your email. Our team will review your application within 24-48 hours.',
        hasButton: true,
        buttonText: 'Start Registration',
        buttonLink: '/signup'
      },
      {
        id: 2,
        question: 'What information do I need to provide during registration?',
        answer: 'You\'ll need to provide your full name, graduation year, degree/program, current employment details, contact information, and a brief professional summary. You may also upload your profile picture and resume.',
        hasButton: false
      },
      {
        id: 3,
        question: 'How do I verify my alumni status?',
        answer: 'During registration, you\'ll need to provide your student ID or graduation certificate details. Our verification team will cross-check this with university records. You may be asked to submit additional documents if needed.',
        hasButton: false
      },
      {
        id: 4,
        question: 'Is there a membership fee for joining AlumniSetu?',
        answer: 'No, joining AlumniSetu is completely free for all Charusat University alumni. We believe in keeping our community accessible to everyone.',
        hasButton: false
      }
    ],
    'networking': [
      {
        id: 5,
        question: 'How can I find and connect with other alumni?',
        answer: 'Use our advanced search feature to find alumni by graduation year, department, location, or industry. You can send connection requests, join interest-based groups, and participate in discussion forums.',
        hasButton: true,
        buttonText: 'Search Directory',
        buttonLink: '/connect'
      },
      {
        id: 6,
        question: 'Can I create or join alumni groups?',
        answer: 'Yes! You can create groups based on shared interests, locations, or professional fields. Join existing groups to connect with like-minded alumni and participate in group discussions and events.',
        hasButton: true,
        buttonText: 'Browse Groups',
        buttonLink: '/connect'
      },
      {
        id: 7,
        question: 'How do I message other alumni privately?',
        answer: 'Once you\'re connected with an alumni, you can send private messages through our secure messaging system. Click on their profile and select "Send Message" to start a conversation.',
        hasButton: false
      }
    ],
    'careers-jobs': [
      {
        id: 8,
        question: 'How do I post a job opportunity?',
        answer: 'Alumni can post job openings by navigating to the Jobs section and clicking "Post a Job". Fill in the job details, requirements, and company information. All job posts are reviewed before going live.',
        hasButton: true,
        buttonText: 'Post a Job',
        buttonLink: '/jobs'
      },
      {
        id: 9,
        question: 'Can I search for jobs by location or industry?',
        answer: 'Absolutely! Our job board has advanced filters to help you find opportunities by location, industry, experience level, job type, and more. You can also set up job alerts for specific criteria.',
        hasButton: true,
        buttonText: 'Browse Jobs',
        buttonLink: '/jobs'
      },
      {
        id: 10,
        question: 'How do I apply for jobs posted on the platform?',
        answer: 'Click on any job posting to view full details and requirements. You can apply directly through the platform by submitting your profile and a cover letter. The employer will be notified of your application.',
        hasButton: false
      },
      {
        id: 11,
        question: 'Can I get career guidance from senior alumni?',
        answer: 'Yes! Many senior alumni offer career mentorship through our Mentorship program. You can request guidance on career transitions, skill development, and industry insights.',
        hasButton: true,
        buttonText: 'Find Mentors',
        buttonLink: '/connect'
      }
    ],
    'events': [
      {
        id: 12,
        question: 'How can I find upcoming alumni events?',
        answer: 'Visit the Events section to browse all upcoming events including networking meetups, webinars, workshops, and social gatherings. You can filter events by location, type, and date.',
        hasButton: true,
        buttonText: 'View Events',
        buttonLink: '/events'
      },
      {
        id: 13,
        question: 'Can I organize my own alumni event?',
        answer: 'Yes! Alumni can organize events for the community. Submit your event proposal through the Events section, and our team will help you promote it to relevant alumni.',
        hasButton: true,
        buttonText: 'Create Event',
        buttonLink: '/events'
      },
      {
        id: 14,
        question: 'How do I RSVP for events?',
        answer: 'Simply click on the event you\'re interested in and hit the "Register" button. You\'ll receive confirmation and event details via email.',
        hasButton: false
      }
    ],
    'mentorship': [
      {
        id: 15,
        question: 'How does the mentorship program work?',
        answer: 'Our mentorship program connects junior alumni with experienced professionals. Mentees can request guidance, while mentors can offer their expertise in specific areas. We facilitate the matching process based on career goals and expertise.',
        hasButton: true,
        buttonText: 'Join Mentorship',
        buttonLink: '/connect'
      },
      {
        id: 16,
        question: 'Can I be both a mentor and a mentee?',
        answer: 'Absolutely! Many alumni serve as mentors in their areas of expertise while seeking mentorship in new fields they\'re exploring. You can have multiple mentorship relationships.',
        hasButton: false
      },
      {
        id: 17,
        question: 'What kind of guidance can I expect from mentors?',
        answer: 'Mentors can provide career advice, industry insights, skill development guidance, networking opportunities, and support for professional growth. The specific focus depends on your goals and your mentor\'s expertise.',
        hasButton: false
      }
    ]
  };

  const filteredFAQs = faqData[selectedCategory]?.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const getCategoryColor = (color, shade = '600') => {
    const colors = {
      blue: `bg-blue-${shade}`,
      purple: `bg-purple-${shade}`,
      green: `bg-green-${shade}`,
      orange: `bg-orange-${shade}`,
      teal: `bg-teal-${shade}`
    };
    return colors[color] || colors.blue;
  };

  const getCategoryTextColor = (color) => {
    const colors = {
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      green: 'text-green-600',
      orange: 'text-orange-600',
      teal: 'text-teal-600'
    };
    return colors[color] || colors.blue;
  };

  const getCategoryBorderColor = (color) => {
    const colors = {
      blue: 'border-blue-200',
      purple: 'border-purple-200',
      green: 'border-green-200',
      orange: 'border-orange-200',
      teal: 'border-teal-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How can we help you?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Everything you need to know about our alumni network. Can't find an answer? Our support team is just a click away.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Desktop */}
            <div className="hidden lg:block">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 sticky top-8">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
                <nav className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isSelected = selectedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all ${
                          isSelected
                            ? `${getCategoryColor(category.color, '100')} ${getCategoryBorderColor(category.color)} border-2`
                            : 'hover:bg-gray-50 dark:hover:bg-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Icon className={`w-5 h-5 mr-3 ${
                              isSelected ? getCategoryTextColor(category.color) : 'text-gray-500'
                            }`} />
                            <span className={`font-medium ${
                              isSelected ? getCategoryTextColor(category.color) : 'text-gray-700 dark:text-gray-300'
                            }`}>
                              {category.name}
                            </span>
                          </div>
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            isSelected 
                              ? `${getCategoryColor(category.color)} text-white` 
                              : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                          }`}>
                            {category.count}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Mobile Category Dropdown */}
            <div className="lg:hidden col-span-full">
              <div className="relative mb-6">
                <button
                  onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                  className="w-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-left flex items-center justify-between"
                >
                  <div className="flex items-center">
                    {(() => {
                      const selectedCat = categories.find(cat => cat.id === selectedCategory);
                      const Icon = selectedCat?.icon;
                      return (
                        <>
                          {Icon && <Icon className={`w-5 h-5 mr-3 ${getCategoryTextColor(selectedCat.color)}`} />}
                          <span className="font-medium text-gray-900 dark:text-white">
                            {selectedCat?.name}
                          </span>
                        </>
                      );
                    })()}
                  </div>
                  <ExpandMoreIcon className={`w-5 h-5 transition-transform ${isMobileSidebarOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isMobileSidebarOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 w-full mt-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg"
                    >
                      {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <button
                            key={category.id}
                            onClick={() => {
                              setSelectedCategory(category.id);
                              setIsMobileSidebarOpen(false);
                            }}
                            className="w-full text-left p-3 hover:bg-gray-50 dark:hover:bg-slate-700 first:rounded-t-lg last:rounded-b-lg"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Icon className={`w-5 h-5 mr-3 ${getCategoryTextColor(category.color)}`} />
                                <span className="font-medium text-gray-700 dark:text-gray-300">
                                  {category.name}
                                </span>
                              </div>
                              <span className="text-sm px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300">
                                {category.count}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400">No FAQs found matching your search.</p>
                  </div>
                ) : (
                  filteredFAQs.map((faq) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full text-left p-6 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                            {faq.question}
                          </h3>
                          {expandedFAQ === faq.id ? (
                            <ExpandLessIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ExpandMoreIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence>
                        {expandedFAQ === faq.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                              <div className="pt-4">
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                  {faq.answer}
                                </p>
                                {faq.hasButton && (
                                  <a
                                    href={faq.buttonLink}
                                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                                  >
                                    {faq.buttonText}
                                  </a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Support Contact */}
        <div className="text-center mt-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Still need help?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our support team is here to help you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Support
              </button>
              <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-700 px-6 py-3 rounded-lg font-medium transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;