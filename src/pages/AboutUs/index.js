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
import CommonBackground from "../../components/CommonBackground/Index";
import Achievements from "../../components/Achievements/Index";
import Catered from "./Catered";
import ScrollButton from "../../components/TopButton/Index";

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
        <CommonBackground
          title="About Us"
          arrow={true}
          mainRoute="Home"
          childRoute="About Us"
        />
        <AboutComponent lastParagraph={true} />
        <CountComponent />
        <Catered />
        <Founder />
        <Achievements />
        <ScrollButton />
      </ThemeProvider>
    </>
  );
};

export default AboutUs;
