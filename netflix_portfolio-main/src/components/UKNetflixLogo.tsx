import React from 'react';
import './UKNetflixLogo.css';

const UKNetflixLogo: React.FC<{ className?: string }> = ({ className }) => {
  const text = 'UDAY KIRAN';
  return (
    <svg
      className={className}
      width="260"
      height="60"
      viewBox="0 0 260 60"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={text}
    >
      <defs>
        <path id="arc" d="M10,40 A110,110 0 0,1 250,40" />
      </defs>
      <g>
        <text fontFamily="Helvetica, Arial, sans-serif" fontWeight="700" fontSize="28">
          <textPath href="#arc" startOffset="50%" textAnchor="middle" fill="#e50914">{text}</textPath>
        </text>
        <text fontFamily="Helvetica, Arial, sans-serif" fontWeight="700" fontSize="28">
          <textPath href="#arc" startOffset="50%" textAnchor="middle" fill="rgba(0,0,0,0.45)" transform="translate(1,1)">{text}</textPath>
        </text>
      </g>
    </svg>
  );
};

export default UKNetflixLogo;
