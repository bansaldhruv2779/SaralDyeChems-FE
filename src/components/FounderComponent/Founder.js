import React, {useState} from "react";
import {
  Box,
  Typography,
  Button,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SocialMediaComponent from "./SocialMediaComponent";
import Founder1 from "../../constants/Founder1.JPG";
import Founder2 from "../../constants/Founder2.JPG";

const FounderBox = styled(Box)(({theme}) => ({
  width: 250,
  margin: "20px",
  textAlign: "center",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: theme.shadows[5],
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    margin: "10px 2%",
  },
}));

const FounderImage = styled("img")({
  width: 200,
  height: 200,
  margin: "0 auto",
  borderRadius: "50%",
});

const StyledContainer = styled(Box)(({theme}) => ({
  margin: "20px 8%",
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    margin: "20px 2%",
  },
}));

const LeftSection = styled(Box)(({theme}) => ({
  padding: "60px 20px",
  borderRadius: "10px",
  width: "40%",
  color: "#FFF",
  textAlign: "center",
  backgroundImage:
    "url('https://img.freepik.com/free-photo/blue-toned-paper-sheets-with-copy-space_23-2148320450.jpg?t=st=1722664031~exp=1722667631~hmac=2532df60f7103e98950c6a3693f8dac937a2f7ab9986da089a8720789911f93a&w=2000')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    marginBottom: "20px",
    padding: "30px 10px",
    // marginLeft: "30px",
  },
}));

const RightSection = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  padding: "40px",
  borderRadius: "10px",
  width: "55%",
  transition: "opacity 0.3s ease-in-out",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "10px",
  },
}));

const FounderButton = styled(Button)(({theme}) => ({
  margin: "10px 0",
  backgroundColor: "#FFF",
  color: "#7FA1C3",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#555",
  },
}));

const founders = [
  {
    name: "Vipul Kumar Gupta",
    title: "Founder",
    image: Founder1,
  },
  {
    name: "Sumit Kumar Gupta",
    title: "Founder",
    image: Founder2,
  },
];

const Founder = () => {
  const [selectedFounder, setSelectedFounder] = useState(founders[0]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <StyledContainer>
      <LeftSection>
        <Typography
          variant="h3"
          component="h2"
          fontWeight={600}
          color="#021961">
          OUR FOUNDERS
        </Typography>
        <Typography fontStyle="italic" mb={3} color="#021961">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        {founders.map((founder, index) => (
          <FounderButton
            key={index}
            style={{marginRight: isMobile ? 0 : 10}}
            onClick={() => setSelectedFounder(founder)}>
            {founder.name}
          </FounderButton>
        ))}
      </LeftSection>
      <RightSection>
        <FounderBox>
          <FounderImage
            src={selectedFounder.image}
            alt={selectedFounder.name}
          />
          <Typography variant="h6" fontWeight="bold">
            {selectedFounder.name}
          </Typography>
          <Typography>{selectedFounder.title}</Typography>
          <SocialMediaComponent />
        </FounderBox>
      </RightSection>
    </StyledContainer>
  );
};

export default Founder;
