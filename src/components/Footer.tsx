import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  useEffect(() => {
    // Load the Website Carbon badge script only once
    const existingScript = document.querySelector('script[src*="website-carbon-badges"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js';
      script.defer = true;
      script.onload = () => {
        console.log('Website Carbon badge script loaded successfully');
      };
      script.onerror = () => {
        console.error('Failed to load Website Carbon badge script');
      };
      document.body.appendChild(script);
    }
  }, []);

  // fallback state: if the carbon badge does not render, show a simple fallback link
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const checkBadge = () => {
      const wcb = document.getElementById('wcb');
      if (wcb) {
        // if the badge script didn't create children, show fallback after short delay
        setTimeout(() => {
          const hasChildren = wcb.children && wcb.children.length > 0;
          setShowFallback(!hasChildren);
        }, 900);
      } else {
        setShowFallback(true);
      }
    };

    checkBadge();
    // also check again when the window gains focus (user might have blocked network earlier)
    window.addEventListener('focus', checkBadge);
    return () => window.removeEventListener('focus', checkBadge);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-left footer-section">
          <p className="footer-text">© 2026 Uday Kiran Yaddanapudi</p>
        </div>

        <div className="footer-right footer-section carbon-section">
          <div id="wcb" className="carbonbadge wcb-d" aria-hidden={showFallback}></div>
          {showFallback && (
            <div className="carbon-fallback">
              <a href="https://www.websitecarbon.com/" target="_blank" rel="noreferrer">Website Carbon</a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
