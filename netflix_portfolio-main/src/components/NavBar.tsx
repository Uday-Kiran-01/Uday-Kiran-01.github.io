import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Import icons
import './Navbar.css';
import navbarLogo from '../images/ukfornetflix.png';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import yellowImage from '../images/yellow.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileImage = location.state?.profileImage || blueImage;
  const currentProfileName = location.state?.profileName || '';

  // determine current profile from router state (if just selected) or persisted selection
  let currentProfile: { name: string; displayName: string; image: string } | null = null;
  try {
    const stored = localStorage.getItem('currentProfile');
    if (stored) currentProfile = JSON.parse(stored);
  } catch (e) {
    currentProfile = null;
  }

  // prefer immediate router state when landing on a profile page
  if (location.state?.profileImage && location.pathname.startsWith('/profile/')) {
    const parts = location.pathname.split('/');
    const pname = parts[2] || 'recruiter';
    currentProfile = { name: pname, displayName: pname.charAt(0).toUpperCase() + pname.slice(1), image: location.state.profileImage } as any;
    try { localStorage.setItem('currentProfile', JSON.stringify(currentProfile)); } catch (e) {}
  }

  // fallback default if nothing available
  if (!currentProfile) {
    currentProfile = { name: 'recruiter', displayName: 'Recruiter', image: blueImage };
  }
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileMenu = (e?: React.MouseEvent) => {
    e && e.stopPropagation();
    setIsProfileMenuOpen((s) => !s);
  };

  useEffect(() => {
    const handleDocClick = (e: MouseEvent) => {
      if (isProfileMenuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, [isProfileMenuOpen]);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={navbarLogo} alt="UK for Netflix" className="uk-netflix-logo small" loading="lazy" decoding="async" />
          </Link>
          <ul className="navbar-links">
            <li><Link to="/browse">Home</Link></li>
            <li><Link to="/work-experience">Professional</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact-me">Hire Me</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          {/* Hamburger menu for mobile */}
          <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="profile-wrapper" ref={menuRef}>
            <img src={profileImage} alt="Profile" className="profile-icon" loading="lazy" decoding="async" onClick={toggleProfileMenu} />

            {isProfileMenuOpen && (
              <div className="profile-menu" role="menu" aria-label="Profile menu">
                <ul>

                  <li className="menu-item profile-current">
                    <img src={currentProfile.image} alt={currentProfile.displayName} className="mini-avatar" />
                    <span className="menu-label">{currentProfile.displayName}</span>
                  </li>

                  <li className="menu-divider" />

                  <li className="menu-item" onClick={() => { setIsProfileMenuOpen(false); navigate('/browse'); }}>
                    Manage Profiles
                  </li>

                  <li className="menu-item" onClick={() => { setIsProfileMenuOpen(false); navigate('/work-experience'); }}>
                    Account
                  </li>

                  <li className="menu-item" onClick={() => { setIsProfileMenuOpen(false); navigate('/contact-me'); }}>
                    Help Center
                  </li>

                  <li className="menu-divider" />

                  <li className="menu-item sign-out" onClick={() => {
                    try { localStorage.clear(); sessionStorage.clear(); } catch (e) {}
                    setIsProfileMenuOpen(false);
                    navigate('/');
                  }}>
                    Sign out of Netflix
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

      {/* Sidebar (only visible on mobile) */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <img src={navbarLogo} alt="UK for Netflix" className="uk-netflix-logo small" loading="lazy" decoding="async" />
        </div>
        <ul>
          <li><Link to="/browse" onClick={closeSidebar}><FaHome /> Home</Link></li>
          <li><Link to="/work-experience" onClick={closeSidebar}><FaBriefcase /> Professional</Link></li>
          <li><Link to="/skills" onClick={closeSidebar}><FaTools /> Skills</Link></li>
          <li><Link to="/projects" onClick={closeSidebar}><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/contact-me" onClick={closeSidebar}><FaEnvelope /> Hire Me</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
