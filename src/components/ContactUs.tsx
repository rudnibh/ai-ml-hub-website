import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, Check } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Card } from './ui/Card';
import { useFirebaseOtp } from '../hooks/useFirebaseOtp';
import { OtpInput } from './ui/OtpInput';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const [verificationStep, setVerificationStep] = useState<'initial' | 'phone' | 'complete'>('initial');
  const [otp, setOtp] = useState('');
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    isLoading,
    error: otpError,
    sendOtp,
    verifyOtp,
    resetError
  } = useFirebaseOtp();

  const handleSendOtp = async () => {
    if (!formData.phone) {
      setError('Please enter a valid phone number');
      return;
    }
    
    const sent = await sendOtp(formData.phone);
    if (sent) {
      setVerificationStep('phone');
      setSuccess('OTP sent successfully!');
      setTimeout(() => setSuccess(null), 3000);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      setError('Please enter the OTP');
      return;
    }

    const verified = await verifyOtp(otp);
    if (verified) {
      setVerificationStep('complete');
      setSuccess('Phone number verified successfully!');
      setTimeout(() => setSuccess(null), 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (verificationStep !== 'complete') {
      setError('Please complete phone verification');
      return;
    }

    setSuccess('Form submitted successfully!');
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      phone: `+${value}`
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      consent: e.target.checked
    }));
  };

  return (
    <section id="contactus" className="relative pt-24 pb-20 z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Get in Touch
        </h2>
      
        <Card className="overflow-hidden transform transition-transform duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gradient-to-br from-purple-600 to-pink-600 p-8 text-white">
              <p className="mb-8 text-purple-100">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-purple-200" />
                  <span>ai/mlhubjiit@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-purple-200" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-purple-200" />
                  <span>JIIT Noida, Sec - 62</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error/Success Messages */}
                {(error || otpError) && (
                  <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <p>{error || otpError}</p>
                  </div>
                )}
                {success && (
                  <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
                    <Check className="h-5 w-5" />
                    <p>{success}</p>
                  </div>
                )}

                {/* Form Fields */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone Verification Section */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone <span className="text-purple-400">*</span>
                  </label>
                  <div className="space-y-4">
                    <div className="flex space-x-2">
                      <div className="flex-1">
                        <PhoneInput
                          country={'in'}
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          inputProps={{
                            required: true,
                            className: 'w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300'
                          }}
                          disabled={verificationStep === 'complete'}
                          containerClass="phone-input-container"
                          buttonClass="phone-input-button"
                          dropdownClass="phone-input-dropdown"
                        />
                      </div>
                      {verificationStep === 'initial' && (
                        <button
                          type="button"
                          onClick={handleSendOtp}
                          disabled={isLoading}
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
                          onChange={setOtp}
                          length={6}
                          disabled={isLoading}
                        />
                        <button
                          type="button"
                          onClick={handleVerifyOtp}
                          disabled={isLoading}
                          className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Verify OTP
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your message..."
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    className="mt-1 h-4 w-4 rounded border-gray-700 text-purple-500 focus:ring-purple-500"
                  />
                  <label htmlFor="consent" className="ml-2 text-sm text-gray-300">
                    I allow this website to store my submission so they can respond to my inquiry.{' '}
                    <span className="text-purple-400">*</span>
                  </label>
                </div>

                {/* Hidden reCAPTCHA container */}
                <div id="recaptcha-container"></div>

                <button
                  type="submit"
                  disabled={verificationStep !== 'complete' || !formData.consent || isLoading}
                  className="group relative w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:translate-y-[-2px] flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">Send Message</span>
                  <Send className="h-5 w-5" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                </button>
              </form>
            </div>
          </div>
        </Card>
      </div>

      <style>{`
        .phone-input-container {
          width: 100%;
        }
        .phone-input-container .form-control {
          width: 100% !important;
          background-color: rgb(31, 41, 55) !important;
          border-color: rgb(55, 65, 81) !important;
          color: white !important;
          height: 48px !important;
        }
        .phone-input-button {
          background-color: rgb(31, 41, 55) !important;
          border-color: rgb(55, 65, 81) !important;
        }
        .phone-input-button:hover {
          background-color: rgb(55, 65, 81) !important;
        }
        .phone-input-dropdown {
          background-color: rgb(31, 41, 55) !important;
          color: white !important;
        }
        .phone-input-dropdown .country:hover {
          background-color: rgb(55, 65, 81) !important;
        }
        .phone-input-dropdown .selected {
          background-color: rgb(139, 92, 246) !important;
        }
      `}</style>
    </section>
  );
}