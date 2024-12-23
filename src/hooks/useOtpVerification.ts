import { useState } from 'react';
import { otpService } from '../services/otpService';

interface UseOtpVerificationReturn {
  isLoading: boolean;
  error: string | null;
  sessionId: string | null;
  sendOtp: (phoneNumber: string) => Promise<boolean>;
  verifyOtp: (otp: string) => Promise<boolean>;
  resetError: () => void;
}

export function useOtpVerification(): UseOtpVerificationReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);

  const sendOtp = async (phoneNumber: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await otpService.sendOtp(phoneNumber);
      
      if (!response.success) {
        setError(response.error || 'Failed to send OTP');
        return false;
      }

      setSessionId(response.sessionId!);
      return true;
    } catch (err) {
      setError('An unexpected error occurred');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async (otp: string): Promise<boolean> => {
    if (!sessionId) {
      setError('Invalid session. Please request a new OTP');
      return false;
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await otpService.verifyOtp(sessionId, otp);
      
      if (!response.success) {
        setError(response.error || 'Invalid OTP');
        return false;
      }

      return true;
    } catch (err) {
      setError('An unexpected error occurred');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const resetError = () => setError(null);

  return {
    isLoading,
    error,
    sessionId,
    sendOtp,
    verifyOtp,
    resetError
  };
}