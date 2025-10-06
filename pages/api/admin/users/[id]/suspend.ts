import { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  try {
    const serviceAccount = require('../../../../../serviceAccountKey.json');
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } catch (error) {
    console.error('Error initializing Firebase Admin:', error);
  }
}

const adminAuth = admin.auth();

// API route to suspend/activate a user
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;
  const { suspend } = req.body;

  try {
    // TODO: Verify admin authentication
    // TODO: Check admin has permission to suspend users

    console.log(`${suspend ? '🚫 Suspending' : '✅ Activating'} user: ${id}`);

    // Update user disabled status in Firebase Auth
    await adminAuth.updateUser(id as string, {
      disabled: suspend
    });

    console.log(`✅ User ${id} ${suspend ? 'suspended' : 'activated'} successfully`);

    return res.status(200).json({
      success: true,
      message: `User ${suspend ? 'suspended' : 'activated'} successfully`,
      uid: id,
      disabled: suspend
    });
  } catch (error: any) {
    console.error('❌ Suspend user error:', error);
    return res.status(500).json({ 
      error: 'Failed to update user status',
      message: error.message 
    });
  }
}

