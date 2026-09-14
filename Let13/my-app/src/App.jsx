import React, { useState } from "react";

// 1. ProductCard კომპონენტი (შვილი კომპონენტი)
function ProductCard({ title, price, category, onAddToCart }) {
  // დინამიური სტილები: Electronics კატეგორიისთვის განსხვავებული ფონი და ჩარჩო
  const isElectronics = category === "Electronics";

  const cardStyle = {
    width: "220px",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    backgroundColor: isElectronics ? "#eef6ff" : "#ffffff",
    border: isElectronics ? "2px solid #2196f3" : "2px solid #e0e0e0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const buttonStyle = {
    marginTop: "12px",
    padding: "8px 12px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={cardStyle}>
      <div>
        <h3 style={{ margin: "0 0 8px 0" }}>{title}</h3>
        <p style={{ margin: "4px 0", color: "#666" }}>
          <strong>კატეგორია:</strong> {category}
        </p>
        <p style={{ margin: "4px 0", fontSize: "18px", fontWeight: "bold" }}>
          ${price}
        </p>
      </div>

      {/* ღილაკზე დაჭერისას იძახებს მშობლისგან გამოტანილ ფუნქციას (State Lifting) */}
      <button style={buttonStyle} onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

// 2. მთავარი App კომპონენტი (მშობელი კომპონენტი)
function App() {
  // State Lifting: კალათის სტეიტი შექმნილია App-ში, საწყისი მნიშვნელობა 0
  const [cartCount, setCartCount] = useState(0);

  // პროდუქტების მასივი (მინიმუმ 4 პროდუქტი)
  const products = [
    { id: 101, title: "Wireless Headphones", price: 99, category: "Electronics" },
    { id: 102, title: "Cotton T-Shirt", price: 25, category: "Clothing" },
    { id: 103, title: "Smart Watch", price: 199, category: "Electronics" },
    { id: 104, title: "Denim Jeans", price: 59, category: "Clothing" },
  ];

  // ფუნქცია, რომელიც ზრდის კალათის რაოდენობას 1-ით
  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <div style={{ padding: "24px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      {/* App-ის ზედა ნაწილში კალათის რაოდენობის გამოჩენა */}
      <header
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "16px 24px",
          borderRadius: "8px",
          marginBottom: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>მაღაზია</h2>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          🛒 კალათა: <span style={{ color: "#4caf50" }}>{cartCount}</span> ნივთი
        </div>
      </header>

      <h1>პროდუქტების სია</h1>

      {/* .map()-ით პროდუქტების დარენდერება */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id} // სწორი უნიკალური key პროპი
            title={product.title}
            price={product.price}
            category={product.category}
            onAddToCart={handleAddToCart} // ფუნქციის გადაცემა Props-ით
          />
        ))}
      </div>
    </div>
  );
}

export default App;