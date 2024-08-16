import {Box, Grid, Typography, styled} from "@mui/material";
import React, {useEffect, useState} from "react";
import CategoryIcon from "@mui/icons-material/Category";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FlipHeading from "../Flipword/FlipHeading";

const StyledBox = styled(Box)(({theme}) => ({
  backgroundColor: "white",
  color: "black",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  borderRadius: "10px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  },
}));

const Counts = () => {
  const [products, setProducts] = useState(0);
  const [clients, setClients] = useState(0);
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    countUp(setProducts, 400, 3000);
    countUp(setClients, 1000, 3000);
    countUp(setStrength, 20, 3000);
  }, []);

  const countUp = (setter, endValue, duration) => {
    const increment = endValue / (duration / 100);
    let currentValue = 0;

    const timer = setInterval(() => {
      currentValue += increment;
      setter(Math.ceil(currentValue));

      if (currentValue >= endValue) {
        clearInterval(timer);
        setter(endValue);
      }
    }, 100); // Update every 100ms
  };

  return (
    <Box sx={{padding: "30px 8%"}}>
      <FlipHeading word="Achievements" />
      <p
        style={{
          marginBottom: "30px",
          color: "#A0A6B0",
          textAlign: "center",
        }}>
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
      <Box
        sx={{
          display: "flex",
          margin: "60px 0",
          justifyContent: "center",
          width: "100%",
        }}>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={4} container justifyContent="center">
            <StyledBox>
              <CategoryIcon
                sx={{
                  fontSize: 35,
                  color: "#021961",
                  padding: "13px",
                  background: "white",
                  transform: "rotate(7deg)",
                  borderRadius: "4px",
                  marginBottom: "20px",
                  boxShadow: "2px 2px 16px 2px lightgrey",
                }}
              />
              <Typography variant="h2" color="#021961" fontWeight="bold">
                {products}+
              </Typography>
              <Typography fontSize="20px" fontWeight="500" color="#536493">
                Products
              </Typography>
              <Typography
                fontSize="12px"
                color="#758694"
                width="230px"
                fontWeight="500">
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text.
              </Typography>
            </StyledBox>
          </Grid>
          <Grid item xs={12} sm={4} container justifyContent="center">
            <StyledBox>
              <GroupIcon
                sx={{
                  fontSize: 35,
                  color: "#021961",
                  padding: "13px",
                  background: "white",
                  marginBottom: "20px",
                  borderRadius: "4px",
                  transform: "rotate(-7deg)",
                  boxShadow: "2px 2px 16px 2px lightgrey",
                }}
              />
              <Typography variant="h2" color="#021961" fontWeight="bold">
                {clients}+
              </Typography>
              <Typography fontSize="20px" fontWeight="500" color="#536493">
                Clients
              </Typography>
              <Typography
                fontSize="12px"
                width="230px"
                color="#758694"
                fontWeight="500">
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text.
              </Typography>
            </StyledBox>
          </Grid>
          <Grid item xs={12} sm={4} container justifyContent="center">
            <StyledBox>
              <EmojiEventsIcon
                sx={{
                  fontSize: 35,
                  color: "#021961",
                  padding: "13px",
                  marginBottom: "20px",
                  background: "white",
                  borderRadius: "4px",
                  transform: "rotate(7deg)",
                  boxShadow: "2px 2px 16px 2px lightgrey",
                }}
              />
              <Typography variant="h2" color="#021961" fontWeight="bold">
                {strength}+
              </Typography>
              <Typography fontSize="20px" fontWeight="500" color="#536493">
                Company Strength
              </Typography>
              <Typography
                fontSize="12px"
                width="230px"
                color="#758694"
                fontWeight="500">
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text.
              </Typography>
            </StyledBox>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Counts;
