import React from 'react';
import './ContactMe.css';
import { FaPaperPlane, FaFileDownload, FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';

// fallback placeholder (external reliable image)
const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/520x420?text=Uday+Kiran';

// use a neutral placeholder for profile image (avoid bundling personal images)
const BUNDLED_PROFILE = PLACEHOLDER_IMAGE;

const userData: IContactMe = {
  profilePicture: { url: BUNDLED_PROFILE },
  name: 'Uday Kiran Yaddanapudi',
  title: 'Data Scientist',
  summary: 'Data scientist focused on scalable ML systems, feature engineering, and production analytics.',
  companyUniversity: 'Open to opportunities',
  linkedinLink: 'https://www.linkedin.com/in/udaykiranyaddanapudi/',
  email: 'yvssrr.udaykiran@gmail.com',
  phoneNumber: '+44 7XXX XXXXXX',
  resumeLink: '/resume.pdf',
  githubLink: 'https://github.com/your-username',
  googleScholarLink: 'https://scholar.google.com/citations?user=YOUR_ID',
};

const ContactMe: React.FC = () => {
  // debug: log chosen profile src so we can inspect it in the browser console
  // eslint-disable-next-line no-console
  console.log('Profile image chosen (bundled):', BUNDLED_PROFILE);

  // validate chosen URL: detect malformed data URL with no base64 payload
  const candidate = BUNDLED_PROFILE || userData.profilePicture?.url;
  const isMalformedDataUrl = typeof candidate === 'string' && candidate.startsWith('data:image') && candidate.indexOf(',') === candidate.length - 1;

  const effectiveSrc = !candidate || isMalformedDataUrl ? PLACEHOLDER_IMAGE : candidate;

  return (
    <div className="contact-container">
      <div className="image-card">
        <img src={effectiveSrc} alt={userData.name} className="card-img" loading="lazy" decoding="async" />

        <div className="card-overlay">
          <div className="profile-info-overlay">
            <h2 className="profile-name-large">
              {userData.name} <img src="/twitter verified.png" alt="verified" className="verified-badge" />
            </h2>
            <p className="profile-description-large">{userData.summary}</p>
          </div>
          
          <div className="profile-stats-overlay">
            <a href={`mailto:${userData.email}`} className="icon-btn-overlay email" title="Email">
              <FaPaperPlane />
            </a>
            <a href={userData.linkedinLink} target="_blank" rel="noopener noreferrer" className="icon-btn-overlay linkedin" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={userData.githubLink} target="_blank" rel="noopener noreferrer" className="icon-btn-overlay github" title="GitHub">
              <FaGithub />
            </a>
            <a href={userData.googleScholarLink} target="_blank" rel="noopener noreferrer" className="icon-btn-overlay scholar" title="Google Scholar">
              <FaGoogle />
            </a>
            <a href={userData.resumeLink} target="_blank" rel="noopener noreferrer" className="icon-btn-overlay resume" title="Resume">
              <FaFileDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
