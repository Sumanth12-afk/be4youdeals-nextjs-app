// Firebase Admin SDK for server-side operations
import admin from 'firebase-admin';

// Initialize Firebase Admin (singleton pattern)
if (!admin.apps.length) {
  try {
    const serviceAccount = require('../serviceAccountKey.json');
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    
    console.log('✅ Firebase Admin initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing Firebase Admin:', error);
    // Fallback: Try to initialize with environment variables
    try {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
          privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
          clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        })
      });
      console.log('✅ Firebase Admin initialized with environment variables');
    } catch (envError) {
      console.error('❌ Failed to initialize Firebase Admin with env vars:', envError);
    }
  }
}

export const adminAuth = admin.auth();
export const adminDb = admin.firestore();
export default admin;

