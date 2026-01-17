import React from 'react';
import './Youtube.css';
import { FaYoutube, FaClock } from 'react-icons/fa';
import { useEffect, useState } from 'react';

// Channel handle (without @)
const CHANNEL_HANDLE = 'cellulofeed';
const CHANNEL_URL = `https://www.youtube.com/@${CHANNEL_HANDLE}/videos`;
const API_KEY = process.env.REACT_APP_YT_API_KEY;

type VideoItem = {
  id: string;
  title: string;
  description?: string;
  publishedAt?: string;
  url: string;
};

const Youtube: React.FC = () => {
  const [latest, setLatest] = useState<VideoItem | null>(null);
  const [suggested, setSuggested] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!API_KEY) {
      const FALLBACK_VIDEO_ID = 'UfsDV5aUtZk';
      setLatest({ id: FALLBACK_VIDEO_ID, title: 'Latest Upload', url: `https://www.youtube.com/watch?v=${FALLBACK_VIDEO_ID}` });

      const fallbackSuggested: VideoItem[] = [
        { id: 'NGCL-Jke5g8', title: 'Recommended: Video 1', url: 'https://www.youtube.com/watch?v=NGCL-Jke5g8' },
        { id: 'FbAl8tzKJTE', title: 'Recommended: Video 2', url: 'https://www.youtube.com/watch?v=FbAl8tzKJTE' },
        { id: 'rnzqK3S8U4I', title: 'Recommended: Video 3', url: 'https://www.youtube.com/watch?v=rnzqK3S8U4I' },
        { id: 'fKzktFIWc5E', title: 'Recommended: Video 4', url: 'https://www.youtube.com/watch?v=fKzktFIWc5E' },
      ];
      setSuggested(fallbackSuggested);
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const searchCh = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
            CHANNEL_HANDLE
          )}&type=channel&maxResults=1&key=${API_KEY}`
        ).then((r) => r.json());

        const channelId = searchCh.items && searchCh.items[0] && searchCh.items[0].snippet && searchCh.items[0].snippet.channelId
          ? searchCh.items[0].snippet.channelId
          : null;

        if (!channelId) {
          setLoading(false);
          return;
        }

        const videosResp = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&maxResults=8&key=${API_KEY}`
        ).then((r) => r.json());

        if (!videosResp.items || videosResp.items.length === 0) {
          setLoading(false);
          return;
        }

        const ids = videosResp.items.map((it: any) => it.id.videoId).join(',');
        const details = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${ids}&key=${API_KEY}`
        ).then((r) => r.json());

        const nonShorts = (details.items || []).filter((it: any) => {
          const duration = it.contentDetails && it.contentDetails.duration ? it.contentDetails.duration : null;
          if (!duration) return true;
          const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
          if (!match) return true;
          const mins = parseInt(match[1] || '0', 10);
          const secs = parseInt(match[2] || '0', 10);
          const total = mins * 60 + secs;
          return total >= 60;
        });

        const videoItems: VideoItem[] = nonShorts.map((it: any) => ({
          id: it.id,
          title: it.snippet.title,
          description: it.snippet.description,
          publishedAt: it.snippet.publishedAt,
          url: `https://www.youtube.com/watch?v=${it.id}`,
        }));

        if (videoItems.length > 0) {
          setLatest(videoItems[0]);
          setSuggested(videoItems.slice(1, 5));
        }
      } catch (err) {
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="youtube-page">
      <h2 className="youtube-title">
        <span className="youtube-icon" aria-hidden>
        </span>
        <span className="youtube-text">YouTube - Indian Movies Breakdown (Personal)</span>
      </h2>
      <p className="youtube-intro">Latest uploads from my movie channel. Subscribe for more such videos.</p>

      <div className="youtube-grid">
        <div className="video-section">
          {latest ? (
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
          ) : (
            <a className="blog-card" href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
              <div className="blog-icon animated-icon">{React.createElement(FaYoutube as any)}</div>
              <div className="blog-info animated-text">
                <h3 className="blog-title">Visit channel</h3>
                <p className="blog-description">Open the channel page to view latest videos and playlists.</p>
                <span className="blog-platform">YouTube</span>
              </div>
            </a>
          )}
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
                    <div className="suggested-thumb"><img src={thumb} alt={sugg.title} /></div>
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
            <div className="highlight-number">100K+</div>
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
