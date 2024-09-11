import React, {useState, useEffect} from "react";
import {Box, Typography, useTheme, useMediaQuery} from "@mui/material";

const AchievementCard = ({image, title, secTitle, description}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // State to hold the current count
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    const targetCount = parseInt(title.replace(/\D/g, "")); // Extract number from title, e.g., "400+" -> 400
    const duration = 5000; // 5 seconds
    const interval = 50; // Update every 50ms for smoother animation
    const increment = targetCount / (duration / interval); // Amount to increment by each step

    const counter = setInterval(() => {
      setCurrentCount(prevCount => {
        if (prevCount + increment >= targetCount) {
          clearInterval(counter); // Stop the interval when target is reached
          return targetCount;
        }
        return prevCount + increment;
      });
    }, interval);

    return () => clearInterval(counter); // Cleanup on component unmount
  }, [title]);

  return (
    <Box
      sx={{
        borderRadius: "10px",
        padding: "20px",
        width: isSmallScreen ? "100%" : "33%",
        backgroundColor: "#FFF",
        margin: isSmallScreen ? "10px 0" : "0px 10px",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
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
            {Math.floor(currentCount)}+
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
