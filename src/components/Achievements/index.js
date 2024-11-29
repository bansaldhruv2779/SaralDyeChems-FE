import React from "react";
import Heading from "../Heading";
import AchievementCard from "./AchievementCard";
import {Box, useTheme, useMediaQuery} from "@mui/material";

const Achievements = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Heading
        title="Achievements"
        description=""
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
          image="https://ik.imagekit.io/u51majcf2/SaralDyeChems/products.png?updatedAt=1726064872104"
          title="400+"
          secTitle="Products"
          description=""
        />
        <AchievementCard
          image="https://ik.imagekit.io/u51majcf2/SaralDyeChems/Clients.png?updatedAt=1726064863846"
          title="1000+"
          secTitle="Clients"
          description=""
        />
        <AchievementCard
          image="https://ik.imagekit.io/u51majcf2/SaralDyeChems/Company%20Strength.png?updatedAt=1726064864738"
          title="20+"
          secTitle="Company Strength"
          description=""
        />
      </Box>
    </div>
  );
};

export default Achievements;
