// All site content lives here. Edit this file to update text, projects, skills or links.
import projectAttendance from './Dailywork/project1.gif';
import projectGesture from './Dailywork/project2.png';
import projectMovies from './Dailywork/project3.png';
import projectCar from './Dailywork/project4.jpeg';
import projectAgent from './Dailywork/chatbot_project.png';

export const profile = {
  name: 'Sharyar Khan',
  role: 'AI Engineer',
  location: 'Islamabad, Pakistan',
  email: 'ksharyar12345@gmail.com',
  phone: '+92 326 5652667',
  phoneHref: 'tel:+923265652667',
};

export const socials = [
  { name: 'GitHub', href: 'https://github.com/sharyark' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sharyar-khan-2014251a5/' },
  { name: 'Instagram', href: 'https://instagram.com/sharyarkhan20' },
  { name: 'Facebook', href: 'https://web.facebook.com/sharyar.shary.5243' },
];

export const homeInfo = {
  headline: 'I build AI agents and intelligent systems that do useful work.',
  intro:
    'I started as a web developer building apps with React and Django. Today I focus on agentic AI — RAG systems, LangChain, LangGraph and the OpenAI SDK — and on robotics projects that sense, decide and act in the real world.',
  focus: ['Agentic AI', 'RAG systems', 'LLM applications', 'Robotics & IoT'],
};

export const aboutInfo = {
  story: [
    "I'm from Attock, Pakistan. My path into technology began with an associate degree in electrical technology, which gave me a hands-on feel for circuits, wiring and hardware.",
    'I went on to study computer science at PMAS Arid Agriculture University, Rawalpindi, graduating in 2023. I started my career as a web developer and shipped projects with Django, Express and React.',
    'From there I moved into AI. I now specialise in agentic systems, working with PyTorch, scikit-learn, LangChain, the OpenAI SDK, CrewAI and AutoGen. I still love robotics and Arduino — building things that connect software to the physical world.',
  ],
};

export const skillGroups = [
  {
    title: 'LLMs & Agents',
    items: ['LangChain', 'LangGraph', 'OpenAI SDK', 'CrewAI', 'AutoGen', 'RAG systems'],
  },
  {
    title: 'Machine Learning',
    items: ['Python', 'PyTorch', 'scikit-learn', 'pandas', 'MediaPipe'],
  },
  {
    title: 'Web & APIs',
    items: ['FastAPI', 'Django', 'Express', 'React', 'Streamlit'],
  },
  {
    title: 'Hardware',
    items: ['Arduino', 'IoT', 'Robotics', 'Electrical wiring'],
  },
];

export const projects = [
  {
    id: 'agent',
    title: 'AI Agent with LangGraph & Streamlit',
    description:
      'A chatbot agent that uses LangGraph for state management and a Streamlit interface. Groq-hosted LLMs handle reasoning and conversation.',
    image: projectAgent,
    tags: ['LangGraph', 'Streamlit', 'Groq'],
    link: 'https://github.com/sharyark/chatbot_agent',
    linkLabel: 'View code',
    featured: true,
  },
  {
    id: 'gesture',
    title: 'Hand Gesture Recognition',
    description:
      'Reads hand gestures from a webcam with MediaPipe and shows the counted number on a 7-segment display driven by an Arduino.',
    image: projectGesture,
    tags: ['Python', 'MediaPipe', 'Arduino'],
    link: 'https://github.com/sharyark/gesture-arduino_7segment',
    linkLabel: 'View code',
    featured: true,
  },
  {
    id: 'attendance',
    title: 'Face Recognition Attendance System',
    description:
      'My final-year project: an IoT system that recognises faces to mark attendance automatically, replacing slow and error-prone manual tracking.',
    image: projectAttendance,
    imageFit: 'contain',
    tags: ['Computer Vision', 'IoT', 'Python'],
    link: 'https://github.com/sharyark/Final_year_project-bscs-',
    linkLabel: 'View code',
    featured: true,
  },
  {
    id: 'movies',
    title: 'Movie Recommender',
    description:
      'Turns Kaggle movie data into bag-of-words vectors and recommends the five most similar titles using cosine similarity.',
    image: projectMovies,
    tags: ['pandas', 'scikit-learn', 'NLP'],
    link: 'https://github.com/sharyark/Movie_reomender_system',
    linkLabel: 'View code',
  },
  {
    id: 'car',
    title: 'Smart Robotic Car',
    description:
      'A remote-controlled robotic car with sensors for obstacle detection and automated driving behaviour.',
    image: projectCar,
    tags: ['Robotics', 'Arduino', 'Sensors'],
    link: 'https://web.facebook.com/sharyar.shary.5243/videos/958427622410554/',
    linkLabel: 'Watch video',
  },
];

export const educationInfo = [
  {
    title: 'BS Computer Science',
    institution: 'PMAS Arid Agriculture University, Rawalpindi',
    institutionUrl: 'https://www.uaar.edu.pk/',
    year: '2019 – 2023',
    detail: 'CGPA 3.74',
    url: '/gred',
  },
  {
    title: 'Associate Degree in Electrical Technology',
    institution: 'Kamra Polytechnic Institute',
    institutionUrl: 'http://skillingpakistan.org/institutes/228208',
    year: '2016 – 2019',
    url: '/dae',
  },
  {
    title: 'Building Electrician Course',
    institution: 'NAVTTC',
    institutionUrl: 'https://navttc.gov.pk/',
    detail: 'Hands-on installation of electrical wiring.',
    url: '/building',
  },
  {
    title: 'Self-directed Learning',
    institution: 'YouTube & Coursera',
    detail: 'Ongoing study across computer science, AI and electrical technology.',
  },
];
