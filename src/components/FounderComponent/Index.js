import {Box, Grid, IconButton, Typography, styled} from "@mui/material";
import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import founderImage from "../../assets/rTkJ7v-man-png-image.png";

const StyleBox = styled(Box)(({theme, isGreen}) => ({
  // width: "250px",
  backgroundColor: "lightblue",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  margin: "0px 8%",
}));

const SingleBox = styled(Box)(({theme, isGreen}) => ({
  // backgroundColor: "white",
  width: "100%",
  margin: "0px  10px 10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  textAlign: "center",
  // height: "90%",
}));

const ImageBox = styled(Box)(({theme, isGreen}) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  margin: "0px 8%",
  width: "100%",
}));

const BottomBoxFounder = styled(Box)(({theme, isMiddle}) => ({
  // width: "250px",
  // display: "flex",
  // flexDirection: "column",÷
  // justifyContent: "space-between",
  // margin: "0px 8%",

  backgroundColor: isMiddle ? "#FFF" : "#EEE",
  // width: "50%",
  width: "100%",
}));

const Index = () => {
  return (
    <Box>
      <StyleBox>
        <SingleBox>
          <ImageBox bgcolor="#EEE" height="300px">
            <img src={founderImage} width="50%" height="100%" />
          </ImageBox>
          <BottomBoxFounder>
            <Typography margin="20px 0">Vipul Kumar Gupta</Typography>
            <Typography margin="20px 0">Founder</Typography>
            <Grid marginBottom="20px" xs={8}>
              <IconButton
                color="buttonBlue"
                sx={{
                  mr: "16px",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}>
                <FacebookTwoToneIcon />
              </IconButton>
              <IconButton
                color="buttonBlue"
                sx={{
                  mr: "16px",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}>
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="buttonBlue"
                sx={{
                  mr: "16px",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}>
                <InstagramIcon />
              </IconButton>
            </Grid>
          </BottomBoxFounder>
        </SingleBox>
        <SingleBox>
          <ImageBox bgcolor="#FFF" height="300px">
            <img src={founderImage} width="50%" height="100%" />
          </ImageBox>
          <BottomBoxFounder isMiddle>
            <Typography margin="20px 0">Sunit Kumar Gupta</Typography>
            <Typography margin="20px 0">Founder</Typography>
            <Grid marginBottom="20px">
              <IconButton
                color="buttonBlue"
                sx={{
                  mr: "16px",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}>
                <FacebookTwoToneIcon />
              </IconButton>
              <IconButton
                color="buttonBlue"
                sx={{
                  mr: "16px",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}>
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="buttonBlue"
                sx={{
                  mr: "16px",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}>
                <InstagramIcon />
              </IconButton>
            </Grid>
          </BottomBoxFounder>
        </SingleBox>
        <SingleBox>
          <ImageBox bgcolor="#EEE" height="300px">
            <img src={founderImage} width="50%" height="100%" />
          </ImageBox>
          <BottomBoxFounder>
            <Typography margin="20px 0">Sunit Kumar Gupta</Typography>
            <Typography margin="20px 0">Founder</Typography>
            <Grid marginBottom="20px">
              <IconButton
                color="buttonBlue"
                sx={{
                  mr: "16px",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}>
                <FacebookTwoToneIcon />
              </IconButton>
              <IconButton
                color="buttonBlue"
                sx={{
                  mr: "16px",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}>
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="buttonBlue"
                sx={{
                  mr: "16px",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}>
                <InstagramIcon />
              </IconButton>
            </Grid>
          </BottomBoxFounder>
        </SingleBox>
      </StyleBox>
    </Box>
  );
};

export default Index;
