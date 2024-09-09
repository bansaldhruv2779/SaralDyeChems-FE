import React from "react";

const ImageHex = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90%",
      }}>
      <img
        src={props.image}
        style={{
          width: "100%",
          height: "100%",
          WebkitClipPath:
            "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
          clipPath:
            "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
        }}
        alt={props.alt}
      />
    </div>
  );
};

export default ImageHex;
