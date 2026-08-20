import React from "react";
import "../../css/portal.css";

const HallOfFame = () => {
  return (
    <section className="hall-of-fame-section">
      <h2>Hall Of Fame</h2>
      <p>Celebrating outstanding students and their achievements.</p>
      {/* Add student cards or achievements here */}
      <div className="hall-of-fame-list">
        {/* Example student */}
        <div className="hall-of-fame-student">
          <h3>Jane Doe</h3>
          <p>National Science Award Winner</p>
        </div>
        {/* Add more students as needed */}
      </div>
    </section>
  );
};

export default HallOfFame;
