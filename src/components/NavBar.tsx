import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Import icons
import './Navbar.css';
import ukfornetflix from '../images/ukfornetflix.png';
import blueImage from '../images/blue.png';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileImage = location.state?.profileImage || blueImage;
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

  // close profile menu when clicking outside
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
            <img 
              src={ukfornetflix} 
              alt="UK for Netflix" 
              className="uk-netflix-logo small"
              loading="lazy" 
              decoding="async"
            />
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
            {profileImage ? (
              // clicking toggles menu instead of immediate navigation
              // keeps existing behavior when menu is closed
              <img src={profileImage} alt="Profile" className="profile-icon" onClick={toggleProfileMenu} />
            ) : (
              <svg className="profile-icon" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" onClick={toggleProfileMenu}>
                <circle cx="20" cy="20" r="20" fill="#7da3ff" />
                <text x="50%" y="54%" textAnchor="middle" fontSize="14" fill="#fff" fontFamily="Arial" dominantBaseline="middle">U</text>
              </svg>
            )}

            {isProfileMenuOpen && (
              <div className="profile-menu" role="menu" aria-label="Profile menu">
                <ul>
                  <li className="menu-item">ami</li>
                  <li className="menu-item">Kids</li>
                  <li className="menu-divider" />
                  <li className="menu-item">Manage Profiles</li>
                  <li className="menu-item">Transfer Profile</li>
                  <li className="menu-item">Account</li>
                  <li className="menu-item">Help Center</li>
                  <li className="menu-divider" />
                  <li className="menu-item sign-out" onClick={() => {
                    // placeholder sign out: clear local session and navigate home
                    try { localStorage.clear(); sessionStorage.clear(); } catch (e) {}
                    setIsProfileMenuOpen(false);
                    navigate('/');
                  }}>Sign out of Netflix</li>
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
          <svg width="120" height="36" viewBox="0 0 120 36" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Uday Kiran">
            <rect width="100%" height="100%" fill="#E50914" rx="4" />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="14">Uday</text>
          </svg>
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
