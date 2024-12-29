import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { validateEnvVars } from './env';
import { getFirebaseConfig } from './firebase.config';

let auth: Auth;

if (!validateEnvVars()) {
  auth = {
    signInWithPhoneNumber: async () => {
      throw new Error('Firebase not initialized: Missing environment variables');
    }
  } as unknown as Auth;
} else {
  const app = initializeApp(getFirebaseConfig());
  auth = getAuth(app);
}

export { auth };