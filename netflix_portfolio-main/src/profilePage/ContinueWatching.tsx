import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
  { title: "YouTube", imgSrc: "https://picsum.photos/id/1011/300/200", link: "/youtube" },
    { title: "Books", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" },
    { title: "Projects", imgSrc: "https://picsum.photos/id/1060/300/200", link: "/projects" },
    { title: "Recommendations", imgSrc: "https://picsum.photos/id/1052/300/200", link: "/recommendations" }
  ],
    developer: [
    { title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "YouTube", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/youtube" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
    stalker: [
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "YouTube", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/youtube" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ],
  adventure: [
    { title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
    { title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  // show arrows when items exceed a small threshold (keep consistent with TopPicksRow)
  const ARROW_THRESHOLD = 4;
  const shouldShowArrows = continueWatching.length > ARROW_THRESHOLD;
  const [showRightArrow, setShowRightArrow] = useState(shouldShowArrows);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = 800;
      const newScrollLeft = direction === 'left'
        ? rowRef.current.scrollLeft - scrollAmount
        : rowRef.current.scrollLeft + scrollAmount;

      rowRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });

      setTimeout(() => {
        if (rowRef.current) {
          const el = rowRef.current;
          setShowLeftArrow(el.scrollLeft > 5);
          setShowRightArrow(
            el.scrollLeft < el.scrollWidth - el.clientWidth - 10
          );
        }
      }, 300);
    }
  };

  const profileDisplayNames: Record<ProfileType, string> = {
    recruiter: 'Recruiter',
    developer: 'Developer',
    stalker: 'Visitor',
    adventure: 'Explorer'
  };

  const title = `Continue Watching for ${profileDisplayNames[profile]}`;

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-container">
        {shouldShowArrows && showLeftArrow && (
          <button className="scroll-arrow left-arrow" onClick={() => scroll('left')}>
            <FaChevronLeft />
          </button>
        )}
        <div className="card-row" ref={rowRef}>
        {continueWatching.map((pick, index) => {
          const isCert = pick.title === 'Certifications';
          if (isCert) {
            return (
              <div key={index} className="pick-card disabled">
                <img src={pick.imgSrc} alt={pick.title} className="pick-image" loading="lazy" decoding="async" />
                <div className="overlay">
                  <div className="pick-label">Loading - very soon</div>
                </div>
              </div>
            );
          }

          return (
            <Link to={pick.link} key={index} className="pick-card">
              <img src={pick.imgSrc} alt={pick.title} className="pick-image" loading="lazy" decoding="async" />
              <div className="overlay">
                <div className="pick-label">{pick.title}</div>
              </div>
            </Link>
          );
        })}
        </div>
        {shouldShowArrows && showRightArrow && (
          <button className="scroll-arrow right-arrow" onClick={() => scroll('right')}>
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContinueWatching;
