import React from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaJava, FaPython } from 'react-icons/fa';
import { SiPostgresql, SiMongodb, SiTypescript, SiApachekafka } from 'react-icons/si';
import { projectsData } from '../data/staticData';

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "React": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "Node.js": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Docker": <FaDocker />,
  "Python": <FaPython />,
  "Machine Learning": <FaPython />,
  "Data Analysis": <FaPython />,
  "Java": <FaJava />,
  "TypeScript": <SiTypescript />,
  "JavaScript": <FaReact />,
  "Kafka": <SiApachekafka />,
};


const Projects: React.FC = () => {
  const projects = projectsData;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" loading="lazy" decoding="async" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
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
