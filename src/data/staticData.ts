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
    techStack: 'React, JavaScript, React Router, Bootstrap, HTML, CSS, Git, REST APIs, Postman, Browser DevTools',
    logo: '/medibliss.jpg',
    summaryPoints: [
      'Enhanced user experience by developing React-based interfaces, boosting website performance by 10%',
      'Coordinated with cross-functional teams throughout the development lifecycle, reducing development delays by 20%',
    ],
    modalDetails: [
      'Header',
      'Job Title: React Developer Intern',
      'Company: Medibliss Transactions Pvt Ltd – Hyderabad, India',
      'Dates: June 2022 – September 2022',
      'Company (1–2 lines): Medibliss Transactions Pvt Ltd is a small software services company that builds web applications for clients in domains such as travel and services. I joined as a React intern to learn modern frontend development and support a client project.',
      'Full Tech Stack: React.js, JavaScript, React Router, Bootstrap, HTML, CSS, Git, REST APIs, Postman, Browser DevTools',
      'Key Responsibilities: Learned React fundamentals and built a small local practice project to understand component-based UI, routing, and modular design.; Assisted a small team (3–4 members) working on a client-facing tour and travel booking web application.; Built and updated 2–3 React components used in menu selection and booking-related pages, handling basic state and props for user interactions.; Ran the app locally, tested flows end‑to‑end, and helped verify that frontend pages were correctly calling backend APIs.',
      'Achievements / Scope: Implemented or modified 2–3 React components used in the package/booking flow.; Participated in 4–5 code review sessions with senior developers and applied their feedback.; Made around 20 Git commits while working on shared branches and resolving minor merge conflicts.; Tested 5–10 API endpoints using Postman and the browser Network tab to verify responses and status codes.',
      'Main Project: Tour & Travel Booking Web Application — Web app for browsing tour packages and initiating bookings. Role: contribute small UI components, help wire flows between pages, and support testing of API integrations.',
      'Your Role in the Project: Observed how seniors structured components, routes, and folder organization; took small tasks from seniors; used Git to pull, merge, and push changes after review.',
      'Challenges and How You Solved Them: Handling props/state correctly — reviewed senior examples, asked for feedback, refactored components; Understanding API errors — used Network tab and Postman to inspect payloads and discussed with seniors before changing.',
      'Collaboration: Worked closely with 3–4 senior developers, attended team discussions, and participated in informal code walkthroughs.',
      'Soft Skills Demonstrated: Asked questions and accepted feedback; attention to detail while testing; time management balancing college and internship tasks.',
      'Learning Outcomes: Gained practical experience building React components, understood frontend–backend integration, and became comfortable using Git in a team setting.'
    ],
    dateRange: 'June 2022 - September 2022',
  },
  {
    timelineType: 'work',
    name: 'WorkFall',
    title: 'Cloud Computing Intern',
    techStack: 'AWS (EC2, S3, CloudWatch), AngularJS, JavaScript, HTML/CSS, Git, REST APIs',
    logo: '/workfall.png',
    summaryPoints: [
      'Optimized cloud scalability and performance by implementing AWS services, resulting in a 30% increase in system efficiency',
      'Launched a Food Ordering Website with Angular JS on AWS, enhancing performance by 16%',
      'Increased the functionality of the WorkFall website by 5% as a Front-End Developer',
    ],
    modalDetails: [
      'Header',
      'Job Title: Cloud Computing Intern',
      'Company: WorkFall · Remote, India',
      'Dates: June 2022 – August 2022',
      'Company (1–2 lines)',
      'WorkFall is a cloud-focused company where I completed a structured internship combining Angular development and AWS cloud fundamentals through a guided team project.',
      'Tech Stack',
      'Angular, TypeScript, HTML/CSS, Git, AWS cloud infrastructure (EC2, EBS, S3, CloudWatch), basic REST APIs concepts.',
      'Detailed Responsibilities',
      'Completed training on Angular and AWS as part of a 2‑month cloud internship program.',
      'Implemented front‑end features such as menu listing and order summary screens for a demo food‑ordering web app using Angular and Git.',
      'Deployed the Angular build to a micro EC2 instance in the Mumbai region with a default EBS root volume, making the app accessible via public IP.',
      'Created S3 buckets to store static assets and sample order-related files and practiced organizing data within the Free Tier limits.',
      'Used CloudWatch to observe CPU and network metrics for the EC2 instance while testing the app and discussed basic cost and scaling trade‑offs.',
      'Project section',
      'Project name: Food Ordering Web App (Internal Demo)',
      'Description (2–3 lines): Built a simple food‑ordering web application as an internal demo project to practice full flow: front‑end development in Angular, deployment to AWS EC2, and using S3 and CloudWatch for storage and monitoring. The goal was learning web + cloud fundamentals rather than shipping a production system.',
      'Your role: Front‑end contributor and cloud deployment trainee: worked on UI pages, participated in discussions about architecture, and helped deploy and test the app on AWS.',
      'Achievements: Successfully deployed a working Angular demo app on AWS within the Free Tier.',
      'Gained hands‑on exposure to launching EC2 instances, attaching EBS storage, using S3 for file storage, and reading CloudWatch metrics.',
      'Improved confidence in working with Git and collaborating in a 5‑member team with guidance from senior developers.',
      'Challenges and how you solved them: Understanding how to structure an Angular project for deployment; solved by following senior guidance, experimenting with builds, and documenting steps. Mapping console concepts (instances, volumes, buckets, metrics) to real-world behavior of the app; solved by testing, checking CloudWatch graphs, and asking targeted questions.',
      'Collaboration / soft skills: Worked in a team of 5 interns with senior developer mentorship, doing regular check-ins, code reviews, and discussions. Improved communication by explaining UI changes and cloud setups to teammates and asking for feedback.',
      'Learning outcomes: Stronger understanding of how a web app moves from local development to deployment on AWS. Clear mental model of EC2, EBS, S3, CloudWatch, and basic REST-style interaction between front end and backend. First real experience working in a semi‑structured engineering team setup.'
    ],
    dateRange: 'June 2022 - July 2022',
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
