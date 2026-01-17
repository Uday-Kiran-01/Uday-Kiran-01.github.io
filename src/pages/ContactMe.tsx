import React from 'react';
import './ContactMe.css';
import { FaPaperPlane, FaFileDownload, FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';
import profileImg from '../images/my_image.jpg';

// fallback placeholder (external reliable image)
const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/520x420?text=Uday+Kiran';

// use the exact image the user provided (bundled)
const BUNDLED_PROFILE = profileImg;

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
          <div className="overlay-left glass">
            <h2 className="card-name">{userData.name}</h2>
            <div className="card-role">{userData.title}</div>
          </div>

          <div className="overlay-actions minimal">
            <a className="icon-btn email" href={`mailto:${userData.email}?subject=Hiring%20inquiry`} title="Email" aria-label="Email">
              {React.createElement(FaPaperPlane as any)}
            </a>

            <a className="icon-btn linkedin" href={userData.linkedinLink} target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
              {React.createElement(FaLinkedin as any)}
            </a>

            <a className="icon-btn github" href={userData.githubLink} target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
              {React.createElement(FaGithub as any)}
            </a>

            <a className="icon-btn scholar" href={userData.googleScholarLink} target="_blank" rel="noopener noreferrer" title="Google Scholar" aria-label="Google Scholar">
              {React.createElement(FaGoogle as any)}
            </a>

            <a className="icon-btn resume" href={userData.resumeLink} target="_blank" rel="noopener noreferrer" title="Resume" aria-label="Resume">
              {React.createElement(FaFileDownload as any)}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
