import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import {keyframes} from "@emotion/react";
import FlipHeading from "../Flipword/FlipHeading";

const floating = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const Index = () => {
  return (
    <Box sx={{padding: "30px 8%"}}>
      <div id="Aboutus"></div>
      <FlipHeading categoryId="ABOUT   US" />
      <p style={{marginBottom: "30px", color: "#A0A6B0", textAlign: "center"}}>
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
      <Grid container spacing={4} sx={{alignItems: "center"}}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            animation: `${floating} 3s ease-in-out infinite`,
          }}>
          <Box
            component="img"
            src="https://img.freepik.com/free-vector/body-language-concept-illustration_114360-19536.jpg?t=st=1722623057~exp=1722626657~hmac=91b926289b050a86daceabc113c6f088234eafe1a759ec2a8847d5248e39a6f2&w=1480"
            alt="Textile Chemicals"
            sx={{
              width: "100%",
              borderRadius: "15px",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              // color: "#021961",
              color: "#929293",
              marginBottom: "15px",
              // position: "relative",
              paddingBottom: "10px",
              borderBottom: "3px solid #929293",
              // display: "inline-block",
              textTransform: "uppercase",
            }}>
            Leading Textile Chemicals Distributor with Over 36 Years of
            Excellence
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#555",
              marginBottom: "15px",
            }}>
            Saral Dye Chems, founded by Mr. Vipul Kumar Gupta in 1987 at 21, is
            a leading distributor of textile chemicals. Named after his mother,
            the company began trading engraving chemicals and quickly grew,
            becoming an authorized agent of Bluecoat Pvt Ltd. Mr. Vipul&apos;s
            success led to establishing an office in Tilak Bazaar, Delhi, with
            his brother, Mr. Sunit Kumar Gupta, later joining to drive
            expansion.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#555",
              marginBottom: "15px",
            }}>
            Today, Saral operates in Delhi, Panipat, and Ludhiana, serving
            Punjab, Haryana, and international markets. With over 36 years of
            experience, Saral is known for reliability, professionalism, and
            top-quality products.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
