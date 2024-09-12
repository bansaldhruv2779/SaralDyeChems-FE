import React from "react";
import "./Card.css";

const Card = ({icon, title, description}) => {
  return (
    <div
      style={{
        display: "flex",
        borderRadius: "8px",
        height: "220px",
        flexDirection: "column",
        margin: "5px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
      className="card-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#D3DAF9",
          borderRadius: "10px",
        }}>
        <img src={icon} style={{width: "28px"}} alt={icon} />
      </div>
      <h2
        style={{
          color: "#3C5D87",
          fontWeight: "bold",
          paddingTop: "8px",
          fontSize: "20px",
        }}>
        {title}
      </h2>
      <p
        style={{
          fontSize: "13px",
          height: "70px",
          textAlign: "center",
          padding: "10px 10px",
        }}>
        {description}
      </p>
    </div>
  );
};

export default Card;
