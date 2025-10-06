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

// API route to get/update/delete a specific user
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    // TODO: Verify admin authentication

    if (req.method === 'GET') {
      // Get user details
      const user = await adminAuth.getUser(id as string);
      
      const providers = user.providerData.map(p => p.providerId);
      const authProvider = providers.includes('google.com') ? 'google' : 
                          providers.includes('facebook.com') ? 'facebook' : 'email';

      return res.status(200).json({
        uid: user.uid,
        email: user.email || 'N/A',
        displayName: user.displayName || user.email?.split('@')[0] || 'User',
        createdAt: user.metadata.creationTime,
        lastLogin: user.metadata.lastSignInTime || null,
        disabled: user.disabled,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL || null,
        phoneNumber: user.phoneNumber || null,
        authProvider: authProvider,
        customClaims: user.customClaims || {},
      });
    }

    if (req.method === 'DELETE') {
      // Delete user
      console.log(`🗑️ Deleting user: ${id}`);
      
      await adminAuth.deleteUser(id as string);
      
      console.log(`✅ User ${id} deleted successfully`);

      return res.status(200).json({
        success: true,
        message: 'User deleted successfully',
        uid: id
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error: any) {
    console.error('❌ User API error:', error);
    return res.status(500).json({ 
      error: 'Failed to process request',
      message: error.message 
    });
  }
}

