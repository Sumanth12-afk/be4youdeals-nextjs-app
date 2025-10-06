import { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  try {
    const serviceAccount = require('../../../../serviceAccountKey.json');
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } catch (error) {
    console.error('Error initializing Firebase Admin:', error);
  }
}

const adminAuth = admin.auth();

// API route for user management - Fetches real users from Firebase Auth
// TODO: Add authentication middleware
// TODO: Implement better pagination

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // TODO: Verify admin authentication
    // TODO: Check admin has user management permissions

    const { page = '1', limit = '20', search = '' } = req.query;
    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const searchTerm = (search as string).toLowerCase();

    console.log('📋 Fetching users from Firebase Authentication...');

    // Fetch users from Firebase Auth
    const listUsersResult = await adminAuth.listUsers(1000); // Max 1000 users per call
    
    // Map Firebase users to our format
    let allUsers = listUsersResult.users.map((user: any) => {
      const providers = user.providerData.map((p: any) => p.providerId);
      const authProvider = providers.includes('google.com') ? 'google' : 
                          providers.includes('facebook.com') ? 'facebook' : 'email';
      
      return {
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
        // Try to get region from custom claims if available
        region: (user.customClaims as any)?.region || 'N/A',
      };
    });

    console.log(`✅ Found ${allUsers.length} total users in Firebase`);

    // Filter by search if provided
    if (searchTerm) {
      allUsers = allUsers.filter((user: any) => 
        user.email.toLowerCase().includes(searchTerm) ||
        user.displayName?.toLowerCase().includes(searchTerm) ||
        user.uid.toLowerCase().includes(searchTerm)
      );
      console.log(`🔍 Filtered to ${allUsers.length} users matching: "${searchTerm}"`);
    }

    // Calculate pagination
    const total = allUsers.length;
    const totalPages = Math.ceil(total / limitNum);
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;
    const paginatedUsers = allUsers.slice(startIndex, endIndex);

    console.log(`📄 Returning page ${pageNum} of ${totalPages} (${paginatedUsers.length} users)`);

    return res.status(200).json({
      users: paginatedUsers,
      totalPages,
      currentPage: pageNum,
      total,
      hasMore: listUsersResult.pageToken ? true : false, // If there's a next page token
    });
  } catch (error: any) {
    console.error('❌ Users API error:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch users',
      message: error.message 
    });
  }
}

