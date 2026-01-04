import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaPassport, FaCode, FaBriefcase, FaCertificate, FaHandsHelping, FaProjectDiagram, FaEnvelope, FaMusic, FaBook, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Work Permit", imgSrc: "https://picsum.photos/seed/workpermit/250/200", icon: <FaPassport />, route: "/work-permit" },
    { title: "Skills", imgSrc: "https://picsum.photos/seed/skills/250/200", icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/workexperience/250/200", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/certifications/250/200", icon: <FaCertificate />, route: "/certifications" },
    { title: "Recommendations", imgSrc: "https://picsum.photos/seed/recommendations/250/200", icon: <FaHandsHelping />, route: "/recommendations" },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/projects/250/200", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/contact/250/200", icon: <FaEnvelope />, route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: "https://picsum.photos/seed/coding/250/200", route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/development/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/badge/250/200", route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/work/250/200", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Recommendations", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    { title: "Recommendations", imgSrc: "https://picsum.photos/seed/networking/250/200", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/call/250/200", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/planning/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/resume/250/200", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/achievements/250/200", route: "/certifications", icon: <FaCertificate /> },
  ],
  adventure: [
    { title: "Music", imgSrc: "https://picsum.photos/seed/music/250/200", route: "/music", icon: <FaMusic /> },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/innovation/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Reading", imgSrc: "https://picsum.photos/seed/books/250/200", route: "/reading", icon: <FaBook /> },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Certifications", imgSrc: "https://picsum.photos/seed/medal/250/200", route: "/certifications", icon: <FaCertificate /> }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const profileDisplayNames: Record<ProfileType, string> = {
    recruiter: 'Recruiter',
    developer: 'Developer',
    stalker: 'Visitor',
    adventure: 'Explorer'
  };

  const title = `Today's Top Picks for ${profileDisplayNames[profile]}`;

    // simpler arrow logic: show arrows when items exceed 4
    const ARROW_THRESHOLD = 4;
    const shouldShowArrows = topPicks.length > ARROW_THRESHOLD;

    // only one arrow visible at a time: 'left' | 'right' | 'none'
    const [visibleArrow, setVisibleArrow] = useState<'left' | 'right' | 'none'>(
      shouldShowArrows ? 'right' : 'none'
    );

    // measure overflow and keep arrow state in sync with scrolling
    useEffect(() => {
      const el = rowRef.current;
      if (!el) return;

      const update = () => {
        const overflows = el.scrollWidth > el.clientWidth + 2; // small tolerance
        if (!overflows) {
          setVisibleArrow('none');
          setShowLeftArrow(false);
          return;
        }

        const canScrollLeft = el.scrollLeft > 5;
        const canScrollRight = el.scrollLeft < el.scrollWidth - el.clientWidth - 5;

        setShowLeftArrow(canScrollLeft);

        if (canScrollLeft && !canScrollRight) setVisibleArrow('left');
        else if (!canScrollLeft && canScrollRight) setVisibleArrow('right');
        else if (canScrollLeft && canScrollRight) setVisibleArrow('right');
        else setVisibleArrow('none');
      };

      // run once to initialize
      update();

      // update on scroll so arrow visibility stays correct
      el.addEventListener('scroll', update, { passive: true });
      return () => el.removeEventListener('scroll', update);
    }, [topPicks]);

    const scroll = (direction: 'left' | 'right') => {
      const el = rowRef.current;
      if (!el) return;

      // scroll by one page (container width) so a single click will more likely reach end/start
      const page = Math.max(el.clientWidth - 20, 200);
      let target = direction === 'left' ? el.scrollLeft - page : el.scrollLeft + page;

      // If we're close to the start/end, snap to exact bounds so arrows toggle immediately
      const maxLeft = el.scrollWidth - el.clientWidth;
      const remainingRight = maxLeft - el.scrollLeft;
      const remainingLeft = el.scrollLeft;

      if (direction === 'right' && remainingRight <= page + 10) {
        target = maxLeft; // snap fully to end
      } else if (direction === 'left' && remainingLeft <= page + 10) {
        target = 0; // snap fully to start
      }

      // clamp to bounds
      target = Math.max(0, Math.min(target, maxLeft));

      // compute expected post-scroll visibility immediately so UI updates promptly
      const willCanScrollLeft = target > 5;
      const willCanScrollRight = target < el.scrollWidth - el.clientWidth - 5;
      setShowLeftArrow(willCanScrollLeft);
      if (willCanScrollLeft && !willCanScrollRight) setVisibleArrow('left');
      else if (!willCanScrollLeft && willCanScrollRight) setVisibleArrow('right');
      else if (willCanScrollLeft && willCanScrollRight) setVisibleArrow('right');
      else setVisibleArrow('none');

      el.scrollTo({ left: target, behavior: 'smooth' });

      // ensure visibility update after the smooth scroll finishes (shorter delay for snappier UI)
      setTimeout(() => {
        const canScrollLeft = el.scrollLeft > 5;
        const canScrollRight = el.scrollLeft < el.scrollWidth - el.clientWidth - 5;
        setShowLeftArrow(canScrollLeft);

        if (canScrollLeft && !canScrollRight) setVisibleArrow('left');
        else if (!canScrollLeft && canScrollRight) setVisibleArrow('right');
        else if (canScrollLeft && canScrollRight) setVisibleArrow('right');
        else setVisibleArrow('none');
      }, 350);
    };

  return (
    <div className={`top-picks-row ${profile === 'recruiter' ? 'recruiter-size' : ''}`}>
      <h2 className="row-title">{title}</h2>
      <div className="row-container">
        {shouldShowArrows && visibleArrow === 'left' && (
          <button className="scroll-arrow left-arrow" onClick={() => scroll('left')}>
            <FaChevronLeft />
          </button>
        )}
        <div className="card-row" ref={rowRef}>
        {topPicks.map((pick, index) => (
            <div 
              key={index} 
              className="pick-card" 
              onClick={() => navigate(pick.route)}
            >
              <img src={pick.imgSrc} alt={pick.title} className="pick-image" loading="lazy" decoding="async" />
              <div className="overlay">
                <div className="pick-label">{pick.title}</div>
              </div>
            </div>
          ))}
        </div>
        {shouldShowArrows && visibleArrow === 'right' && (
          <button className="scroll-arrow right-arrow" onClick={() => scroll('right')}>
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default TopPicksRow;
