import React, { useState } from "react";

function SearchBar({ onSearch, hasError }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search GitHub username…"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="search-actions">
        {hasError && <span className="error-msg">No results</span>}
        <button type="submit" className="search-btn">Search</button>
      </div>
    </form>
  );
}

export default SearchBar;