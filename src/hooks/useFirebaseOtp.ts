import { useState } from 'react';
import { auth } from '../config/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

interface UseFirebaseOtpReturn {
  isLoading: boolean;
  error: string | null;
  confirmationResult: any;
  sendOtp: (phoneNumber: string) => Promise<boolean>;
  verifyOtp: (otp: string) => Promise<boolean>;
  resetError: () => void;
}

export function useFirebaseOtp(): UseFirebaseOtpReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmationResult, setConfirmationResult] = useState<any>(null);

  const setupRecaptcha = (phoneNumber: string) => {
    const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      size: 'invisible',
      callback: () => {
        // reCAPTCHA solved
      }
    });
    return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
  };

  const sendOtp = async (phoneNumber: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      setError(null);
      
      const formattedPhoneNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
      const confirmation = await setupRecaptcha(formattedPhoneNumber);
      setConfirmationResult(confirmation);
      
      return true;
    } catch (err: any) {
      setError(err.message || 'Failed to send OTP');
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