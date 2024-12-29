import { useState } from 'react';
import { signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import { auth } from '../config/firebase';
import { validatePhoneNumber } from '../utils/phone';

interface UseFirebaseOtpReturn {
  isLoading: boolean;
  error: string | null;
  confirmationResult: ConfirmationResult | null;
  sendOtp: (phoneNumber: string) => Promise<boolean>;
  verifyOtp: (otp: string) => Promise<boolean>;
  resetError: () => void;
}

export function useFirebaseOtp(): UseFirebaseOtpReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);

  const sendOtp = async (phoneNumber: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      setError(null);
  
      const validationError = validatePhoneNumber(phoneNumber);
      if (validationError) {
        throw new Error(validationError);
      }
  
      // Mock Application Verifier
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    setConfirmationResult(confirmation);
    return true;
  } catch (err: any) {
    const errorMessage = err.code === 'auth/invalid-phone-number' 
      ? 'Please enter a valid phone number with country code'
      : err.message || 'Authentication service not available';
    setError(errorMessage);
    return false;
  } finally {
    setIsLoading(false);
  }
};
  const verifyOtp = async (otp: string): Promise<boolean> => {
    if (!confirmationResult) {
      setError('Please request OTP first');
      return false;
    }

    try {
      setIsLoading(true);
      setError(null);
      await confirmationResult.confirm(otp);
      return true;
    } catch (err: any) {
      setError(err.message || 'Invalid OTP');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const resetError = () => setError(null);

  return {
    isLoading,
    error,
    confirmationResult,
    sendOtp,
    verifyOtp,
    resetError
  };
}
