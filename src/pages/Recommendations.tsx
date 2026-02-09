import React from 'react';
import './Recommendations.css';
import { FaLinkedin } from 'react-icons/fa';

const Recommendations: React.FC = () => {
  return (
    <div className="recommendations-page">
      <div className='timeline-container'>
        <div className="recommendation-card">
          <a href="https://www.linkedin.com/in/snigdha-shree/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
            <FaLinkedin />
          </a>
          <div className="recommendation-header">
            <div className="profile-pic-wrapper" title="Click to view LinkedIn profile">
              <img src="https://ui-avatars.com/api/?name=Snigdha+Shree&background=e50914&color=fff&size=120&bold=true" alt="Snigdha Shree" className="profile-pic" />
            </div>
            <h3 className="person-name">
              Snigdha Shree <span className="separator">|</span> <span className="person-title">Senior Salesforce Developer @Melonleaf Consulting</span>
            </h3>
          </div>
          <div className="recommendation-body">
            <p>"Uday is knowledgeable, motivated, and eager. Along with his exceptional skills, Uday exhibited a level of understanding for all work that we did as an intern. For whatever task or activity, he always offered his utmost effort. He provided his all, regardless of whether he was preoccupied with tests or college work."</p>
            <p>"All the team members found him incredibly helpful, courteous, and cheerful. He always has a smile on his face. We were given several tasks to complete as a team. He is a breeze to collaborate with. I would be happy to work with you again if the opportunity arises in the future."</p>
          </div>
          <div className="recommendation-footer">
            <p className="date">December 6, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
