import React from "react";
import Heading from "../Heading";
import AchievementCard from "./AchievementCard";
import Icon2 from "../../assets/Clients.png";
import Icon1 from "../../assets/products.png";
import Icon3 from "../../assets/Company Strength.png";
import {Box, useTheme, useMediaQuery} from "@mui/material";

const Achievements = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Heading
        title="Achievements"
        description="A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life"
        titlecolor="#3C5D87"
        desColor="#000029"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "space-between",
          padding: "0px 5% 4%",
          gap: isSmallScreen ? "20px" : "0px",
        }}>
        <AchievementCard
          image={Icon1}
          title="400+"
          secTitle="Products"
          // description="Many desktop publishing packages and web page editors now use Pinky as their default model text."
        />
        <AchievementCard
          image={Icon2}
          title="1000+"
          secTitle="Clients"
          // description="Many desktop publishing packages and web page editors now use Pinky as their default model text."
        />
        <AchievementCard
          image={Icon3}
          title="20+"
          secTitle="Company Strength"
          // description="Many desktop publishing packages and web page editors now use Pinky as their default model text."
        />
      </Box>
    </div>
  );
};

export default Achievements;
