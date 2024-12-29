// Environment variable validation
export const requiredEnvVars = [
    'VITE_FIREBASE_API_KEY',
    'VITE_FIREBASE_AUTH_DOMAIN',
    'VITE_FIREBASE_PROJECT_ID',
    'VITE_FIREBASE_STORAGE_BUCKET',
    'VITE_FIREBASE_MESSAGING_SENDER_ID',
    'VITE_FIREBASE_APP_ID'
  ] as const;
  
  export const validateEnvVars = () => {
    const missingVars = requiredEnvVars.filter(varName => !import.meta.env[varName]);
    if (missingVars.length > 0) {
      console.warn(
        'Missing environment variables:\n',
        missingVars.join('\n')
      );
      return false;
    }
    return true;
  };