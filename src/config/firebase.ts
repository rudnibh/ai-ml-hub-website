import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Initialize Firebase only if environment variables are available
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Check if required Firebase config is present
const isFirebaseConfigured = firebaseConfig.apiKey && firebaseConfig.authDomain;

let auth = null;

if (isFirebaseConfigured) {
  try {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
} else {
  console.warn('Firebase configuration is missing. Authentication features will be disabled.');
}

export { auth };