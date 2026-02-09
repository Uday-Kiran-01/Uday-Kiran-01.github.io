import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  name: string;
  image: string;
  onClick?: () => void;
  disabled?: boolean;
  subtitle?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, image, onClick, disabled = false, subtitle }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Failed to load image for ${name}:`, image);
    e.currentTarget.style.display = 'none';
  };

  const handleActivate = () => {
    if (disabled) return;
    onClick?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className={`profile-card ${disabled ? 'disabled' : ''}`}
      role="button"
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
    >
      <div className="image-container">
        <img 
          src={image} 
          alt={`${name} profile`} 
          className="profile-image" 
          loading="lazy" 
          decoding="async"
          onError={handleImageError}
        />
      </div>
      <p className="profile-name">{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      {subtitle ? <p className="profile-subtitle">{subtitle}</p> : null}
    </div>
  );
};

export default ProfileCard;
