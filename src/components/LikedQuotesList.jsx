import React from "react";
export default function LikedQuotesList({ likedQuotes, filteredLikedQuotes }) {
  let content;
  if (likedQuotes.length === 0) {
    content = <p className="empty-text">You haven't liked any quotes yet.</p>;
  } else if (filteredLikedQuotes.length === 0) {
    content = <p className="empty-text">No liked quotes match your search.</p>;
  } else {
    content = (
      <ul className="liked-list">
        {filteredLikedQuotes.map((item) => (
          <li key={item.id} className="liked-item">
            <p className="liked-quote">"{item.content}"</p>
            <p className="liked-author">— {item.author}</p>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="liked-section">
      <h2>❤️ Liked Quotes</h2>
      {content}
    </div>
  );
}