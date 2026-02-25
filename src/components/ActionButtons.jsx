import React from "react";
export default function ActionButtons({
  loading,
  quote,
  isCurrentLiked,
  onNewQuote,
  onToggleLike,
}) {
  let likeButtonText;
  if (isCurrentLiked) {
    likeButtonText = "Unlike ❤️";
  } else {
    likeButtonText = "Like ❤️";
  }
  let likeButtonClass;
  if (isCurrentLiked) {
    likeButtonClass = "btn like-btn liked";
  } else {
    likeButtonClass = "btn like-btn";
  }
  return (
    <div className="button-row">
      <button
        className="btn primary-btn"
        onClick={onNewQuote}
        disabled={loading}
      >
        {loading && "Fetching..."}
        {!loading && "New Quote"}
      </button>
      <button
        className={likeButtonClass}
        onClick={onToggleLike}
        disabled={loading || !quote}
      >
        {likeButtonText}
      </button>
    </div>
  );
}