import React, { useState } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo } from 'react-icons/si';
import { projectsData } from '../data/staticData';
import { GrDeploy, GrKubernetes } from "react-icons/gr";
import type { Project } from '../types';
import fallbackProjectImage from '../images/grey.png';

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "React": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "Node.js": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  'Cognito': <FaAws />,
  'Lambda': <FaAws />,
  'ECS': <FaAws />,
  'Jenkins': <FaJenkins />,
  'Docker': <FaDocker />,
  'GraphQL': <FaDatabase />,
  'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />,
  'GitHub': <FaGithub />,
  'Heroku': <GrDeploy />,
  'Netlify': <GrDeploy />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'Azure': <FaMicrosoft />,
  'Kubernetes': <GrKubernetes />,
  'Terraform': <SiTerraform />,
  'ArgoCD': <SiArgo />,
  'Java': <FaJava />,
  'Spring Boot': <FaJava />,
  'Python': <FaPython />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiCss3 />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
  'Machine Learning': <FaPython />,
  'Data Analysis': <FaPython />,
  'TypeScript': <FaReact />,
  'JavaScript': <FaReact />,
  'Apache Kafka': <FaDatabase />
};

function getGitHubOpenGraphImageUrl(githubUrl: string): string | null {
  // Expected shapes:
  // - https://github.com/owner/repo
  // - https://github.com/owner/repo/
  // - https://github.com/owner/repo/issues/123
  // - git@github.com:owner/repo.git
  try {
    const trimmed = githubUrl.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith('git@github.com:')) {
      const rest = trimmed.replace('git@github.com:', '').replace(/\.git$/i, '');
      const [owner, repo] = rest.split('/');
      if (!owner || !repo) return null;
      return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
    }

    const url = new URL(trimmed);
    if (url.hostname !== 'github.com') return null;

    const parts = url.pathname.split('/').filter(Boolean);
    const owner = parts[0];
    const repo = parts[1]?.replace(/\.git$/i, '');
    if (!owner || !repo) return null;
    return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
  } catch {
    return null;
  }
}

function getProjectImageSrc(project: Project): string {
  const direct = project.image?.url?.trim();
  if (direct) return direct;
  const gh = project.githubLink?.trim();
  const ghImg = gh ? getGitHubOpenGraphImageUrl(gh) : null;
  return ghImg || fallbackProjectImage;
}

const Projects: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<'personal' | 'all' | 'professional'>('all');
  const filteredProjects = statusFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === statusFilter);

  console.log('Current filter:', statusFilter);
  console.log('Filtered projects:', filteredProjects.length);

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-heading">Projects & Work</h1>
        <p className="projects-subheading">
          Building innovative solutions with cutting-edge technologies...
        </p>
        <div className="projects-toggle">
          <div className={`toggle-slider-container ${statusFilter}`}>
            <button
              className={statusFilter === 'personal' ? 'active' : ''}
              onClick={() => setStatusFilter('personal')}
            >
              Personal
            </button>
            <button
              className={statusFilter === 'all' ? 'active' : ''}
              onClick={() => setStatusFilter('all')}
            >
              All
            </button>
            <button
              className={statusFilter === 'professional' ? 'active' : ''}
              onClick={() => setStatusFilter('professional')}
            >
              Professional
            </button>
            <div className="toggle-slider"></div>
          </div>
        </div>
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <div className="badge-container">
              {project.status === 'ongoing' && (
                <span className="status-badge" title="This project is currently in development">
                  Ongoing
                </span>
              )}
              {project.isTeamProject && (
                <span className="team-badge" title="Collaborative team project">
                  Team
                </span>
              )}
            </div>
            {(() => {
              const src = getProjectImageSrc(project as Project);
              const isGitHubOg = src.includes('opengraph.githubassets.com/');
              return (
                <img
                  src={src}
                  alt={project.title}
                  className={`project-image${isGitHubOg ? ' github-og' : ''}`}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const img = e.currentTarget;
                if (img.dataset.fallbackApplied === 'true') return;
                img.dataset.fallbackApplied = 'true';
                img.src = fallbackProjectImage;
              }}
                />
              );
            })()}
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
              <div className="project-links">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌐 Live Site
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
