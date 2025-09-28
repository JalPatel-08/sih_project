import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PageLayout from '../../components/PageLayout';

export default function AlumniDirectory() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await fetch('/api/users?role=alumni');
        if (response.ok) {
          const data = await response.json();
          setAlumni(data);
        }
      } catch (error) {
        console.error('Error fetching alumni:', error);
      } finally {
        setLoading(false);
      }
    };

    if (session) {
      fetchAlumni();
    }
  }, [session]);

  if (loading) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Alumni Directory</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((alumnus) => (
            <div key={alumnus._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-4">
                <img 
                  src={alumnus.image || '/default-avatar.png'} 
                  alt={`${alumnus.name}'s avatar`}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{alumnus.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{alumnus.batch || 'Batch: N/A'}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{alumnus.company || 'Company: N/A'}</p>
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-indigo-700 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}