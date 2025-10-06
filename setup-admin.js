const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Function to set admin role
async function setAdminRole(email, role = 'super_admin') {
  try {
    console.log(`\n🔍 Looking up user: ${email}`);
    const user = await admin.auth().getUserByEmail(email);
    
    console.log(`✅ Found user: ${user.email}`);
    console.log(`   UID: ${user.uid}`);
    
    // Set custom claims
    await admin.auth().setCustomUserClaims(user.uid, {
      admin: true,
      role: role
    });
    
    console.log(`\n🎉 SUCCESS! Admin role '${role}' set for ${email}`);
    console.log(`\n⚠️  IMPORTANT: User must sign out and sign back in for changes to take effect!\n`);
    
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      console.error(`\n❌ ERROR: User ${email} not found in Firebase Authentication`);
      console.log(`💡 TIP: Make sure the user has signed up on your website first!\n`);
    } else {
      console.error(`\n❌ ERROR: ${error.message}\n`);
    }
  }
}

// ============================================
// CONFIGURE YOUR EMAIL HERE
// ============================================

const YOUR_EMAIL = 'nallandhigalsumanth@gmail.com';

// ============================================

console.log('\n╔════════════════════════════════════════╗');
console.log('║   🔐 Firebase Admin Setup Tool        ║');
console.log('╚════════════════════════════════════════╝');

// Run the setup
setAdminRole(YOUR_EMAIL).then(() => {
  process.exit(0);
}).catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});

