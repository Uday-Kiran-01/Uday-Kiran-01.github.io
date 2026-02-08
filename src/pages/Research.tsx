import React, { useState } from 'react';
import './Research.css';
import { researchPapersData, patentsData } from '../data/staticData';
import { FaExternalLinkAlt } from 'react-icons/fa';

const TABS = ["Research Papers", "Patent"] as const;
type Tab = typeof TABS[number];

const Research: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Research Papers');

  return (
    <div className="research-container">
      <div className="research-header">
        <h1 className="research-heading">Research & Innovation</h1>
        <p className="research-subheading">
          Published research papers and patent applications
        </p>
      </div>

      <div className="research-toggle">
        <div className={`toggle-slider-container ${activeTab === 'Research Papers' ? 'papers' : 'patent'}`}>
          <button
            className={activeTab === 'Research Papers' ? 'active' : ''}
            onClick={() => setActiveTab('Research Papers')}
          >
            Research Papers
          </button>
          <button
            className={activeTab === 'Patent' ? 'active' : ''}
            onClick={() => setActiveTab('Patent')}
          >
            Patents
          </button>
          <div className="toggle-slider"></div>
        </div>
      </div>

      {activeTab === 'Research Papers' && (
        <div className="research-grid">
          {researchPapersData.map((paper, index) => (
            <div
              key={index}
              className="research-card"
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="research-card-content">
                <h3>{paper.title}</h3>
                <div className="paper-details">
                  <p><strong>Authors:</strong> {paper.authors}</p>
                  <p><strong>Conference:</strong> {paper.conference}</p>
                </div>
                <a
                  href={paper.link}
                  className="research-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> View Paper
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Patent' && (
        <div className="research-grid">
          {patentsData.map((patent, index) => (
            <div
              key={index}
              className="research-card patent-card"
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="research-card-content">
                <h3>{patent.title}</h3>
                <div className="patent-details">
                  <p><strong>Application No:</strong> {patent.applicationNumber}</p>
                  <p><strong>Status:</strong> <span className="patent-status">{patent.status}</span></p>
                  <p><strong>Filing Date:</strong> {patent.filingDate}</p>
                  <p><strong>Inventors:</strong> {patent.inventors}</p>
                </div>
                <a
                  href={patent.link}
                  className="research-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> View Patent Details
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Research;
