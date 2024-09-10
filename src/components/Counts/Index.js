import React from "react";
import Card from "./Card";
import Icon1 from "../../assets/Industry Expertise.png";
import Icon2 from "../../assets/Faster Deliveries.png";
import Icon3 from "../../assets/Premium Quality.png";
import Icon4 from "../../assets/Customer Support.png";
import Icon5 from "../../assets/Flexible Payment Terms.png";

const Counts = () => {
  return (
    <div
      style={{
        backgroundColor: "#3C5D87",
        padding: "5% 2%",
      }}>
      <h2
        style={{
          fontSize: "36px",
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          paddingBottom: "30px",
        }}>
        Why Choose Us?
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "40px",
          marginRight: "40px",
          justifyContent: "space-between",
        }}>
        <Card
          icon={Icon1}
          title="Industry Expertise"
          description="Decades of experience in providing top-tier screen engraving chemicals tailored for precision and durability."
        />
        <Card
          icon={Icon2}
          title="Faster Deliveries"
          description="We work hard to deliver products at your door step within no time. "
        />
        <Card
          icon={Icon3}
          title="Premium Quality"
          description="Our chemicals are rigorously tested to ensure consistent, high-quality results every time."
        />
        <Card
          icon={Icon4}
          title="Customer Support"
          description="Dedicated technical support to help you select the right products and optimize your workflow."
        />
        <Card
          icon={Icon5}
          title="Flexible Payment Terms"
          description="High value for your investment with cost-effective solutions without compromising on quality."
        />
      </div>
    </div>
  );
};

export default Counts;
