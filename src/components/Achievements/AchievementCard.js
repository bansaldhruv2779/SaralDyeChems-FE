import React from "react";

import {Box, Typography, useTheme, useMediaQuery} from "@mui/material";

const AchievementCard = ({image, title, secTitle, description}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        borderRadius: "10px",
        padding: "20px",
        width: isSmallScreen ? "100%" : "33%",
        backgroundColor: "#FFF",
        margin: isSmallScreen ? "10px 0" : "0px 10px",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)", // Box shadow added here
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}>
        <div
          style={{
            padding: "10px",
            borderRadius: "8px",
            width: "80px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            height: "80px",
            backgroundColor: "#F5F7FB",
          }}>
          <Box
            sx={{
              width: "40px",
              height: "40px",
              flexShrink: 0,
            }}>
            <img
              src={image}
              style={{width: "100%", height: "100%"}}
              alt="icon"
            />
          </Box>
        </div>
        <Box sx={{marginLeft: "20px"}}>
          <Typography
            variant="h2"
            sx={{fontSize: "32px", fontWeight: "600", color: "#3C5D87"}}>
            {title}
          </Typography>
          <Typography sx={{color: "#3C5D86", fontSize: "18px"}}>
            {secTitle}
          </Typography>
        </Box>
      </Box>
      <Box sx={{marginTop: "8px"}}>
        <Typography sx={{fontSize: "14px", fontWeight: "300"}}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default AchievementCard;
