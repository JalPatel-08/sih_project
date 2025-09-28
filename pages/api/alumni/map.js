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
    // This is a placeholder - implement actual database query for user locations
    const alumniLocations = [
      {
        _id: '1',
        name: 'John Doe',
        latitude: 12.9716,
        longitude: 77.5946,
        location: 'Bangalore, India'
      },
      {
        _id: '2',
        name: 'Jane Smith',
        latitude: 19.0760,
        longitude: 72.8777,
        location: 'Mumbai, India'
      }
    ];

    return res.status(200).json(alumniLocations);
  } catch (error) {
    console.error('Error fetching alumni locations:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}