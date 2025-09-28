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

    // Get user's card data from database
    // This is a placeholder - implement actual database query
    const cardData = {
      batch: '2023',
      role: 'Software Engineer',
      company: 'Tech Corp',
      location: 'Mumbai, India'
    };

    return res.status(200).json(cardData);
  } catch (error) {
    console.error('Error fetching card data:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}