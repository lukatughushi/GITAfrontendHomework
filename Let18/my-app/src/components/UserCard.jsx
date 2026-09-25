import React from "react";

function UserCard({ user }) {
  // თარიღის დაფორმატება Figma-ს დიზაინის მიხედვით (მაგ: Joined 25 Jan 2011)
  const formatDate = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `Joined ${day} ${month} ${year}`;
  };

  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} className="avatar" />

      <div className="user-content">
        <div className="user-header">
          <div>
            <h2>{user.name || user.login}</h2>
            <p className="username">@{user.login}</p>
          </div>
          <p className="joined-date">{formatDate(user.created_at)}</p>
        </div>

        <p className={`bio ${!user.bio ? "not-available" : ""}`}>
          {user.bio || "This profile has no bio"}
        </p>

        {/* სტატისტიკა */}
        <div className="stats-container">
          <div className="stat-box">
            <span>Repos</span>
            <strong>{user.public_repos}</strong>
          </div>
          <div className="stat-box">
            <span>Followers</span>
            <strong>{user.followers}</strong>
          </div>
          <div className="stat-box">
            <span>Following</span>
            <strong>{user.following}</strong>
          </div>
        </div>

        {/* სოციალური ბმულები და ლოკაცია */}
        <div className="links-grid">
          <div className={`link-item ${!user.location ? "not-available" : ""}`}>
            <span>📍</span> {user.location || "Not Available"}
          </div>
          <div className={`link-item ${!user.blog ? "not-available" : ""}`}>
            <span>🔗</span>{" "}
            {user.blog ? (
              <a href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`} target="_blank" rel="noreferrer">
                {user.blog}
              </a>
            ) : (
              "Not Available"
            )}
          </div>
          <div className={`link-item ${!user.twitter_username ? "not-available" : ""}`}>
            <span>🐦</span> {user.twitter_username ? `@${user.twitter_username}` : "Not Available"}
          </div>
          <div className={`link-item ${!user.company ? "not-available" : ""}`}>
            <span>🏢</span> {user.company || "Not Available"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;