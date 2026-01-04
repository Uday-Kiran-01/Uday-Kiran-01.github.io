import React from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="content" style={{ flex: '1 0 auto' }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
