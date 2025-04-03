import React from 'react';
import './Home.css';
import { homeInfo } from '../Data';

const Home = () => {
  // Define the technologies and their corresponding links
  const techLinks = {
    // React: "https://reactjs.org/",
    // Django: "https://www.djangoproject.com/",
    "RAG systems": "https://www.example.com/rag",
    LangChain: "https://www.langchain.com/",
    "OpenAI SDK": "https://platform.openai.com/docs",
    AI: "https://www.example.com/ai",
    LLMs: "https://www.example.com/llms"
  };

  // Function to render the description with clickable links
  const renderDescription = (text) => {
    return text.split('**').map((part, index) => {
      if (index % 2 !== 0) {  // This is the highlighted text
        const link = techLinks[part];
        return link ? (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
            {part}
          </a>
        ) : (
          <span key={index} className="font-bold text-blue-600">{part}</span>
        );
      } else {  // Non-highlighted part
        return <span key={index}>{part}</span>;
      }
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen relative color">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://w0.peakpx.com/wallpaper/103/100/HD-wallpaper-razer-logo-red-razer-computer-logo.jpg')" }}></div>
      <div className="max-w-4xl mx-auto px-8 py-12 relative z-10">
        <h1 className="text-4xl font-bold mb-40">{homeInfo.title}</h1>
        <p className="text-2xl mb-8">
          {renderDescription(homeInfo.description)}
        </p>
      </div>
    </div>
  );
};

export default Home;
