import { getSession } from 'next-auth/react';
import connectDB from '../../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const session = await getSession({ req });
    if (!session) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    await connectDB();
    // This is a placeholder - implement actual database query for user roles
    const alumni = [
      {
        _id: '1',
        name: 'John Doe',
        batch: '2020',
        company: 'Google',
        location: 'Bangalore',
        image: '/default-avatar.png'
      },
      {
        _id: '2',
        name: 'Jane Smith',
        batch: '2019',
        company: 'Microsoft',
        location: 'Mumbai',
        image: '/default-avatar.png'
      }
    ];

    return res.status(200).json(alumni);
  } catch (error) {
    console.error('Error fetching alumni:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}