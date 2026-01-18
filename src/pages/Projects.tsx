import React, { useState } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaJava, FaPython } from 'react-icons/fa';
import { SiPostgresql, SiMongodb, SiTypescript, SiApachekafka } from 'react-icons/si';
import { IconType } from 'react-icons';
import { projectsData } from '../data/staticData';

const techIcons: { [key: string]: IconType } = {
  "ReactJS": FaReact,
  "React": FaReact,
  "NodeJS": FaNodeJs,
  "Node.js": FaNodeJs,
  "AWS": FaAws,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Docker": FaDocker,
  "Python": FaPython,
  "Machine Learning": FaPython,
  "Data Analysis": FaPython,
  "Java": FaJava,
  "TypeScript": SiTypescript,
  "JavaScript": FaReact,
  "Apache Kafka": SiApachekafka,
};

const Projects: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const projects = projectsData;

  return (
    <div className="projects-container">
      <div className="projects-header">
        <div className="view-toggle">
          <button 
            className={viewMode === 'grid' ? 'active' : ''}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </button>
          <button 
            className={viewMode === 'list' ? 'active' : ''}
            onClick={() => setViewMode('list')}
          >
            List
          </button>
        </div>
      </div>
      
      <div className={`projects-${viewMode}`}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${viewMode}`}
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" loading="lazy" decoding="async" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] ? React.createElement(techIcons[tech] as any) : "🔧"} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
