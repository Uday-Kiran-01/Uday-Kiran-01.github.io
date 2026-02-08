import React, { useMemo, useState } from 'react';
import './Reading.css';
import { books as allBooks } from '../data/booksData';

const groupByStatus = (list: any[]) => {
  const completed = list.filter(b => b.status === 'completed');
  const ongoing = list.filter(b => b.status === 'ongoing');
  return { completed, ongoing };
};

const MarqueeBlock: React.FC<{ title: string; items: any[]; duration?: string }> = ({ title, items, duration = '40s' }) => {
  const sortedItems = useMemo(() => [...items].sort((a, b) => a.title.localeCompare(b.title)), [items]);
  const repeated = useMemo(() => {
    const copies = items.length < 4 ? 6 : 2;
    return Array(copies).fill(sortedItems).flat();
  }, [sortedItems, items.length]);
  const [paused, setPaused] = React.useState(false);
  if (!items.length) return null;
  return (
    <section className="books-section">
      <div className="books-marquee" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="marquee-viewport">
          <div
            className="marquee-track"
            style={{ ['--duration' as any]: duration, animationPlayState: paused ? 'paused' : 'running' } as React.CSSProperties}
          >
            {repeated.map((book, index) => (
              <div key={index} className="book-card marquee-item">
                <img src={book.imgSrc} alt={book.title} className="book-cover" loading="lazy" decoding="async" />
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <h4 className="book-author">{book.author}</h4>
                  <p className="book-description">{book.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const GridBlock: React.FC<{ title: string; items: any[] }> = ({ title, items }) => {
  if (!items.length) return null;
  return (
    <section className="books-section">
      <div className="books-grid">
        {items.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.imgSrc} alt={book.title} className="book-cover" loading="lazy" decoding="async" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Reading: React.FC = () => {
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('marquee');
  const [statusFilter, setStatusFilter] = useState<'completed' | 'ongoing'>('completed');
  const { completed, ongoing } = groupByStatus(allBooks);
  
  const filteredBooks = statusFilter === 'completed' ? completed : ongoing;
  
  return (
    <div className="reading-container">
      <div className="intro-section">
        <h1 className="page-title">📚 Books Shaping My Journey</h1>
        <p className="page-subtitle">Pages that have influenced and continue to inspire me...</p>
        
        <div className="reading-header">
          <div className={`status-toggle ${statusFilter}`}>
            <button
              className={statusFilter === 'completed' ? 'active' : ''}
              onClick={() => setStatusFilter('completed')}
            >
              Completed
            </button>
            <button
              className={statusFilter === 'ongoing' ? 'active' : ''}
              onClick={() => setStatusFilter('ongoing')}
            >
              Ongoing
            </button>
            <span className="slider" />
          </div>
          <div className={`view-toggle ${viewMode}`}>
            <button className={viewMode === 'marquee' ? 'active' : ''} onClick={() => setViewMode('marquee')}>Marquee</button>
            <button className={viewMode === 'grid' ? 'active' : ''} onClick={() => setViewMode('grid')}>Grid</button>
            <span className="slider" />
          </div>
        </div>
      </div>
      
      {viewMode === 'marquee' ? (
        <MarqueeBlock title={statusFilter === 'completed' ? 'Completed' : 'Ongoing'} items={filteredBooks} />
      ) : (
        <GridBlock title={statusFilter === 'completed' ? 'Completed' : 'Ongoing'} items={filteredBooks} />
      )}
    </div>
  );
};

export default Reading;
