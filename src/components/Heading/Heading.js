import React from "react";

const Heading = ({title, description, titlecolor, desColor}) => {
  return (
    <div style={{paddingTop: "50px"}}>
      <h2
        style={{
          fontSize: "34px",
          fontWeight: "bold",
          textAlign: "center",
          color: titlecolor,
        }}>
        {title}
      </h2>
      <p
        style={{
          fontSize: "13px",
          textAlign: "center",
          marginBottom: "30px",
          color: desColor,
        }}>
        {description}
      </p>
    </div>
  );
};

export default Heading;
