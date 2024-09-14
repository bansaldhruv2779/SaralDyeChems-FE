import React from "react";
import {ThemeProvider, createTheme} from "@mui/material";
import CountComponent from "../../components/Counts";
import AboutComponent from "../../components/AboutComponent";
import Founder from "../../components/FounderComponent";
import CommonBackground from "../../components/CommonBackground";
import Achievements from "../../components/Achievements";
import Catered from "../../components/Catered";
import ScrollButton from "../../components/ScrollButton";

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
        <AboutComponent />
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
