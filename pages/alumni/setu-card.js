import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PageLayout from '../../components/PageLayout';

export default function SetuCard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch('/api/users/card');
        if (response.ok) {
          const data = await response.json();
          setCardData(data);
        }
      } catch (error) {
        console.error('Error fetching setu card data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (session) {
      fetchCardData();
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
        <h1 className="text-3xl font-bold mb-8">Setu Card</h1>
        {cardData ? (
          <div className="max-w-md mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center space-x-4">
                <img 
                  src={session?.user?.image || '/default-avatar.png'} 
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-4 border-white"
                />
                <div>
                  <h2 className="text-2xl font-bold text-white">{session?.user?.name}</h2>
                  <p className="text-indigo-100">{cardData.batch || 'Class of YYYY'}</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="border-t border-white/20 pt-4">
                  <p className="text-sm text-indigo-100">Current Role</p>
                  <p className="text-white font-medium">{cardData.role || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-sm text-indigo-100">Company</p>
                  <p className="text-white font-medium">{cardData.company || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-sm text-indigo-100">Location</p>
                  <p className="text-white font-medium">{cardData.location || 'Not specified'}</p>
                </div>
              </div>
              <button className="mt-6 w-full bg-white text-indigo-600 rounded-lg px-4 py-2 font-medium hover:bg-indigo-50 transition-colors">
                Share Card
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">No card data available.</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
}