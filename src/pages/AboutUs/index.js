import React, {useState, useEffect} from "react";
import {
  Box,
  Grid,
  IconButton,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import CountComponent from "../../components/Counts/Index";
import AboutComponent from "../../components/AboutComponent/Index";
import Founder from "../../components/FounderComponent/Founder";

const AboutUs = () => {
  const theme = createTheme({
    typography: {
      // Tell Material UI what the font-size on the html element is.
      fontSize: "18px",
      fontFamily: "poppins, sans-seriff",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          padding="0 8%"
          display="flex"
          alignItems="center"
          height="200px"
          bgcolor="#F0F0F0">
          <Typography fontSize="55px" color="#021961" fontWeight="700">
            About Us
          </Typography>
        </Grid>
      </ThemeProvider>
      <AboutComponent />
      <CountComponent />
      <Founder />
    </>
  );
};

export default AboutUs;
