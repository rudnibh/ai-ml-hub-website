import React from 'react';
import PhoneInput from 'react-phone-input-2';
import { OtpInput } from '../ui/OtpInput';

interface PhoneVerificationProps {
  phone: string;
  onPhoneChange: (value: string) => void;
  verificationStep: 'initial' | 'phone' | 'complete';
  isLoading: boolean;
  onSendOtp: () => void;
  otp: string;
  onOtpChange: (value: string) => void;
  onVerifyOtp: () => void;
}

export function PhoneVerification({
  phone,
  onPhoneChange,
  verificationStep,
  isLoading,
  onSendOtp,
  otp,
  onOtpChange,
  onVerifyOtp
}: PhoneVerificationProps) {
  const handlePhoneChange = (value: string) => {
    // Ensure the phone number starts with a plus sign and includes country code
    const formattedPhone = value.startsWith('+') ? value : `+${value}`;
    onPhoneChange(formattedPhone);
  };

  return (
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
        Phone <span className="text-purple-400">*</span>
      </label>
      <div className="space-y-4">
        <div className="flex space-x-2">
          <div className="flex-1">
            <PhoneInput
              country={'in'}
              value={phone.replace('+', '')} // Remove + for the input component
              onChange={handlePhoneChange}
              inputProps={{
                required: true,
                className: 'w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
              }}
              disabled={verificationStep === 'complete'}
              containerClass="phone-input-container"
              buttonClass="phone-input-button"
              dropdownClass="phone-input-dropdown"
              enableSearch
              searchClass="phone-input-search"
              searchPlaceholder="Search countries..."
            />
          </div>
          {verificationStep === 'initial' && (
            <button
              type="button"
              onClick={onSendOtp}
              disabled={isLoading || !phone || phone.length < 10}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              Send OTP
            </button>
          )}
        </div>

        {verificationStep === 'phone' && (
          <div className="space-y-4">
            <OtpInput
              value={otp}
              onChange={onOtpChange}
              length={6}
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={onVerifyOtp}
              disabled={isLoading || otp.length !== 6}
              className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Verify OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
}