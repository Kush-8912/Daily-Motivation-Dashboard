import React from "react";
export default function QuoteCard({ quote, author, loading, error }) {
  if (loading) {
    return (
      <div className="quote-card">
        <p className="loading-text">Loading a motivational quote...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="quote-card">
        <p className="error-text">{error}</p>
      </div>
    );
  }
  if (quote) {
    return (
      <div className="quote-card">
        <p className="quote-text">"{quote}"</p>
        <p className="author-text">— {author}</p>
      </div>
    );
  }
  return (
    <div className="quote-card">
      <p className="empty-text">No quote available right now.</p>
    </div>
  );
}