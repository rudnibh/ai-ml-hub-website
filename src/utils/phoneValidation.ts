// Validates and formats phone numbers for Firebase auth
export const phoneValidation = {
    // Validates phone number format
    isValid: (phone: string): boolean => {
      // Remove all non-digit characters
      const digits = phone.replace(/\D/g, '');
      // Must have at least 10 digits (most countries)
      return digits.length >= 10;
    },
  
    // Format phone number to E.164 format required by Firebase
    format: (phone: string): string => {
      const digits = phone.replace(/\D/g, '');
      // If no country code provided, assume +1 (US)
      if (!phone.startsWith('+')) {
        return `+1${digits}`;
      }
      return `+${digits}`;
    },
  
    // Get error message if invalid
    getError: (phone: string): string | null => {
      if (!phone) return 'Phone number is required';
      if (!phoneValidation.isValid(phone)) {
        return 'Please enter a valid phone number with at least 10 digits';
      }
      return null;
    }
  };