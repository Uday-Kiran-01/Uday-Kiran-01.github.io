import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { timelineData } from '../data/staticData';


const WorkExperience: React.FC = () => {
  const timeLineData = timelineData;

  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const toggleExpand = (i: number) => setExpanded(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
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
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div className={`timeline-card ${expanded[index] ? 'expanded' : ''}`}>
                {/** show primary heading and only show secondary when different */}
                <h3 className="vertical-timeline-element-title">{item.title || item.name}</h3>
                {(item.name && item.name !== (item.title || '')) && (
                  <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                )}
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
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
                    </div>
                    <button
                      className="read-more"
                      aria-expanded={!!expanded[index]}
                      aria-label={expanded[index] ? `Collapse ${item.title}` : `Expand ${item.title}`}
                      onClick={() => toggleExpand(index)}
                    >
                      {expanded[index] ? '▲' : '▼'}
                    </button>
                  </>
                ) : (
                  <p>{String(item.summaryPoints)}</p>
                )}
              </div>
            ) : (
              <div className={`timeline-card timeline-education ${expanded[index] ? 'expanded' : ''}`}>
                <h3 className="vertical-timeline-element-title">{item.name || item.title}</h3>
                {(item.title && item.title !== (item.name || '')) && (
                  <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                )}
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
                    </div>
                    <button
                      className="read-more"
                      aria-expanded={!!expanded[index]}
                      aria-label={expanded[index] ? `Collapse ${item.name}` : `Expand ${item.name}`}
                      onClick={() => toggleExpand(index)}
                    >
                      {expanded[index] ? '▲' : '▼'}
                    </button>
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
          icon={<StarIcon />}
        />
        {/* Modal removed — using inline accordion per card instead */}
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
