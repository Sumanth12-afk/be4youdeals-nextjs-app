import { NextApiRequest, NextApiResponse } from 'next';

// Diagnostic endpoint to check Firebase Admin environment variables
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const diagnostics = {
    timestamp: new Date().toISOString(),
    env_check: {
      FIREBASE_ADMIN_PROJECT_ID: process.env.FIREBASE_ADMIN_PROJECT_ID ? '✅ Set' : '❌ Missing',
      FIREBASE_ADMIN_CLIENT_EMAIL: process.env.FIREBASE_ADMIN_CLIENT_EMAIL ? '✅ Set' : '❌ Missing',
      FIREBASE_ADMIN_PRIVATE_KEY: process.env.FIREBASE_ADMIN_PRIVATE_KEY ? 
        (process.env.FIREBASE_ADMIN_PRIVATE_KEY.includes('BEGIN PRIVATE KEY') ? '✅ Set (valid format)' : '⚠️ Set (invalid format)') 
        : '❌ Missing',
    },
    values_preview: {
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID || 'NOT SET',
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL ? 
        process.env.FIREBASE_ADMIN_CLIENT_EMAIL.substring(0, 20) + '...' : 'NOT SET',
      privateKeyLength: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.length || 0,
      privateKeyStart: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.substring(0, 50) || 'NOT SET',
    }
  };

  return res.status(200).json(diagnostics);
}

