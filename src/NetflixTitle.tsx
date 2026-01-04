import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetflixTitle.css';
import ukfornetflix from './images/ukfornetflix.png';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    try {
      // play if the file exists at runtime (production can provide public/netflix-sound.mp3)
      const audio = new Audio('/netflix-sound.mp3');
      audio.play().catch(() => {
        /* ignore playback errors */
      });
    } catch (err) {
      // ignore if audio isn't available
    }
    setIsClicked(true); // Starts animation after clicking
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <div className={`netflix-logo ${isClicked ? 'animate' : ''}`}>
        {/* Custom Netflix-style logo with "UDAY KIRAN" */}
        <img 
          src={ukfornetflix} 
          alt="UK for Netflix Logo" 
          className="netflix-logo-img"
        />
      </div>
    </div>
  );
};

export default NetflixTitle;
