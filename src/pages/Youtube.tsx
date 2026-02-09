import React from 'react';
import './Youtube.css';
import { FaYoutube } from 'react-icons/fa';

// Channel handle (without @)
const CHANNEL_HANDLE = 'cellulofeed';
const CHANNEL_URL = `https://www.youtube.com/@${CHANNEL_HANDLE}/videos`;

type VideoItem = {
  id: string;
  title: string;
  description?: string;
  publishedAt?: string;
  url: string;
};

const LATEST_VIDEO: VideoItem = {
  id: 'UfsDV5aUtZk',
  title: 'Latest Upload',
  url: 'https://www.youtube.com/watch?v=UfsDV5aUtZk',
};

const SUGGESTED_VIDEOS: VideoItem[] = [
  { id: 'NGCL-Jke5g8', title: 'Recommended: Video 1', url: 'https://www.youtube.com/watch?v=NGCL-Jke5g8' },
  { id: 'FbAl8tzKJTE', title: 'Recommended: Video 2', url: 'https://www.youtube.com/watch?v=FbAl8tzKJTE' },
  { id: 'rnzqK3S8U4I', title: 'Recommended: Video 3', url: 'https://www.youtube.com/watch?v=rnzqK3S8U4I' },
  { id: 'fKzktFIWc5E', title: 'Recommended: Video 4', url: 'https://www.youtube.com/watch?v=fKzktFIWc5E' },
];

const Youtube: React.FC = () => {
  const latest = LATEST_VIDEO;
  const suggested = SUGGESTED_VIDEOS;

  return (
    <div className="youtube-page">
      <h2 className="youtube-title">
        <span className="youtube-icon" aria-hidden>
          <FaYoutube />
        </span>
        <span className="youtube-text">YouTube - Indian Movies Breakdown (Personal)</span>
      </h2>
      <p className="youtube-intro">Latest uploads from my movie channel. Subscribe for more such videos.</p>

      <div className="youtube-grid">
        <div className="video-section">
          <div className="blog-card video-card">
            <div className="video-embed">
              <iframe
                title={latest.title}
                src={`https://www.youtube.com/embed/${latest.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <aside className="suggested-column">
            <div className="channel-card blog-card coming-soon">
              <div className="channel-header">
                <div className="blog-icon">{React.createElement(FaYoutube as any)}</div>
                <div>
                  <h3 className="channel-title">More videos on the channel</h3>
                  <p className="channel-sub">Visit the channel to browse more uploads and playlists.</p>
                  <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="channel-cta">Open Channel</a>
                </div>
              </div>
            </div>

            <h4 className="recommended-heading">Recommended</h4>
            {suggested && suggested.length > 0 ? (
              suggested.map((sugg, i) => {
                const thumb = sugg.id && sugg.id.length > 0
                  ? `https://i.ytimg.com/vi/${sugg.id}/hqdefault.jpg`
                  : `https://picsum.photos/seed/${encodeURIComponent(sugg.title)}/160/90`;
                return (
                  <a key={i} href={sugg.url} className="suggested-item" target="_blank" rel="noopener noreferrer">
                    <div className="suggested-thumb"><img src={thumb} alt={sugg.title} loading="lazy" decoding="async" /></div>
                    <div className="suggested-meta"><div className="suggested-title">{sugg.title}</div></div>
                  </a>
                );
              })
            ) : (
              <p style={{color:'#bdbdbd'}}>No recommendations available.</p>
            )}
        </aside>
      </div>

      <div className="channel-highlights">
        <h3 className="highlights-title">Content Journey</h3>
        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-number">50+</div>
            <div className="highlight-label">Videos Created</div>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">180K+</div>
            <div className="highlight-label">Total Views</div>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">25+</div>
            <div className="highlight-label">Movies Analyzed</div>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">5+</div>
            <div className="highlight-label">Indian Languages</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
