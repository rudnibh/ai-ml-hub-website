export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  registrationLink?: string;
}

export const upcomingEvent: Event = {
  title: 'AI Workshop: Deep Learning Fundamentals',
  date: 'March 25, 2024',
  time: '2:00 PM - 5:00 PM',
  location: 'CS Building, Room 201',
  description: 'Join us for an intensive workshop on deep learning fundamentals. Learn about neural networks, backpropagation, and implement your first AI model!',
  imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
  registrationLink: '#'
};

export const pastEvents: Event[] = [
  {
    title: "Orientation",
    date: "Sept 18, 2024",
    time: "5:00 PM - 6:00 PM",
    location: "LT 2",
    description: "Introduction to Machine Learning and Artificial Intelligence.",
    imageUrl: "https://i.ibb.co/3hqQsfp/orientation.jpg"
  },
  // Add more past events here
];