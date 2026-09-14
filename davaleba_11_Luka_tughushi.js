/* 
==========================================================================
1) რა არის კომპონენტი?
==========================================================================
React-ში კომპონენტი (Component) არის UI-ის
დამოუკიდებელი, ხელახლა გამოყენებადი და იზოლირებული ნაწილი. 

ტექნიკურად, კომპონენტი არის ჩვეულებრივი JavaScript ფუნქცია, 
რომელიც პარამეტრად იღებს მონაცემებს (Props) და აბრუნებს 
JSX (HTML-ის მსგავს) სტრუქტურას ეკრანზე დასარენდერებლად.
==========================================================================
*/

import React from "react";

// --------------------------------------------------------------------------
// 3 ცალკეული კომპონენტი (H1, Input, Paragraph)
// --------------------------------------------------------------------------
function HeadingComponent() {
  return <h1>მოგესალმებით React-ის დავალებაში!</h1>;
}

function InputComponent() {
  return <input type="text" placeholder="ჩაწერეთ ტექსტი..." />;
}

function ParagraphComponent() {
  return <p>ეს არის ცალკე შეიქმნილი პარაგრაფის კომპონენტი.</p>;
}

// --------------------------------------------------------------------------
// მთავარი App კომპონენტი
// --------------------------------------------------------------------------
function App() {
  // 1. String (სტრიქონი)
  const strData = "გამარჯობა JavaScript & React!";

  // 2. Number (რიცხვი)
  const numData = 2026;

  // 3. Array (მასივი)
  const arrData = ["HTML", "CSS", "JS", "React"];

  // 4. Object (ობიექტი)
  const objData = {
    course: "Front-End",
    lesson: 10,
  };

  // 5. Function (ფუნქცია)
  const fncData = () => {
    alert("ფუნქცია წარმატებით გამოიძახა!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* 3 კომპონენტის გამოჩენა */}
      <HeadingComponent />
      <InputComponent />
      <ParagraphComponent />

      <hr />

      <h2>მონაცემების გამოჩენა App.jsx-ში:</h2>

      {/* 1. String-ის გამოჩენა */}
      <p>
        <strong>String:</strong> {strData}
      </p>

      {/* 2. Number-ის გამოჩენა */}
      <p>
        <strong>Number:</strong> {numData}
      </p>

      {/* 3. Array-ს გამოჩენა (.map მეთოდით) */}
      <div>
        <strong>Array:</strong>
        <ul>
          {arrData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* 4. Object-ის გამოჩენა (ობიექტის თვისებების ცალ-ცალკე ამოღებით) */}
      <p>
        <strong>Object:</strong> კურსი: {objData.course}, ლექცია: {objData.lesson}
      </p>

      {/* 5. Function-ის გამოჩენა (event handler-ზე მიბმით) */}
      <div>
        <strong>Function:</strong>{" "}
        <button onClick={fncData}>გაშვი ფუნქცია</button>
      </div>
    </div>
  );
}

export default App;