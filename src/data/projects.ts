import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Jailbreak',
    description: 'A game where you try to convince an AI prison warden to let you out of your cell by telling you the secret phrase.',
    students: ['Agnibha Nanda', 'Harsimran Singh'],
    technologies: ['React', 'Typescript', 'Tailwind', 'Gemini API'],
    image: 'ai-jailbreak.png',
    date: '2025',
    year: '2025',
    liveUrl: 'https://ai-jailbreak.vercel.app/',
    sourceUrl: 'https://github.com/agnibhananda/AI-jailbreak'
  },
  {
    id: '2',
    title: 'Photobooth',
    description: 'Transform photos into artistic portraits using Stable Diffusion.',
    students: ['Agnibha Nanda', 'Aarnya Jain'],
    technologies: ['Stable Diffusion', 'Typescript',],
    image: 'photobooth.jpg',
    date: '2025',
    year: '2025',
    sourceUrl: 'https://github.com/agnibhananda/AI-ML-Hub-Photobooth'
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
  },
  {
    id: '6',
    title: 'Jaypee Learning Hub',
    description: 'Jaypee Learning Hub is designed to help JIITians and other students by providing well-organized academic resources.',
    students: ['Swayam Gupta', 'Rishu Goyal'],
    technologies: ['HTML','CSS', 'JS', 'PHP', 'MySQL'],
    image: 'jlh.png',
    date: '2025-01-01',
    year: '2025',
    likes: 43,
    liveUrl: 'https://jaypeelearninghub.great-site.net',
    sourceUrl: 'https://github.com/SwayamGupta12345/Jaypee_learning_hub'
  }
];
