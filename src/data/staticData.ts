// staticData.ts - All portfolio data in one place for easy editing

import { ProfileBanner, WorkPermit, TimelineItem, Project, Certification, Skill } from '../types';

// PROFILE BANNER
export const profileBannerData: ProfileBanner = {
  backgroundImage: { url: '' },
  headline: 'Uday Kiran Yaddanapudi',
  resumeLink: { url: 'https://drive.google.com/file/d/YOUR_RESUME_ID/view' },
  linkedinLink: 'https://www.linkedin.com/in/udaykiranyaddanapudi/',
  profileSummary: 'Full Stack Developer & AI Data Scientist with expertise in React, Python, Machine Learning and Cloud Computing. Passionate about building scalable web applications and delivering data-driven solutions.',
};

// WORK PERMIT
export const workPermitData: WorkPermit = {
  visaStatus: 'Work Permit',
  summary: "I'm currently on a Study Break 📚, which allows me to work remotely! 💻 I'm actively seeking opportunities abroad 🌍 and am open to visa sponsorship 🛂, giving me the opportunity to build valuable experience and grow my career. 🌟",
  additionalInfo: 'For any additional queries please reach me out on yvssrr.udaykiran@gmail.com',
};

// TIMELINE (Work Experience & Education)
export const timelineData: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'Shift Logistics',
    title: 'Full Stack Developer (Internship)',
    techStack: 'Angular, TypeScript, Data Analysis, Git, GitHub, RESTful APIs',
    summaryPoints: [
      'Developed scalable Angular features, improving UI/UX with dynamic forms, validation, and profile management.',
      'Integrated user authentication via RESTful APIs to ensure seamless frontend-backend data flow and scalability.',
      'Authored test cases to validate product features and ensure reliable performance.',
    ],
    dateRange: 'August 2025 - Present',
  },
  {
    timelineType: 'education',
    name: 'Chalmers University of Technology',
    title: "Master's in Data Science and AI",
    techStack: '',
    summaryPoints: [
      'Design of AI Systems',
      'Applied Machine Learning',
      'Data Science and AI',
    ],
    dateRange: 'August 2023 - June 2025 (Study break)',
  },
  {
    timelineType: 'work',
    name: 'YoHRs',
    title: 'AI Data Scientist (Part-Time)',
    techStack: 'Python, Machine Learning, PostgreSQL, GitHub',
    summaryPoints: [
      'Developed a course recommendation system, boosting course enrollment by 20%',
      'Integrated three AI agents into the workflow, improving efficiency by 25%',
      'Created an ML model to analyze user behavior, improving recommendations and reducing manual effort by 30%',
    ],
    dateRange: 'November 2024 - May 2025',
  },
  {
    timelineType: 'work',
    name: 'OrbitX India Aerospace',
    title: 'Research and Development Intern',
    techStack: 'Python, Power BI, Data Analysis, SQL, Excel, GitHub',
    summaryPoints: [
      'Collected, stored, and analyzed data on reusable rockets, leading to a 15% increase in engine efficiency',
      'Identified and implemented performance improvements, resulting in a 5% reduction in rocket weight',
      'Converted traditional reports into Power BI solutions, boosting efficiency by 15%',
    ],
    dateRange: 'May 2022 - October 2022',
  },
  {
    timelineType: 'work',
    name: 'Medibliss Transactions Pvt Ltd',
    title: 'React Developer Intern',
    techStack: 'React, JavaScript, HTML/CSS, Git, REST APIs, Node.js',
    summaryPoints: [
      'Enhanced user experience by developing React-based interfaces, boosting website performance by 10%',
      'Coordinated with cross-functional teams throughout the development lifecycle, reducing development delays by 20%',
    ],
    dateRange: 'June 2022 - September 2022',
  },
  {
    timelineType: 'work',
    name: 'WorkFall',
    title: 'Cloud Computing Intern',
    techStack: 'AWS (EC2, S3), AngularJS, JavaScript, HTML/CSS, Git, REST APIs',
    summaryPoints: [
      'Optimized cloud scalability and performance by implementing AWS services, resulting in a 30% increase in system efficiency',
      'Launched a Food Ordering Website with Angular JS on AWS, enhancing performance by 16%',
      'Increased the functionality of the WorkFall website by 5% as a Front-End Developer',
    ],
    dateRange: 'June 2022 - July 2022',
  },
  {
    timelineType: 'education',
    name: 'GITAM University',
    title: 'B.Tech. in Computer Science and Engineering',
    techStack: '',
    summaryPoints: [
      'Database Management Systems',
      'Web Applications Development',
      'Machine Learning',
    ],
    dateRange: 'June 2019 - April 2023',
  },
];

// PROJECTS
export const projectsData: Project[] = [
  {
    title: 'Fraud Hunter',
    description: 'End-to-end fraud detection pipeline with feature engineering, anomaly detection and monitoring.',
    techUsed: 'Python, scikit-learn, pandas, Flask',
    image: { url: 'https://via.placeholder.com/400x225?text=Fraud+Hunter' },
  },
  {
    title: 'Fraud Detection',
    description: 'Supervised fraud detection system for transaction data using tree-based models and validation.',
    techUsed: 'Python, XGBoost, pandas, Docker',
    image: { url: 'https://via.placeholder.com/400x225?text=Fraud+Detection' },
  },
  {
    title: 'Fake News Mini',
    description: 'Lightweight NLP classifier to detect fake news using modern embeddings and preprocessing.',
    techUsed: 'Python, HuggingFace Transformers, NLP, scikit-learn',
    image: { url: 'https://via.placeholder.com/400x225?text=Fake+News+Mini' },
  },
  {
    title: 'Fraud Detection — Advanced Validation',
    description: 'Advanced validation strategies and robustness checks for fraud detection models.',
    techUsed: 'Python, cross-validation, model-robustness, ML Ops',
    image: { url: 'https://via.placeholder.com/400x225?text=Fraud+Detection+Advanced' },
  },
];

