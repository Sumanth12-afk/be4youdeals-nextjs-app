import { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      })
    });
    console.log('✅ Firebase Admin initialized from environment variables');
  } catch (error) {
    console.error('❌ Error initializing Firebase Admin:', error);
  }
}

const adminAuth = admin.auth();

// API route to get user statistics
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // TODO: Verify admin authentication

    console.log('📊 Calculating user statistics...');

    // Fetch all users
    const listUsersResult = await adminAuth.listUsers(1000);
    const users = listUsersResult.users;

    // Calculate statistics
    const total = users.length;
    const active = users.filter(u => !u.disabled).length;
    const suspended = users.filter(u => u.disabled).length;
    const emailVerified = users.filter(u => u.emailVerified).length;
    
    // Get users created today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const newToday = users.filter(u => {
      const createdDate = new Date(u.metadata.creationTime);
      return createdDate >= today;
    }).length;

    // Calculate auth providers
    const googleUsers = users.filter(u => 
      u.providerData.some(p => p.providerId === 'google.com')
    ).length;
    const emailUsers = users.filter(u => 
      u.providerData.some(p => p.providerId === 'password')
    ).length;

    const stats = {
      total,
      active,
      suspended,
      emailVerified,
      newToday,
      authProviders: {
        google: googleUsers,
        email: emailUsers,
      }
    };

    console.log('✅ User statistics:', stats);

    return res.status(200).json(stats);
  } catch (error: any) {
    console.error('❌ User stats error:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch user statistics',
      message: error.message 
    });
  }
}

