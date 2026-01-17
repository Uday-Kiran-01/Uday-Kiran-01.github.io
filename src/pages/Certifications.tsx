import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { IconType } from 'react-icons';
import { certificationsData } from '../data/staticData';

const iconData: { [key: string]: IconType } = {
  'udemy': SiUdemy,
  'coursera': SiCoursera,
  'ieee': SiIeee,
  'university': FaUniversity
}

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <div className="certifications-empty">
        <h2>Certifications</h2>
        <p>Coming Soon</p>
      </div>
    </div>
  );
};

export default Certifications;
