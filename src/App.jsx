import React, { useEffect, useState } from "react";
import "./App.css";
const BACKUP_API = "https://dummyjson.com/quotes/random";
export default function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [likedQuotes, setLikedQuotes] = useState([]);
  const [currentQuoteId, setCurrentQuoteId] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchRandomQuote();
  }, []);
  useEffect(() => {
    const savedLikes = localStorage.getItem("likedQuotes");
    if (savedLikes) {
      try {
        setLikedQuotes(JSON.parse(savedLikes));
      } catch (err) {
        console.error("Failed to parse liked quotes from localStorage", err);
      }
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("likedQuotes", JSON.stringify(likedQuotes));
  }, [likedQuotes]);
  const fetchRandomQuote = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(BACKUP_API);
      if (!res.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await res.json();
      setQuote(data.quote || "");
      setAuthor(data.author || "Unknown");
      setCurrentQuoteId(String(data.id || Date.now()));
    } catch (err) {
      console.error(err);
      setError("Could not fetch a quote. Please try again.");
      setQuote("");
      setAuthor("");
      setCurrentQuoteId("");
    } finally {
      setLoading(false);
    }
  };
  const isCurrentLiked = likedQuotes.some((item) => item.id === currentQuoteId);
  const toggleLike = () => {
    if (!quote) return;
    const newLikedQuote = {
      id: currentQuoteId || `${author}-${quote}`,
      content: quote,
      author: author,
    };
    setLikedQuotes((prev) => {
      const alreadyLiked = prev.some((item) => item.id === newLikedQuote.id);
      if (alreadyLiked) {
        return prev.filter((item) => item.id !== newLikedQuote.id);
      }
      return [newLikedQuote, ...prev];
    });
  };
  const filteredLikedQuotes = likedQuotes.filter((item) => {
    const text = `${item.content} ${item.author}`.toLowerCase();
    return text.includes(searchTerm.toLowerCase());
  });
  let quoteContent = null;
  if (loading) {
    quoteContent = (
      <p className="loading-text">Loading a motivational quote...</p>
    );
  } else if (error) {
    quoteContent = <p className="error-text">{error}</p>;
  } else if (quote) {
    quoteContent = (
      <>
        <p className="quote-text">“{quote}”</p>
        <p className="author-text">— {author}</p>
      </>
    );
  } else {
    quoteContent = <p className="empty-text">No quote available right now.</p>;
  }
  let likedListContent = null;
  if (likedQuotes.length === 0) {
    likedListContent = (
      <p className="empty-text">You haven’t liked any quotes yet.</p>
    );
  } else if (filteredLikedQuotes.length === 0) {
    likedListContent = (
      <p className="empty-text">No liked quotes match your search.</p>
    );
  } else {
    likedListContent = (
      <ul className="liked-list">
        {filteredLikedQuotes.map((item) => (
          <li key={item.id} className="liked-item">
            <p className="liked-quote">“{item.content}”</p>
            <p className="liked-author">— {item.author}</p>
          </li>
        ))}
      </ul>
    );
  }
  let likeButtonText = "Like ❤️";
  if (isCurrentLiked) {
    likeButtonText = "Unlike ❤️";
  }
  let likeButtonClass = "btn like-btn";
  if (isCurrentLiked) {
    likeButtonClass = "btn like-btn liked";
  }
  return (
    <div className="app">
      <div className="container">
        <h1>🌞 Daily Motivation Dashboard</h1>
        <p className="subtitle">Start your day with a fresh quote!</p>
        <div className="quote-card">{quoteContent}</div>
        <div className="button-row">
          <button
            className="btn primary-btn"
            onClick={fetchRandomQuote}
            disabled={loading}
          >
            {loading && "Fetching..."}
            {!loading && "New Quote"}
          </button>
          <button
            className={likeButtonClass}
            onClick={toggleLike}
            disabled={loading || !quote}
          >
            {likeButtonText}
          </button>
        </div>
        <div className="stats">
          <span>Total Liked Quotes: {likedQuotes.length}</span>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search liked quotes or authors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="liked-section">
          <h2>❤️ Liked Quotes</h2>
          {likedListContent}
        </div>
        <footer className="footer">Created with ❤️ by Kushagra Aggarwal</footer>
      </div>
    </div>
  );
}