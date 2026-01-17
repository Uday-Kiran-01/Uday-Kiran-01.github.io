import React, { useMemo, useState } from 'react';
import './Research.css';
import { projectsData, certificationsData } from '../data/staticData';

const TABS = ["Research Papers", "Patent"] as const;
type Tab = typeof TABS[number];

const Research: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Research Papers');
  const [copied, setCopied] = useState(false);

  const researchItems = useMemo(() => {
    return projectsData.map((p: any) => ({
      title: p.title,
      link: (p.image && p.image.url) || '#',
    }));
  }, []);
  const patentItems = useMemo(() => {
    return certificationsData.map((pt: any) => ({
      title: pt.title,
      subtitle: pt.issuer,
      link: pt.link || '#',
      image: undefined as string | undefined,
      timeline: pt.issuedDate,
      number: undefined,
      status: 'published',
      inventors: undefined,
      publicationDate: undefined,
    }));
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="research-container">
      <h2 className="title">Research</h2>

      <div style={{ height: 8 }} />
      <div className="filter-toggle" data-active={activeTab === 'Research Papers' ? '0' : '1'}>
        <button
          className={activeTab === 'Research Papers' ? 'active' : ''}
          onClick={() => setActiveTab('Research Papers')}
        >
          Research Papers
        </button>
        <button
          className={activeTab === 'Patent' ? 'active' : ''}
          onClick={() => setActiveTab('Patent')}
        >
          Patent
        </button>
      </div>
      <div style={{ height: 2 }} />

      {activeTab === 'Research Papers' && (
        <div className="research-papers-list" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(380px, 1fr))',gap:'38px',marginTop:'38px'}}>
          {researchItems.map((paper: any, idx: number) => (
            <div className="research-paper-card" key={idx}>
              <div className="research-paper-title">{paper.title}</div>
              <hr className="official-patent-divider" />
              <a href={paper.link} target="_blank" rel="noopener noreferrer" className="research-paper-link">View Full Paper</a>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Patent' && (
        patentItems.length > 0 ? (
          <div className="card-grid" style={{ marginTop: 0, justifyContent: 'center', display: 'flex' }}>
            {patentItems.map((item: any, idx: number) => (
              <div className="research-card official-patent" key={idx} style={{ margin: '0 auto' }}>
                <div className="official-patent-title">
                  {item.title}
                </div>
                <hr className="official-patent-divider" />
                <div className="official-patent-details">
                  <span className="official-patent-label">Status:</span>
                  <span className="official-patent-value">{item.status}</span>
                  <span className="official-patent-label">Year:</span>
                  <span className="official-patent-value">{item.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No patents available.</div>
        )
      )}
    </div>
  );
};

export default Research;