// CERTIFICATIONS
export const certificationsData: Certification[] = [
  {
    title: 'Machine Learning',
    issuer: 'Stanford University (Coursera)',
    issuedDate: '',
    link: 'https://www.coursera.org/account/accomplishments/certificate/2BTJ636Q2E93',
    iconName: 'coursera',
  },
  {
    title: 'Algorithms - Design and Analysis',
    issuer: 'Stanford University (Coursera)',
    issuedDate: '',
    link: 'https://www.coursera.org/account/accomplishments/certificate/6THRQXYE9EHZ',
    iconName: 'coursera',
  },
  {
    title: 'Algorithmic Toolbox',
    issuer: 'UC San Diego (Coursera)',
    issuedDate: '',
    link: 'https://coursera.org/share/98bbfb990484fac370d5e5ed14334ea4',
    iconName: 'coursera',
  },
  {
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI (Coursera)',
    issuedDate: '',
    link: 'https://www.coursera.org/account/accomplishments/certificate/ELXZ6FE2BU7X',
    iconName: 'coursera',
  },
];

// SKILLS
export const skillsData: Skill[] = [
  // Backend
  { name: 'Python', category: 'Backend', description: 'Data Science & ML applications', icon: 'FaPython' },
  
  // Frontend
  { name: 'React', category: 'Frontend', description: 'Building modern UIs', icon: 'FaReact' },
  { name: 'TypeScript', category: 'Frontend', description: 'Type-safe JavaScript', icon: 'SiTypescript' },
  { name: 'Angular', category: 'Frontend', description: 'Enterprise web applications', icon: 'FaAngular' },
  
  // Database
  { name: 'PostgreSQL', category: 'Database', description: 'Relational database management', icon: 'SiPostgresql' },
  { name: 'SQLite', category: 'Database', description: 'Lightweight embedded SQL database', icon: 'SiSqlite' },
  
  // DevOps & Cloud
  { name: 'AWS', category: 'DevOps & Cloud', description: 'EC2, S3, Cloud infrastructure', icon: 'FaAws' },
  { name: 'Docker', category: 'DevOps & Cloud', description: 'Containerization', icon: 'FaDocker' },
  { name: 'Git', category: 'DevOps & Cloud', description: 'Version control', icon: 'FaGithub' },

  // Data Science
  { name: 'Machine Learning', category: 'Data Science', description: 'Predictive modeling & AI', icon: 'SiTensorflow' },
  { name: 'Power BI', category: 'Tools', description: 'Data visualization', icon: 'SiPowerbi' },
  { name: 'Data Analysis', category: 'Data Science', description: 'Statistical analysis & exploratory data analysis (Pandas, NumPy, Matplotlib)', icon: 'SiNumpy' },
  { name: 'Scikit-learn', category: 'Data Science', description: 'Classical ML library', icon: 'SiScikitlearn' },
  { name: 'Generative AI', category: 'Data Science', description: 'Large-models & generation', icon: 'SiHuggingface' },
  { name: 'Prompt Engineering', category: 'Data Science', description: 'Designing prompts for LLMs', icon: 'SiOpenai' },
  { name: 'Collaborative Filtering', category: 'Data Science', description: 'Recommender systems techniques', icon: 'FaRobot' },
  // Data Engineering
  { name: 'Data Wrangling', category: 'Data Engineering', description: 'Cleaning & transforming data (ETL Process)', icon: 'SiPandas' },
  { name: 'API integration', category: 'Data Engineering', description: 'RESTful API integration', icon: 'FaNetworkWired' },
  { name: 'Kafka', category: 'Data Engineering', description: 'Distributed event streaming platform', icon: 'SiApachekafka' },
  // Additional frontend / languages / tools
  { name: 'JavaScript', category: 'Frontend', description: 'Language for web development', icon: 'SiJavascript' },
  { name: 'HTML5', category: 'Frontend', description: 'Markup language for the web', icon: 'FaHtml5' },
  { name: 'CSS3', category: 'Frontend', description: 'Styling for modern websites', icon: 'FaCss3Alt' },
  { name: 'Bootstrap', category: 'Frameworks & Automation', description: 'CSS framework for responsive UI', icon: 'SiBootstrap' },
  { name: 'AutoGPT', category: 'Frameworks & Automation', description: 'Autonomous agents framework', icon: 'FaRobot' },
  { name: 'GitHub', category: 'Tools', description: 'Repository hosting and collaboration', icon: 'FaGithub' },
  { name: 'Jira', category: 'Tools', description: 'Issue tracking & project management', icon: 'SiJira' },
  { name: 'Jupyter', category: 'Tools', description: 'Interactive notebooks', icon: 'SiJupyter' },
  { name: 'CLI', category: 'Tools', description: 'Command-line proficiency', icon: 'FaTerminal' },
];
