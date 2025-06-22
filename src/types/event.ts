export interface Event {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  imageUrl: string;
  registrationLink?: string;
  whatsappLink?: string;
  certificate?: string;
  status: 'upcoming' | 'past' | 'ongoing';
  isFeatured?: boolean;
} 