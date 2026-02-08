// types.ts

export interface ProfileBanner {
  backgroundImage: { url: string };
  headline: string;
  resumeLink: {
    url: string;
  };
  linkedinLink: string;
  profileSummary: string;
  googleScholarLink?: string;
}

export interface WorkPermit {
  visaStatus: string;
  expiryDate?: Date;
  summary: string;
  additionalInfo: string;
}

export interface TimelineItem {
  timelineType: 'work' | 'education';
  name: string;
  title: string;
  techStack: string;
  logo?: string;
  summaryPoints: string[];
  dateRange: string;
}

export interface Project {
  title: string;
  description: string;
  techUsed: string;
  image: { url: string };
  status: 'completed' | 'ongoing';
  category: 'personal' | 'professional';
  githubLink?: string;
  liveLink?: string;
  isTeamProject?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  link: string;
  iconName: string;
}

export interface ContactMe {
  profilePicture: { url: string };
  name: string;
  title: string;
  summary: string;
  companyUniversity: string;
  linkedinLink: string;
  email: string;
  phoneNumber: string;
  resumeLink?: string;
  githubLink?: string;
  googleScholarLink?: string;
}

export interface Skill { 
  name: string;
  category: string;
  description: string;
  icon: string;
}

export interface ResearchPaper {
  title: string;
  authors: string;
  conference: string;
  year: string;
  link: string;
  description?: string;
}

export interface Patent {
  title: string;
  applicationNumber: string;
  status: string;
  filingDate: string;
  inventors: string;
  link: string;
}
