import React from "react";
import {Grid, Box, styled} from "@mui/material";
import {Counts, AboutComponent, Founder} from "../../components";
import {BackgroundBoxesDemo} from "../../components/Background/Background";

const BackgroundSection = styled(Box)(({theme}) => ({
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)", // Paintbrush effect
  color: "#fff",
  display: "flex",
  alignItems: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Light black overlay
    clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)", // Match the image clipping
    zIndex: 1,
  },
  zIndex: 2,
}));

const AboutUs = () => {
  return (
    <>
      <Grid
        container
        style={{backgroundColor: "white", justifyContent: "space-around"}}>
        <Grid item xs={12}>
          <BackgroundSection>
            <BackgroundBoxesDemo categoryName={"ABOUT   US"} />
          </BackgroundSection>
        </Grid>
      </Grid>
      <AboutComponent showHeading={false} />
      <Counts />
      <Founder />
    </>
  );
};

export default AboutUs;
