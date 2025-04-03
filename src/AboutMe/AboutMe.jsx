// import React from 'react';
// import './AboutMe.css'; // Import your CSS file for styling
// import { aboutInfo } from '../Data';
// import { skills } from '../Data';
// const AboutMe = () => {

//   return (
//     <div className="about-me-container color relative color">
//       <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://w0.peakpx.com/wallpaper/103/100/HD-wallpaper-razer-logo-red-razer-computer-logo.jpg')" }}></div>
//       <div className="max-w-4xl mx-auto px-8 py-12 relative z-10">
//         <h2 className="about-me-title text-4xl font-bold mb-8">My Story</h2>
//         <p className="about-me-content text-2xl mb-8">{aboutInfo.story}</p>
//         <div className="skills-container">
//           <h3 className="skills-title text-3xl font-bold mb-4">Skills</h3>
//           <ul className="skills-list">
//             {skills.map((skill, index) => (
//               <li key={index} className="skill-item">
//                 <span className="skill-name">{skill.name}</span>
//                 <div className="progress-bar">
//                   <div className="progress" style={{ width: `${skill.level}%` }}></div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutMe;
import React from 'react';
import './AboutMe.css'; // Import your CSS file for styling
import { aboutInfo } from '../Data';
import { skills } from '../Data';

const AboutMe = () => {

  return (
    <div className="about-me-container color relative color">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://w0.peakpx.com/wallpaper/103/100/HD-wallpaper-razer-logo-red-razer-computer-logo.jpg')" }}></div>
      <div className="max-w-4xl mx-auto px-8 py-12 relative z-10">
        <h2 className="about-me-title text-4xl font-bold mb-8">My Story</h2>
        <p className="about-me-content text-2xl mb-8">{aboutInfo.story}</p>
        <div className="skills-container">
          <h3 className="skills-title text-3xl font-bold mb-4">Skills</h3>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
