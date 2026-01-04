import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, image, onClick }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Failed to load image for ${name}:`, image);
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="profile-card" onClick={onClick}>
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
      <h3 className="profile-name">{name}</h3>
    </div>
  );
};

export default ProfileCard;
