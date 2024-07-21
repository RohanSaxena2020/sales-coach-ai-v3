// Import the functions needed from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
  appId: process.env.FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore service and Authentication
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, serverTimestamp };
