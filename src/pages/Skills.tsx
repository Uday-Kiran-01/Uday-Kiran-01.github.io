import React from 'react';
import './Skills.css';
import { skillsData } from '../data/staticData';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaJava, FaPython, FaHtml5, FaCss3Alt, FaGithub, FaTerminal, FaRobot, FaAngular, FaNetworkWired, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMysql, SiGooglecloud, SiJavascript, SiBootstrap, SiSqlite, SiJupyter, SiJira, SiScikitlearn, SiPandas, SiApachekafka, SiTensorflow, SiHuggingface, SiOpenai, SiNumpy, SiPostman } from 'react-icons/si';
import { IconType } from 'react-icons';

const iconMap: { [key: string]: IconType } = {
  FaNodeJs: FaNodeJs,
  FaJava: FaJava,
  FaReact: FaReact,
  FaPython: FaPython,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaGithub: FaGithub,
  FaTerminal: FaTerminal,
  FaRobot: FaRobot,
  FaAngular: FaAngular,
  FaNetworkWired: FaNetworkWired,
  SiTypescript: SiTypescript,
  FaAws: FaAws,
  FaDocker: FaDocker,
  SiPostgresql: SiPostgresql,
  SiMysql: SiMysql,
  SiGooglecloud: SiGooglecloud,
  SiPandas: SiPandas,
  SiApachekafka: SiApachekafka,
  SiTensorflow: SiTensorflow,
  SiHuggingface: SiHuggingface,
  SiOpenai: SiOpenai,
  SiNumpy: SiNumpy,
  SiJavascript: SiJavascript,
  SiBootstrap: SiBootstrap,
  SiSqlite: SiSqlite,
  SiJupyter: SiJupyter,
  SiJira: SiJira,
  SiScikitlearn: SiScikitlearn,
  FaDatabase: FaDatabase,
  SiPostman: SiPostman,
};


const Skills: React.FC = () => {

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // sort skills within each category A->Z
  Object.keys(skillsByCategory).forEach((cat) => {
    skillsByCategory[cat].sort((s1: any, s2: any) => (s1.name || '').toString().localeCompare((s2.name || '').toString()));
  });

  const sortedCategories = Object.keys(skillsByCategory).sort((a: string, b: string) => a.localeCompare(b));


  return (
    <div className="skills-container">
      {sortedCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{React.createElement((iconMap[skill.icon] || FaReact) as any)}</div>
                <h3 className="skill-name">
                  {(() => {
                    const name: string = skill.name || '';
                    // For short single-word names keep per-letter animation, otherwise render normally
                    if (name.length <= 12 && !name.includes(' ')) {
                      return name.split('').map((letter: any, i: number) => (
                        <span key={i} className="letter" style={{ animationDelay: `${i * 0.03}s` }}>
                          {letter}
                        </span>
                      ));
                    }

                    return <span className="skill-name-text">{name}</span>;
                  })()}
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
