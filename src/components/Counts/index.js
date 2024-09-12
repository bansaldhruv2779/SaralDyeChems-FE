import React from "react";
import Card from "./Card";

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
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}>
        <Card
          icon="https://ik.imagekit.io/u51majcf2/SaralDyeChems/Industry%20Expertise.png"
          title="Industry Expertise"
          description="Decades of experience in providing top-tier screen engraving chemicals tailored for precision and durability."
        />
        <Card
          icon="https://ik.imagekit.io/u51majcf2/SaralDyeChems/Faster%20Deliveries.png"
          title="Faster Deliveries"
          description="We work hard to deliver products at your door step within no time. "
        />
        <Card
          icon="https://ik.imagekit.io/u51majcf2/SaralDyeChems/Premium%20Quality.png"
          title="Premium Quality"
          description="Our chemicals are rigorously tested to ensure consistent, high-quality results every time."
        />
        <Card
          icon="https://ik.imagekit.io/u51majcf2/SaralDyeChems/Customer%20Support.png"
          title="Customer Support"
          description="Dedicated technical support to help you select the right products and optimize your workflow."
        />
        <Card
          icon="https://ik.imagekit.io/u51majcf2/SaralDyeChems/Flexible%20Payment%20Terms.png"
          title="Flexible Payment Terms"
          description="High value for your investment with cost-effective solutions without compromising on quality."
        />
      </div>
    </div>
  );
};

export default Counts;
