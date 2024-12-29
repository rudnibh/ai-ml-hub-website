export const validatePhoneNumber = (phoneNumber: string): string | null => {
    if (!phoneNumber.startsWith('+')) {
      return 'Phone number must include country code';
    }
    if (phoneNumber.length < 10) {
      return 'Phone number is too short';
    }
    return null;
  };