import axios from 'axios';

interface SendOtpResponse {
  success: boolean;
  sessionId?: string;
  error?: string;
}

interface VerifyOtpResponse {
  success: boolean;
  error?: string;
}

class OtpService {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL || 'https://api.yourdomain.com';
  }

  async sendOtp(phoneNumber: string): Promise<SendOtpResponse> {
    try {
      const response = await axios.post(`${this.baseUrl}/auth/send-otp`, {
        phoneNumber: phoneNumber.replace(/\D/g, ''), // Remove non-digits
      });
      
      return {
        success: true,
        sessionId: response.data.sessionId
      };
    } catch (error) {
      console.error('Error sending OTP:', error);
      return {
        success: false,
        error: 'Failed to send OTP. Please try again.'
      };
    }
  }

  async verifyOtp(sessionId: string, otp: string): Promise<VerifyOtpResponse> {
    try {
      const response = await axios.post(`${this.baseUrl}/auth/verify-otp`, {
        sessionId,
        otp
      });
      
      return {
        success: true
      };
    } catch (error) {
      console.error('Error verifying OTP:', error);
      return {
        success: false,
        error: 'Invalid OTP. Please try again.'
      };
    }
  }
}

export const otpService = new OtpService();