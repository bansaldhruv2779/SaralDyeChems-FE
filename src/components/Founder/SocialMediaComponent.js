import {Grid, IconButton} from "@mui/material";
import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialMediaComponent = () => {
  return (
    <Grid
      marginBottom="20px"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <IconButton
        color="buttonBlue"
        sx={{
          mr: "8px",
          ml: "8px",
          "&:hover": {
            color: "secondary.main",
          },
        }}>
        <FacebookTwoToneIcon />
      </IconButton>
      <IconButton
        color="buttonBlue"
        sx={{
          mr: "8px",
          ml: "8px",
          "&:hover": {
            color: "secondary.main",
          },
        }}>
        <TwitterIcon />
      </IconButton>
      <IconButton
        color="buttonBlue"
        sx={{
          mr: "8px",
          ml: "8px",
          "&:hover": {
            color: "secondary.main",
          },
        }}>
        <InstagramIcon />
      </IconButton>
    </Grid>
  );
};

export default SocialMediaComponent;
