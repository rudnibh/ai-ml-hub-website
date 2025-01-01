import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card } from './ui/Card';
import { Notification } from './ui/Notification';

export default function ContactUs() {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const formData = new FormData(e.currentTarget);
      await fetch('https://formsubmit.co/agnibhananda@gmail.com', {
        method: 'POST',
        body: formData
      });
      
      setShowNotification(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contactus" className="relative pt-24 pb-20 z-0">
      <Notification
        show={showNotification}
        onClose={() => setShowNotification(false)}
        message="Thank you for your message! We'll get back to you soon."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Get in Touch
        </h2>
      
        <Card className="overflow-hidden transform transition-transform duration-300">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gradient-to-br from-purple-600 to-pink-600 p-8 text-white">
              <p className="mb-8 text-purple-100">
                Have questions? We'd love to hear from you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-purple-200" />
                  <span>AI/ML Hub</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-purple-200" />
                  <span>JIIT Noida, Sec - 62</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your message..."
                  />
                </div>

                {/* Hidden Fields */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - AI/ML HUB" />
                <input type="hidden" name="_captcha" value="false" />

                <button
                  type="submit"
                  className="group relative w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:translate-y-[-2px] flex items-center justify-center space-x-2"
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
    </section>
  );
}