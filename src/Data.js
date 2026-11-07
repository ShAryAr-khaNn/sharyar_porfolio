// All site content lives here. Edit this file to update text, projects, skills or links.
import {
  BuildingStorefrontIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import projectAttendance from './Dailywork/project1.gif';
import projectGesture from './Dailywork/project2.png';
import projectMovies from './Dailywork/project3.png';
import projectCar from './Dailywork/project4.jpeg';
import projectAgent from './Dailywork/chatbot_project.png';
import projectShinka from './Dailywork/shinka_logo.jpeg';

export const profile = {
  name: 'Sharyar Khan',
  role: 'AI & Full-Stack Engineer',
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
  headline: 'I build AI systems and the software businesses run on.',
  intro:
    'I build RAG chatbots and machine-learning models, and full-stack apps that replace paper registers for real businesses. My background in electrical technology means I also work on embedded and IoT hardware, from ESP32 sensors to a phone-controlled drone.',
  focus: ['AI & RAG systems', 'Full-stack web apps', 'Business software', 'Embedded & IoT'],
};

export const aboutInfo = {
  story: [
    "I'm from Attock, Pakistan. My path into technology began with an associate degree in electrical technology, which gave me a hands-on feel for circuits, wiring and hardware.",
    'I went on to study computer science at PMAS Arid Agriculture University, Rawalpindi, graduating in 2023. I started with web development in Django and React, then moved into AI: building a RAG chatbot over company documents, and training models that run on ESP32 microcontrollers.',
    'Today I build full-stack software for real businesses with FastAPI, Laravel and React, from bookkeeping portals for local suppliers to fleet fuel-payment backends. I still love hardware, and build robots and drones in my spare time.',
  ],
};

export const experience = [
  {
    role: 'AI/ML Engineer',
    company: 'Embeddronics',
    location: 'Islamabad',
    period: '2025 – 2026',
    points: [
      'Trained a regression model that corrects temperature and pressure drift in IoT sensor readings.',
      'Quantized the model and ran it on-device on an ESP32 with TensorFlow Lite, working with the firmware and hardware team.',
    ],
  },
  {
    role: 'AI/ML Engineer',
    company: 'FOSL X',
    location: 'Pakistan',
    period: '2024 – 2025',
    points: [
      'Built a RAG chatbot that answers staff questions from company PDFs, policies and manuals.',
      'Handled chunking, embeddings and ChromaDB vector search, served through FastAPI and deployed with Docker.',
    ],
  },
  {
    role: 'Generative AI Virtual Intern',
    company: 'SkilledScore',
    location: 'Remote',
    period: '2024',
    points: ['Hands-on work with LLM concepts, tools and AI application workflows.'],
  },
];

// Only skills used in real projects or jobs.
export const skillGroups = [
  {
    title: 'AI & LLMs',
    items: ['LangChain', 'LangGraph', 'OpenAI SDK', 'RAG', 'ChromaDB', 'Groq', 'Streamlit'],
  },
  {
    title: 'Machine Learning',
    items: ['Python', 'PyTorch', 'Keras', 'scikit-learn', 'TensorFlow Lite', 'pandas', 'NumPy', 'MediaPipe'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'SQLAlchemy', 'Django', 'PHP', 'Laravel', 'Lumen', 'REST APIs', 'JWT auth'],
  },
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'Redux', 'PWA'],
  },
  {
    title: 'Data & DevOps',
    items: ['PostgreSQL', 'MySQL', 'Supabase', 'Docker', 'Git', 'GitHub Actions', 'Vercel', 'Power BI'],
  },
  {
    title: 'Hardware',
    items: ['Arduino', 'ESP32', 'Raspberry Pi Pico W', 'MicroPython', 'Sensors & IoT', 'Electrical wiring'],
  },
];

// A project without an `image` gets a drawn cover from `cover` (icon + short label).
// A project without a `link` shows `linkLabel` as plain text (e.g. private client work).
export const projects = [
  {
    id: 'hisaab-portal',
    title: 'Hisaab Portal: Construction Material Supply',
    description:
      'Replaces the paper registers of a sand, cement and block supplier. Khata, challans, yard stock, diesel, driver pay and wages post to one ledger, so balances and profit always agree. Runs on the client\'s PC with one-click backup.',
    cover: { icon: BuildingStorefrontIcon, label: 'Business portal' },
    tags: ['FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Ant Design'],
    link: 'https://github.com/sharyark/Best_Building_Material',
    linkLabel: 'View code',
    featured: true,
  },
  {
    id: 'chakki-hisaab',
    title: 'Chakki Hisaab: Flour Mill Bookkeeping',
    description:
      'An Urdu bookkeeping app for an atta chakki. Daily income, customer udhaar, expenses and grain stock, with receipts sent on WhatsApp. Installs on an Android phone as a PWA, no Play Store needed.',
    cover: { icon: DevicePhoneMobileIcon, label: 'Urdu mobile app' },
    tags: ['React', 'Supabase', 'PWA', 'Tailwind CSS'],
    link: 'https://github.com/sharyark/Atta_chaki_book_keeping',
    linkLabel: 'View code',
    featured: true,
  },
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
    id: 'vehicle-wallet',
    title: 'Vehicle Wallet: Fleet Fuel Payments',
    description:
      'Backend for a fleet fuel wallet used by drivers, fuel-station attendants and company admins. Fuel requests, refuelling transactions, invoices, statements, PDF/Excel reports and ERP sync. Includes a migration from Lumen 8 to Laravel 13.',
    cover: { icon: TruckIcon, label: 'Fleet backend' },
    tags: ['PHP', 'Lumen', 'Laravel', 'MySQL', 'JWT'],
    linkLabel: 'Private client project',
  },
  {
    id: 'quadcopter',
    title: 'Pico W Quadcopter',
    description:
      'A small drone flown from a phone browser. A Raspberry Pi Pico W runs the MicroPython flight loop with an MPU-6050 IMU and PID control, and hosts its own Wi-Fi and control page.',
    cover: { icon: CpuChipIcon, label: 'Embedded flight control' },
    tags: ['MicroPython', 'Raspberry Pi Pico W', 'IMU', 'PID'],
    linkLabel: 'In progress',
  },
  {
    id: 'shinka',
    title: 'Shinka Welfare Society Website',
    description:
      'Website for a volunteer-run charity in village Shinka, showing its programmes, team and donation details.',
    image: projectShinka,
    imageFit: 'contain',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    link: 'https://www.shinkawelfaresociety.com',
    linkLabel: 'Visit site',
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
  },
  {
    id: 'attendance',
    title: 'Face Recognition Attendance System',
    description:
      'My final-year project: an IoT system that recognises faces to mark attendance automatically, with a Django web app and SQL records.',
    image: projectAttendance,
    imageFit: 'contain',
    tags: ['Computer Vision', 'Django', 'IoT'],
    link: 'https://github.com/sharyark/Final_year_project-bscs-',
    linkLabel: 'View code',
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
      'A remote-controlled robotic car with sensors for obstacle detection and a live ESP32-CAM video stream.',
    image: projectCar,
    tags: ['Robotics', 'ESP32-CAM', 'MicroPython'],
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
