// staticData.ts - All portfolio data in one place for easy editing

import { ProfileBanner, WorkPermit, TimelineItem, Project, Certification, Skill, ResearchPaper, Patent } from '../types';

// PROFILE BANNER
export const profileBannerData: ProfileBanner = {
  backgroundImage: { url: '' },
  headline: 'Uday Kiran Yaddanapudi',
  resumeLink: { url: 'https://drive.google.com/file/d/YOUR_RESUME_ID/view' },
  linkedinLink: 'https://www.linkedin.com/in/udaykiranyaddanapudi/',
profileSummary: 'Data professional with experience in analytics, machine learning, and building scalable data solutions. Proven ability to develop models, optimize data pipelines, and deliver actionable insights that improve system performance and support business decision-making.',
  googleScholarLink: 'https://scholar.google.com/citations?user=O1TUuP8AAAAJ',
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
    logo: '/shift logo.png',
    summaryPoints: [
      'Developed scalable Angular features, improving UI/UX with dynamic forms, validation, and profile management.',
      'Integrated user authentication via RESTful APIs to ensure seamless frontend-backend data flow and scalability.',
      'Authored test cases to validate product features and ensure reliable performance.',
    ],
    dateRange: 'August 2025 - February 2026',
  },
  {
    timelineType: 'education',
    name: 'Chalmers University of Technology',
    title: "Master's in Data Science and AI",
    techStack: '',
    logo: '/chalmers.jpg',
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
    logo: '/yohrs.jpg',
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
    logo: '/orbitx.jpg',
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
    logo: '/medibliss.jpg',
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
    techStack: 'Angular, TypeScript, HTML/CSS, Git, AWS cloud infrastructure (EC2, EBS, S3, CloudWatch), basic REST APIs concepts.',
    logo: '/workfall.png',
    summaryPoints: [
      "WorkFall is a cloud-focused company where I completed a structured internship combining Angular development and AWS cloud fundamentals through a guided team project.",
      "Completed training on Angular and AWS as part of a 2‑month cloud internship program.",
      "Implemented front‑end features such as menu listing and order summary screens for a demo food‑ordering web app using Angular and Git.",
      "Deployed the Angular build to a micro EC2 instance in the Mumbai region with a default EBS root volume, making the app accessible via public IP.",
      "Created S3 buckets to store static assets and sample order-related files and practiced organizing data within the Free Tier limits.",
      "Used CloudWatch to observe CPU and network metrics for the EC2 instance while testing the app and discussed basic cost and scaling trade‑offs.",
      "Project — Food Ordering Web App (Internal Demo): Built a simple food‑ordering web application as an internal demo project to practice end-to-end flow: front‑end development in Angular, deployment to AWS EC2, and using S3 and CloudWatch for storage and monitoring.",
      "Role — Front‑end contributor and cloud deployment trainee: worked on UI pages, participated in discussions about architecture, and helped deploy and test the app on AWS.",
      "Achievements: Successfully deployed a working Angular demo app on AWS within the Free Tier; gained hands‑on exposure to launching EC2 instances, attaching EBS storage, using S3 for file storage, and reading CloudWatch metrics; improved confidence in working with Git and collaborating in a 5‑member team.",
      "Challenges: Understanding how to structure an Angular project for deployment — solved by following senior guidance, experimenting with builds, and documenting steps; Mapping console concepts (instances, volumes, buckets, metrics) to real-world app behavior — solved by testing, checking CloudWatch graphs, and asking targeted questions.",
      "Collaboration / soft skills: Worked in a team of 5 interns with senior developer mentorship, doing regular check-ins, code reviews, and discussions; improved communication by explaining UI changes and cloud setups to teammates and asking for feedback.",
      "Learning outcomes: Stronger understanding of how a web app moves from local development to deployment on AWS; clear mental model of EC2, EBS, S3, CloudWatch, and basic REST-style interaction between front end and backend; first real experience working in a semi‑structured engineering team setup."
    ],
    dateRange: 'June 2022 – August 2022',
  },
  {
    timelineType: 'education',
    name: 'GITAM University',
    title: 'B.Tech. in Computer Science and Engineering',
    techStack: '',
    logo: '/gitam.jpg',
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
    title: 'PostureCapture',
    description: 'AI-powered posture detection and correction system.',
    techUsed: 'Python, Machine Learning, Computer Vision',
    image: { url: '' },
    status: 'ongoing',
    category: 'personal',
    githubLink: 'https://github.com/bhoomi333/PostureCapture',
    isTeamProject: true,
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects, skills, and experience.',
    techUsed: 'React, TypeScript, CSS',
    image: { url: '' },
    status: 'completed',
    category: 'personal',
    githubLink: 'https://github.com/Uday-Kiran-01/uday-kiran-01.github.io',
    liveLink: 'https://uday-kiran-01.github.io',
  },
  {
    title: 'Photos Organisation Tool',
    description: 'Automated photo sorting tool that organizes photos by year, month, date in ascending order using Windows batch file.',
    techUsed: 'Python, File Management, Batch Scripting',
    image: { url: '' },
    status: 'completed',
    category: 'personal',
    githubLink: 'https://github.com/Uday-Kiran-01/Photos-Organisation-Tool',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather application with location-based forecasts.',
    techUsed: 'React, JavaScript, Weather API',
    image: { url: '' },
    status: 'completed',
    category: 'professional',
    githubLink: 'https://github.com/Uday-Kiran-01/weather-app',
  },
  {
    title: 'Fraud Hunter',
    description: 'End-to-end fraud detection pipeline with feature engineering, anomaly detection and monitoring.',
    techUsed: 'Python, scikit-learn, pandas, Flask',
    image: { url: '' },
    status: 'completed',
    category: 'professional',
    githubLink: 'https://github.com/Uday-Kiran-01/Fraud-Hunter',
  },
  {
    title: 'Fraud Detection',
    description: 'Supervised fraud detection system for transaction data using tree-based models and validation.',
    techUsed: 'Python, XGBoost, pandas, Docker',
    image: { url: '' },
    status: 'completed',
    category: 'professional',
    githubLink: 'https://github.com/Uday-Kiran-01/Fraud-Detection',
  },
  {
    title: 'Fraud Detection — Advanced Validation',
    description: 'Advanced validation strategies and robustness checks for fraud detection models.',
    techUsed: 'Python, cross-validation, model-robustness, ML Ops',
    image: { url: '' },
    status: 'completed',
    category: 'professional',
    githubLink: 'https://github.com/Uday-Kiran-01/Fraud-Detection---Advanced-Validation',
  },
  {
    title: 'Fake News Mini',
    description: 'Lightweight NLP classifier to detect fake news using modern embeddings and preprocessing.',
    techUsed: 'Python, HuggingFace Transformers, NLP, scikit-learn',
    image: { url: '' },
    status: 'completed',
    category: 'professional',
    githubLink: 'https://github.com/Uday-Kiran-01/Fake-News-Mini',
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
  { name: 'MySQL', category: 'Database', description: 'Relational database system', icon: 'SiMysql' },
  { name: 'SQLite', category: 'Database', description: 'Lightweight embedded SQL database', icon: 'SiSqlite' },
  
  // DevOps & Cloud
  { name: 'AWS', category: 'DevOps & Cloud', description: 'Cloud infrastructure (EC2, S3, CloudWatch)', icon: 'FaAws' },
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
  { name: 'Apache Kafka', category: 'Data Engineering', description: 'Distributed event streaming platform', icon: 'SiApachekafka' },
  // Additional frontend / languages / tools
  { name: 'JavaScript', category: 'Frontend', description: 'Language for web development', icon: 'SiJavascript' },
  { name: 'HTML5', category: 'Frontend', description: 'Markup language for the web', icon: 'FaHtml5' },
  { name: 'CSS3', category: 'Frontend', description: 'Styling for modern websites', icon: 'FaCss3Alt' },
  { name: 'Bootstrap', category: 'Frameworks & Automation', description: 'CSS framework for responsive UI', icon: 'SiBootstrap' },
  { name: 'AutoGPT', category: 'Frameworks & Automation', description: 'Autonomous agents framework', icon: 'FaRobot' },
  { name: 'GitHub', category: 'Tools', description: 'Repository hosting and collaboration', icon: 'FaGithub' },
  { name: 'DBeaver', category: 'Tools', description: 'Database management tool', icon: 'FaDatabase' },
  { name: 'Postman', category: 'Tools', description: 'API testing and development', icon: 'SiPostman' },
  { name: 'Jira', category: 'Tools', description: 'Issue tracking & project management', icon: 'SiJira' },
  { name: 'Jupyter', category: 'Tools', description: 'Interactive notebooks', icon: 'SiJupyter' },
  { name: 'CLI', category: 'Tools', description: 'Command-line proficiency', icon: 'FaTerminal' },
];

// RESEARCH PAPERS
export const researchPapersData: ResearchPaper[] = [
  {
    title: 'Comparative Analysis of Machine Learning Algorithms for Crop Yield Prediction',
    authors: 'Uday Kiran Yaddanapudi, et al.',
    conference: '2022 IEEE International Conference on Data Science and Information System (ICDSIS)',
    year: '2022',
    link: 'https://ieeexplore.ieee.org/abstract/document/9988646',
  },
  {
    title: 'Machine Learning Based Crop Yield Prediction',
    authors: 'Uday Kiran Yaddanapudi, et al.',
    conference: '2022 IEEE International Conference on Data Science and Information System (ICDSIS)',
    year: '2022',
    link: 'https://ieeexplore.ieee.org/document/9988094',
  },
];

// PATENTS
export const patentsData: Patent[] = [
  {
    title: 'Patent Application',
    applicationNumber: '202341015160',
    status: 'Published',
    filingDate: '2023',
    inventors: 'Uday Kiran Yaddanapudi, et al.',
    link: 'https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus',
  },
];
