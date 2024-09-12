import React from "react";

const ImageRound = ({image, title}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <img
        src={image}
        style={{width: "80px", height: "80px", borderRadius: "50px"}}
        alt={title}
      />
      <p style={{paddingTop: "8px", fontSize: "13px"}}>{title}</p>
    </div>
  );
};

export default ImageRound;
