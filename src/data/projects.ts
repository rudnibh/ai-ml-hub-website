import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Image Recognition System',
    description: 'A deep learning-based image recognition system that can identify and classify objects in real-time using computer vision techniques.',
    students: ['Rahul Kumar', 'Priya Sharma'],
    technologies: ['Python', 'TensorFlow', 'Computer Vision', 'Deep Learning'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80',
    date: '2024-03-15',
    year: '2024',
    likes: 45,
    liveUrl: 'https://demo.example.com/image-recognition',
    sourceUrl: 'https://github.com/example/image-recognition'
  },
  {
    id: '2',
    title: 'Natural Language Processing Chatbot',
    description: 'An intelligent chatbot that uses NLP to understand and respond to user queries with context-aware responses.',
    students: ['Amit Singh', 'Neha Patel'],
    technologies: ['Python', 'NLP', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80',
    date: '2024-02-20',
    year: '2024',
    likes: 38,
    sourceUrl: 'https://github.com/example/nlp-chatbot'
  },
  {
    id: '3',
    title: 'Predictive Analytics Dashboard',
    description: 'A comprehensive dashboard that uses machine learning to predict trends and visualize data insights.',
    students: ['Sneha Gupta'],
    technologies: ['React', 'Python', 'Machine Learning', 'Data Science'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    date: '2023-12-10',
    year: '2023',
    likes: 62,
    liveUrl: 'https://analytics.example.com',
    sourceUrl: 'https://github.com/example/analytics-dashboard'
  },
  {
    id: '4',
    title: 'Neural Network Music Generator',
    description: 'An AI system that generates original music compositions using deep learning and neural networks.',
    students: ['Arun Verma', 'Meera Reddy'],
    technologies: ['Python', 'TensorFlow', 'Deep Learning'],
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80',
    date: '2023-11-05',
    year: '2023',
    likes: 51,
    liveUrl: 'https://music.example.com',
  },
  {
    id: '5',
    title: 'Sentiment Analysis Tool',
    description: 'A machine learning application that analyzes sentiment in text data from social media and customer feedback.',
    students: ['Vikram Shah'],
    technologies: ['Python', 'NLP', 'Machine Learning'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    date: '2022-09-15',
    year: '2022',
    likes: 43,
    sourceUrl: 'https://github.com/example/sentiment-analysis'
  }
];