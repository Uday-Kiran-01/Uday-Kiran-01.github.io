import React, { useState } from 'react';
import './ProfileShowcaseCard.css';
import blueIcon from '../images/blue.png'; // Corrected the import path for the blue icon image
import { FaPaperPlane, FaLinkedin, FaGithub, FaGoogle, FaFileDownload, FaCheck } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface ProfileShowcaseCardProps {
    name: string;
    role: string;
    image: string;
    socials?: { icon: React.ReactNode; url: string }[];
    followUrl?: string;
}

const ProfileShowcaseCard: React.FC<ProfileShowcaseCardProps> = ({
    name,
    role,
    image,
    followUrl,
}) => {
    const [showSocials, setShowSocials] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    // Use IconType and props so we can render safely under strict TSX checks
    const socials: { icon: IconType; iconProps?: React.SVGProps<SVGElement>; url: string }[] = [
        { icon: FaPaperPlane, iconProps: { className: 'social-icon', style: { color: '#1DA1F2' } }, url: 'mailto:yvssrr.udaykiran@gmail.com' },
        { icon: FaLinkedin, iconProps: { className: 'social-icon', style: { color: '#0077B5' } }, url: 'https://www.linkedin.com/in/udaykiranyaddanapudi/' },
        { icon: FaGithub, iconProps: { className: 'social-icon', style: { color: '#333' } }, url: 'https://github.com/Uday-Kiran-01' },
        { icon: FaGoogle, iconProps: { className: 'social-icon', style: { color: '#DB4437' } }, url: 'https://scholar.google.com/citations?user=O1TUuP8AAAAJ' },
        { icon: FaFileDownload, iconProps: { className: 'social-icon', style: { color: '#E50914', background: 'linear-gradient(135deg, #E50914, #B81D24)', borderRadius: '50%', padding: '4px' } }, url: '/resume.pdf' },
    ];

    const handleFollowButtonClick = () => {
        setShowSocials((prev) => !prev);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (!showSocials) {
            const id = setTimeout(() => {
                setShowSocials(false);
            }, 10000); // 10 seconds
            setTimeoutId(id);
        }
    };

    return (
        <div 
            className="showcase-card-container" 
            style={{ 
                position: 'relative', 
                display: 'flex',
                flexDirection: 'column', /* Align elements vertically */
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '70vh',
                marginTop: '40px',
                paddingTop: '64px',
                perspective: '1500px'
            }}
        >
            <div 
                style={{ position: 'relative', display: 'inline-block', textAlign: 'center' }}
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
            >
                <img
                    src={blueIcon} // Replace user's photo with the blue icon
                    alt={name}
                    className="showcase-card-image xxlarge"
                    style={{
                        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease',
                        cursor: 'pointer',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 8px 20px rgba(0,0,0,0.2)',
                        transform: showInfo ? 'translateX(-140px) scale(1.02)' : 'translateX(0) scale(1)',
                        objectFit: 'cover',
                        aspectRatio: '3 / 4',
                        maxHeight: '85vh',
                        width: 'auto',
                        borderRadius: '16px',
                        padding: '8px'
                    }}
                />
                <div
                    className="showcase-info-box"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: showInfo ? '-470px' : '-510px',
                        width: '450px',
                        minHeight: '500px',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 25px 70px rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.15)',
                        borderRadius: '20px',
                        padding: '40px 36px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center', /* Center align content */
                        opacity: showInfo ? 1 : 0,
                        transform: 'translateY(-50%)',
                        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        border: '1px solid rgba(0,0,0,0.05)',
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                        pointerEvents: showInfo ? 'auto' : 'none',
                        zIndex: 100,
                    }}
                >
                    <h2 style={{ 
                        fontSize: '2rem', 
                        fontWeight: 800, 
                        color: '#1a1a1a', 
                        marginBottom: '0',
                        paddingBottom: '12px',
                        letterSpacing: '-0.5px',
                        borderBottom: '2px solid transparent',
                        backgroundImage: 'linear-gradient(90deg, transparent, rgba(229, 9, 20, 0.3), transparent)',
                        backgroundPosition: 'bottom',
                        backgroundSize: '100% 2px',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        {name}
                    </h2>
                    <div style={{ height: '24px' }} />
                    <p style={{ 
                        fontSize: '1.05rem', 
                        color: '#444', 
                        lineHeight: '1.7', 
                        marginBottom: '28px',
                        fontWeight: 400
                    }}>
                        Effective Student committed to learning, developing skills in <strong>Data Analysis</strong>, <strong>Machine Learning</strong>, and <strong>Web Development</strong>. Self-directed and energetic with superior performance in both autonomous or collaborative environments.
                    </p>
                    <div style={{
                        background: 'rgba(229,9,20,0.05)',
                        borderLeft: '4px solid #e50914',
                        padding: '16px 20px',
                        borderRadius: '8px',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}>
                        <div style={{ fontSize: '1rem', color: '#333', marginBottom: '10px' }}>
                            <strong style={{ color: '#e50914' }}>Birthday:</strong> 12 October, 2001
                        </div>
                        <div style={{ fontSize: '1rem', color: '#333' }}>
                            <strong style={{ color: '#e50914' }}>City:</strong> Hyderabad, India
                        </div>
                    </div>
                </div>
            <div className="showcase-card-overlay" style={{ zIndex: 5, transform: showInfo ? 'translateX(-140px)' : 'translateX(0)', transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                <div className="showcase-card-maininfo">
                    <div className="showcase-card-name" style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 800, 
                        display: 'flex', 
                        alignItems: 'center',
                        textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        gap: '8px',
                        marginBottom: '6px'
                    }}>
                        {name}
                        <span
                            title="Verified"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '28px',
                                height: '28px',
                                borderRadius: '14px',
                                background: 'linear-gradient(135deg, #1DA1F2 0%, #0d8bd9 100%)',
                                border: 'none',
                                boxShadow: '0 3px 8px rgba(29,161,242,0.4), 0 1px 3px rgba(0,0,0,0.2)'
                            }}
                        >
                            {React.createElement(FaCheck as any, { style: { color: '#ffffff', fontSize: '14px', fontWeight: 900 } })}
                        </span>
                    </div>
                    <div style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'rgba(255,255,255,0.9)',
                        textShadow: '0 1px 4px rgba(0,0,0,0.3)'
                    }}>
                        {role}
                    </div>
                    <div className="showcase-card-stats-row" style={{ display: 'flex', alignItems: 'center', margin: '16px 0 0 0' }}>
                        <div
                            style={{ position: 'relative', marginLeft: 'auto', zIndex: 20 }}
                        >
                            <button
                                className="showcase-follow-btn"
                                style={{ 
                                    fontWeight: 700, 
                                    fontSize: '1.1rem', 
                                    padding: '10px 26px', 
                                    borderRadius: '25px', 
                                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', 
                                    color: '#181818', 
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1)', 
                                    border: 'none', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '8px', 
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    zIndex: 21
                                }}
                                onClick={handleFollowButtonClick}
                            >
                                Follow <span style={{ fontSize: '1.2em', fontWeight: 800 }}>+</span>
                            </button>
                            {showSocials && (
                                <div 
                                    className="showcase-card-socials-row" 
                                    style={{ 
                                        position: 'absolute', 
                                        top: '120%', 
                                        left: '50%', 
                                        transform: 'translateX(-50%)', 
                                        display: 'flex', 
                                        gap: '12px', 
                                        padding: '12px 16px', 
                                        borderRadius: '20px', 
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1)', 
                                        zIndex: 10,
                                        animation: 'fadeIn 0.3s ease',
                                    }}
                                >
                                    {socials.map((social, index) => (
                                        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                                            {React.createElement(social.icon as any, social.iconProps)}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProfileShowcaseCard;
