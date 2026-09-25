import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // GitHub API-დან მონაცემების წამოღება
  const fetchGitHubUser = async (username) => {
    setLoading(true);
    setHasError(false);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  // აპლიკაციის ჩატვირთვისას დეფოლტად წამოიღოს octocat
  useEffect(() => {
    fetchGitHubUser("octocat");
  }, []);

  return (
    <div className={`app-wrapper ${isDarkMode ? "dark" : "light"}`}>
      <main className="container">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <SearchBar onSearch={fetchGitHubUser} hasError={hasError} />
        {loading && <p className="loading-text">Loading...</p>}
        {user && !loading && <UserCard user={user} />}
      </main>
    </div>
  );
}

export default App;