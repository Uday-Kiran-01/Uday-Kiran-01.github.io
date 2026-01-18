import React, { useMemo, useState } from 'react';
import './Reading.css';
import { books as allBooks } from '../data/booksData';

const groupByStatus = (list: any[]) => {
  const completed = list.filter(b => b.status === 'completed');
  const ongoing = list.filter(b => b.status === 'ongoing');
  return { completed, ongoing };
};

const MarqueeBlock: React.FC<{ title: string; items: any[]; duration?: string }> = ({ title, items, duration = '28s' }) => {
  const repeated = useMemo(() => [...items, ...items], [items]);
  const [paused, setPaused] = React.useState(false);
  if (!items.length) return null;
  return (
    <section className="books-section">
      <div className="books-section-header">
        <h3 className="books-section-title">{title}</h3>
        <div className="marquee-controls">
          <button
            className="marquee-toggle"
            aria-pressed={paused}
            onClick={() => setPaused(p => !p)}
          >
            {paused ? '▶' : '⏸'}
          </button>
        </div>
      </div>
      <div className="books-marquee">
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
      <h3 className="books-section-title">{title}</h3>
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
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'ongoing'>('all');
  const { completed, ongoing } = groupByStatus(allBooks);
  
  const filteredBooks = statusFilter === 'completed' ? completed : statusFilter === 'ongoing' ? ongoing : allBooks;
  
  return (
    <div className="reading-container">
      <div className="reading-header">
        <h2 className="reading-title">📚 Books That I'm Reading</h2>
        <div className="reading-controls">
          <div className="status-toggle">
            <button className={statusFilter === 'all' ? 'active' : ''} onClick={() => setStatusFilter('all')}>All</button>
            <button className={statusFilter === 'completed' ? 'active' : ''} onClick={() => setStatusFilter('completed')}>Completed</button>
            <button className={statusFilter === 'ongoing' ? 'active' : ''} onClick={() => setStatusFilter('ongoing')}>Ongoing</button>
          </div>
          <div className="view-toggle">
            <button className={viewMode === 'marquee' ? 'active' : ''} onClick={() => setViewMode('marquee')}>Marquee</button>
            <button className={viewMode === 'grid' ? 'active' : ''} onClick={() => setViewMode('grid')}>Grid</button>
          </div>
        </div>
      </div>
      
      {statusFilter === 'all' ? (
        viewMode === 'marquee' ? (
          <>
            <MarqueeBlock title="Completed" items={completed} duration="30s" />
            <MarqueeBlock title="Ongoing" items={ongoing} duration="22s" />
          </>
        ) : (
          <>
            <GridBlock title="Completed" items={completed} />
            <GridBlock title="Ongoing" items={ongoing} />
          </>
        )
      ) : (
        viewMode === 'marquee' ? (
          <MarqueeBlock title={statusFilter === 'completed' ? 'Completed' : 'Ongoing'} items={filteredBooks} />
        ) : (
          <GridBlock title={statusFilter === 'completed' ? 'Completed' : 'Ongoing'} items={filteredBooks} />
        )
      )}
    </div>
  );
};

export default Reading;
