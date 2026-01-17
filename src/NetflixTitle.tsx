import React, { useEffect, useState, useRef } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import ukfornetflix from './images/ukfornetflix.png';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audioRef.current = audio;
    audio.play().catch(error => console.error('Audio play error:', error));
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 3000);
      return () => {
        clearTimeout(timer);
        // Cleanup audio if component unmounts
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    }
  }, [isClicked, navigate]);

  return (
    <div className={`netflix-container ${isClicked ? 'playing' : ''}`} onClick={handlePlaySound}>
      <div className={`netflix-logo ${isClicked ? 'animate' : ''}`}>
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
