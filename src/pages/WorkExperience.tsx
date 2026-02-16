import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import { MdOutlineBuild as SkillIcon } from 'react-icons/md';
import { IoBookOutline as CourseIcon } from 'react-icons/io5';
import './WorkExperience.css';
import { timelineData } from '../data/staticData';


const WorkExperience: React.FC = () => {
  const timeLineData = timelineData;

  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [modalOpen, setModalOpen] = useState<number | null>(null);
  const [expandAll, setExpandAll] = useState(false);
  
  const toggleExpand = (i: number) => setExpanded(prev => ({ ...prev, [i]: !prev[i] }));
  
  const toggleExpandAll = () => {
    const newExpandAll = !expandAll;
    setExpandAll(newExpandAll);
    const newExpanded: Record<number, boolean> = {};
    timeLineData.forEach((_, index) => {
      newExpanded[index] = newExpandAll;
    });
    setExpanded(newExpanded);
  };
  
  const openModal = (i: number) => {
    setModalOpen(i);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModalOpen(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
        <button className="expand-all-btn" onClick={toggleExpandAll}>
          {expandAll ? '▲ Collapse All' : '▼ Expand All'}
        </button>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            position={index % 2 === 0 ? 'right' : 'left'}
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
                // White for work entries, pink for education
                item.timelineType === "work"
                  ? { background: '#fff', color: '#222' }
                  : { background: 'rgb(255, 224, 230)', color: '#111' }
              }
              contentArrowStyle={
                item.timelineType === "work"
                  ? { borderRight: '7px solid #fff' }
                  : { borderRight: '7px solid rgb(255, 224, 230)' }
              }
              date={item.dateRange}
              iconStyle={
                item.timelineType === "work"
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(255, 160, 200)', color: '#fff' } // Softer red for education icon
              }
            icon={item.timelineType === "work" ? React.createElement(WorkIcon as any) : React.createElement(SchoolIcon as any)}
          >
            {item.timelineType === "work" ? (
              <div className={`timeline-card ${expanded[index] ? 'expanded' : ''}`}>
                <div className="timeline-header">
                  {item.logo && <img src={item.logo} alt={item.name} className="timeline-logo" />}
                  <div className="timeline-text">
                    <h3 className="vertical-timeline-element-title">{item.name}</h3>
                    <button
                      className="read-more"
                      aria-expanded={!!expanded[index]}
                      aria-label={expanded[index] ? `Collapse ${item.title}` : `Expand ${item.title}`}
                      onClick={() => toggleExpand(index)}
                    >
                      {expanded[index] ? '▲' : '▼'}
                    </button>
                    <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                  </div>
                </div>
                <p className="vertical-timeline-element-tech"><SkillIcon style={{ marginRight: '6px', verticalAlign: 'middle' }} /> {item.techStack}</p>
                {Array.isArray(item.summaryPoints) ? (
                  <>
                    {!expanded[index] && (
                      <p className="summary-preview">{String(item.summaryPoints[0] || '')}</p>
                    )}
                    <div className={`summary-list ${expanded[index] ? 'expanded' : 'collapsed'}`}>
                      <ul>
                        {item.summaryPoints.map((pt: any, i: number) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                      {expanded[index] && (
                        <button className="read-more-btn" onClick={() => openModal(index)}>
                          Read More
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <p>{String(item.summaryPoints)}</p>
                )}
              </div>
            ) : (
              <div className={`timeline-card timeline-education ${expanded[index] ? 'expanded' : ''}`}>
                <div className="timeline-header">
                  {item.logo && <img src={item.logo} alt={item.name} className="timeline-logo" />}
                  <div className="timeline-text">
                    <div className="timeline-title-row">
                      <h3 className="vertical-timeline-element-title">{item.name}</h3>
                      <button
                        className="read-more"
                        aria-expanded={!!expanded[index]}
                        aria-label={expanded[index] ? `Collapse ${item.name}` : `Expand ${item.name}`}
                        onClick={() => toggleExpand(index)}
                      >
                        {expanded[index] ? '▲' : '▼'}
                      </button>
                    </div>
                    <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                  </div>
                </div>
                <p className="vertical-timeline-element-tech"><CourseIcon style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Courses</p>
                  {Array.isArray(item.summaryPoints) ? (
                    <>
                    <div className={`summary-list ${expanded[index] ? 'expanded' : 'collapsed'}`}>
                      <ul>
                        {item.summaryPoints.map((pt: any, i: number) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                      {expanded[index] && (
                        <button className="read-more-btn" onClick={() => openModal(index)}>
                          Read More
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <p>{String(item.summaryPoints)}</p>
                )}
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={React.createElement(StarIcon as any)}
        />
        {/* Modal removed — using inline accordion per card instead */}
      </VerticalTimeline>
      
      <div className="timeline-footer">
        <button className="expand-all-btn" onClick={toggleExpandAll}>
          {expandAll ? '▲ Collapse All' : '▼ Expand All'}
        </button>
        <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ▲ Back to Top
        </button>
      </div>
      
      {modalOpen !== null && (
        <div className="experience-modal-overlay" onClick={closeModal}>
          <div className="experience-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <div className="modal-content">
              <div className="modal-header-section">
                {timeLineData[modalOpen].logo && (
                  <img src={timeLineData[modalOpen].logo} alt={timeLineData[modalOpen].name} className="modal-logo" />
                )}
                <div>
                  <h2 style={{ color: '#e50914' }}>{timeLineData[modalOpen].name} <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 400 }}>| {timeLineData[modalOpen].dateRange}</span></h2>
                  <h3>{timeLineData[modalOpen].title}</h3>
                </div>
              </div>
              {timeLineData[modalOpen].techStack && (
                <div className="modal-tech">
                  <strong>Tech Stack:</strong> {timeLineData[modalOpen].techStack}
                </div>
              )}
              <div className="modal-details">
                <h4>Key Responsibilities & Achievements:</h4>
                <ul>
                  {(timeLineData[modalOpen].modalDetails ?? timeLineData[modalOpen].summaryPoints).map((pt: any, i: number) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkExperience;
