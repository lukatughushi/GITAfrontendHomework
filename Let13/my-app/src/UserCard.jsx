import React from "react";

// UserCard იღებს user-ის მონაცემებს props-ის საშუალებით (Destructuring-ით)
function UserCard({ name, age, role, skills, photo }) {
  // დინამიური ClassName: თუ Admin-ია ემატება "admin-card", თუ არა - "user-card"
  const cardClassName = `card ${role === "Admin" ? "admin-card" : "user-card"}`;

  return (
    <div className={cardClassName}>
      <img src={photo} alt={name} className="user-photo" />
      <h2>{name}</h2>
      <p><strong>ასაკი:</strong> {age}</p>
      <p>
        <strong>როლი:</strong>{" "}
        <span className={role === "Admin" ? "admin-badge" : "user-badge"}>
          {role}
        </span>
      </p>

      <div className="skills-section">
        <strong>სკილები:</strong>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserCard;