import React from "react";
export default function SearchBox({ searchTerm, onSearchChange }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search liked quotes or authors..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}