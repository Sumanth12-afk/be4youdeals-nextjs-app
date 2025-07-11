// lib/firebase.ts
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBA0pPDn51vk_ZyyKnBZV0w9tOKXG1lniw",
  authDomain: "be4youdeals.firebaseapp.com",
  projectId: "be4youdeals",
  storageBucket: "be4youdeals.appspot.com",
  messagingSenderId: "941415178206",
  appId: "1:941415178206:web:0c246e2b5b6dc42293074f"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { firebase, auth };
