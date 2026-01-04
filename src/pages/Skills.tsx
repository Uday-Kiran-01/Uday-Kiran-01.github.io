import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';
import { skillsData as localSkillsData } from '../data/skillsData';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaJava, FaPython, FaChartBar, FaRobot, FaKeyboard, FaDatabase, FaLink, FaTerminal, FaCogs, FaUsers, FaMagic } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiJavascript, SiAngular, SiBootstrap, SiScikitlearn, SiGithub, SiGit, SiJira, SiJupyter, SiSqlite } from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  Python: <FaPython />,
  JavaScript: <SiJavascript />,
  'HTML5': <SiHtml5 />,
  'CSS3': <SiCss3 />,
  SQL: <FaAws />,
  PostgreSQL: <SiPostgresql />,
  SQLite: <SiSqlite />,
  React: <FaReact />,
  'Node.js': <FaNodeJs />,
  Angular: <SiAngular />,
  AngularJS: <SiAngular />,
  Bootstrap: <SiBootstrap />,
  'Scikit-learn': <SiScikitlearn />,
  'Machine Learning': <SiScikitlearn />,
  'AutoGPT': <FaRobot />,
  'Generative AI': <FaMagic />,
  'Prompt Engineering': <FaKeyboard />,
  'Data Wrangling': <FaDatabase />,
  'API integration': <FaLink />,
  'CLI': <FaTerminal />,
  'Automation': <FaCogs />,
  'Collaborative Filtering': <FaUsers />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  'PowerBI': <FaChartBar />,
  'AWS (EC2, S3)': <FaAws />,
  Jira: <SiJira />,
  Jupyter: <SiJupyter />,
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
};


const Skills: React.FC = () => {

  const [skillsData, setSkillsData] = useState<Skill[]>(() => {
    // Initialize with local data formatted for display
    return localSkillsData.map(skill => ({
      name: skill.name,
      category: skill.category,
      description: skill.description,
      icon: skill.name
    })) as Skill[];
  });

  useEffect(() => {
    async function fetchSkills() {
      try {
        const data = await getSkills();
        setSkillsData(data);
      } catch (error) {
        console.log('Using local skills data');
        // Already set in initial state
      }
    }

    fetchSkills();
  }, []);

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
