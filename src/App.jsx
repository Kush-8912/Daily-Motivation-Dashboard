import React, { useEffect, useState } from "react";
import "./App.css";
import QuoteCard from "./components/QuoteCard";
import ActionButtons from "./components/ActionButtons";
import StatsBar from "./components/StatsBar";
import SearchBox from "./components/SearchBox";
import LikedQuotesList from "./components/LikedQuotesList";
import Footer from "./components/Footer";
const BACKUP_API = "https://dummyjson.com/quotes/random";
export default function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [likedQuotes, setLikedQuotes] = useState([]);
  const [currentQuoteId, setCurrentQuoteId] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchRandomQuote();
  }, []);
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
  return (
    <div className="app">
      <div className="container">
        <h1>🌞 Daily Motivation Dashboard</h1>
        <p className="subtitle">Start your day with a fresh quote!</p>
        <QuoteCard
          quote={quote}
          author={author}
          loading={loading}
          error={error}
        />
        <ActionButtons
          loading={loading}
          quote={quote}
          isCurrentLiked={isCurrentLiked}
          onNewQuote={fetchRandomQuote}
          onToggleLike={toggleLike}
        />
        <StatsBar likedCount={likedQuotes.length} />
        <SearchBox
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <LikedQuotesList
          likedQuotes={likedQuotes}
          filteredLikedQuotes={filteredLikedQuotes}
        />
        <Footer />
      </div>
    </div>
  );
}