import React from "react";
export default function StatsBar({ likedCount }) {
  return (
    <div className="stats">
      <span>Total Liked Quotes: {likedCount}</span>
    </div>
  );
}