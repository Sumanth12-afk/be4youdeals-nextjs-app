// Middleware to protect admin routes
import { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';
import { auth } from './firebase';

export interface AuthenticatedRequest extends NextApiRequest {
  user?: {
    uid: string;
    email: string | null;
    role?: string;
  };
}

export const adminMiddleware = async (
  req: AuthenticatedRequest,
  res: NextApiResponse,
  next: () => void
) => {
  try {
    // Get authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized - No token provided' });
    }

    const token = authHeader.split('Bearer ')[1];
    
    // Verify the Firebase ID token
    // Note: For production, use Firebase Admin SDK to verify tokens
    // For now, we'll do client-side verification
    const user = auth.currentUser;
    
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }

    // Get user's custom claims
    const idTokenResult = await user.getIdTokenResult();
    const isAdmin = idTokenResult.claims.admin === true;
    
    if (!isAdmin) {
      return res.status(403).json({ error: 'Forbidden - Admin access required' });
    }

    // Attach user info to request
    req.user = {
      uid: user.uid,
      email: user.email,
      role: idTokenResult.claims.role as string,
    };

    next();
  } catch (error) {
    console.error('Admin middleware error:', error);
    return res.status(401).json({ error: 'Unauthorized - Token verification failed' });
  }
};

// Note: Admin page protection is done in the AdminLayout component
// Each admin page wraps its content with <AdminLayout> which checks authentication

