import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkPermit.css';
import { workPermitData } from '../data/staticData';

const WorkPermit: React.FC = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="work-permit-overlay" onClick={handleClose}>
      <div className="work-permit-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title">🌍 Work Authorization</h1>
          </div>

          <div className="modal-body">
            <div className="info-section">
              <p className="info-text">{workPermitData.summary}</p>
            </div>

            <div className="contact-section">
              <a href="mailto:yvssrr.udaykiran@gmail.com" className="contact-email">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPermit;
