import React from 'react';
import './Recommendations.css';

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src="https://ui-avatars.com/api/?name=Snigdha+Shree&background=e50914&color=fff&size=120&bold=true" alt="Snigdha Shree" className="profile-pic" />
          <div>
            <h3>Snigdha Shree</h3>
            <p>Senior Salesforce Developer</p>
            <p className="date">December 6, 2022</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ "Uday is knowledgeable, motivated, and eager. Along with his exceptional skills, Uday exhibited a level of understanding for all work that we did as an Intern. For whatever task or activity, he always offered his utmost effort. He provided his all, regardless of whether he was preoccupied with tests or college work. </p>
          <p>All the team members found him incredibly helpful, courteous, and cheerful. He always has a smile on his face.</p>
          <p>We were given several tasks to complete as a team. He is a breeze to collaborate with. I would be happy to work with you again if the opportunity arises in the future.</p>
          <p>I wish you Good Luck for your future. I have no doubt that you'll succeed :)"</p>

          {/* Removed legacy commented recommendation referencing another person */}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
