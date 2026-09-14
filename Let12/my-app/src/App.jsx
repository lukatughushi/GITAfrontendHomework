import React from "react";

// 1. UserCard კომპონენტი (იღებს props-ს)
function UserCard({ name, age, role, skills, photo }) {
  // დინამიური სტილები Admin-ისა და ჩვეულებრივი User-ისთვის
  const cardStyle = {
    width: "220px",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    backgroundColor: role === "Admin" ? "#fffdf0" : "#ffffff",
    border: role === "Admin" ? "2px solid #ffd700" : "2px solid #e0e0e0",
    color: "#333",
  };

  const badgeStyle = {
    color: role === "Admin" ? "#b8860b" : "#4682b4",
    fontWeight: "bold",
  };

  return (
    <div style={cardStyle}>
      <img
        src={photo}
        alt={name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h2>{name}</h2>
      <p>
        <strong>ასაკი:</strong> {age}
      </p>
      <p>
        <strong>როლი:</strong> <span style={badgeStyle}>{role}</span>
      </p>

      <div>
        <strong>სკილები:</strong>
        <ul style={{ paddingLeft: "20px", margin: "5px 0" }}>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// 2. მთავარი App კომპონენტი
function App() {
  // ობიექტების მასივი users
  const users = [
    {
      id: 1,
      name: "გიორგი ბერიძე",
      age: 28,
      role: "Admin",
      skills: ["React", "Node.js", "TypeScript"],
      photo: "https://picsum.photos/id/1005/150/150",
    },
    {
      id: 2,
      name: "ანა კაპანაძე",
      age: 24,
      role: "User",
      skills: ["HTML", "CSS", "JavaScript"],
      photo: "https://picsum.photos/id/1027/150/150",
    },
    {
      id: 3,
      name: "დავით მაისურაძე",
      age: 32,
      role: "User",
      skills: ["Figma", "UI/UX", "Tailwind"],
      photo: "https://picsum.photos/id/64/150/150",
    },
    {
      id: 4,
      name: "სალომე ჯაფარიძე",
      age: 29,
      role: "Admin",
      skills: ["Python", "Django", "React"],
      photo: "https://picsum.photos/id/338/150/150",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1>მომხმარებლების სია</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {/* .map() მეთოდით მასივის დარენდერება */}
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            age={user.age}
            role={user.role}
            skills={user.skills}
            photo={user.photo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;