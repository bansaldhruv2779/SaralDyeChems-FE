import React from "react";
import {Box, Typography, styled} from "@mui/material";
import Founder1 from "../../assets/Founder1.jpg";
import Founder2 from "../../assets/Founder2.jpg";
import Heading from "../Heading";

// Styled components
const Container = styled(Box)(() => ({
  backgroundImage:
    "url(https://ik.imagekit.io/u51majcf2/SaralDyeChems/bgb.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "40px 8%",
  textAlign: "left",
}));

const FounderWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  flexWrap: "wrap",
}));

const FounderCard = styled(Box)(() => ({
  width: "300px", // Increased width
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  textAlign: "left",
  transition: "transform 0.3s ease",
}));

const FounderImage = styled("img")({
  width: "100%",
  height: "250px", // Increased height
  objectFit: "cover",
});

const FounderInfo = styled(Box)({
  padding: "20px",
});

const FounderName = styled(Typography)({
  fontSize: "1rem", // Increased font size
  fontWeight: "500",
  color: "#333333",
});

const FounderTitle = styled(Typography)({
  fontSize: "0.8rem", // Slightly increased font size
  color: "#3D3D3D",
});

const founders = [
  {
    name: "Vipul Kumar Gupta",
    title: "Founder",
    image: Founder1,
  },
  {
    name: "Sunit Kumar Gupta",
    title: "Founder",
    image: Founder2,
  },
];

const Founder = () => {
  return (
    <Container>
      <Heading
        title="Our Founders"
        titlecolor="#FFF"
        desColor="#FFF"
        description="Engraving Lifelines Since 1987"
      />
      <FounderWrapper>
        {founders.map((founder, index) => (
          <FounderCard key={index}>
            <FounderImage src={founder.image} alt={founder.name} />
            <FounderInfo>
              <FounderName>{founder.name}</FounderName>
              <FounderTitle>{founder.title}</FounderTitle>
            </FounderInfo>
          </FounderCard>
        ))}
      </FounderWrapper>
    </Container>
  );
};

export default Founder;
