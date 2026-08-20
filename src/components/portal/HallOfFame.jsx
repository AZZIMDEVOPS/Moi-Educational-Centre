import React from "react";
import student1 from "../../assets/junior1.jpg";
import student2 from "../../assets/kids.jpg";
import student3 from "../../assets/upper.jpg";

const bestStudents = [
  {
    name: "Jane Mwangi",
    achievement: "Top KCPE Score 2025",
    image: student1,
  },
  {
    name: "Samuel Otieno",
    achievement: "Best Science Project",
    image: student2,
  },
  {
    name: "Aisha Mohamed",
    achievement: "Outstanding Leadership",
    image: student3,
  },
];

const HallOfFame = () => (
  <div className="hall-of-fame" style={{ background: "#f8f9fa", padding: "30px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", marginTop: "40px" }}>
    <h3 style={{ color: "#2c3e50", marginBottom: "24px", fontSize: "26px", fontWeight: "bold" }}>Hall of Fame: Best Performing Students</h3>
    <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
      {bestStudents.map((student, idx) => (
        <div key={idx} style={{ background: "white", borderRadius: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.07)", padding: "18px", textAlign: "center", width: "220px" }}>
          <img src={student.image} alt={student.name} style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "12px" }} />
          <h4 style={{ margin: "16px 0 8px", color: "#2980b9" }}>{student.name}</h4>
          <p style={{ color: "#555", fontSize: "15px" }}>{student.achievement}</p>
        </div>
      ))}
    </div>
  </div>
);

export default HallOfFame;
