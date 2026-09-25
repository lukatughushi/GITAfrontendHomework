import React from "react";

function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header className="header">
      <h1 className="logo">devfinder</h1>
      <button 
        className="theme-toggle-btn"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <span>{isDarkMode ? "LIGHT" : "DARK"}</span>
        <span className="theme-icon">{isDarkMode ? "☀️" : "🌙"}</span>
      </button>
    </header>
  );
}

export default Header;