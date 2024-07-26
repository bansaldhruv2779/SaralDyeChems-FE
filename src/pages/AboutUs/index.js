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
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import founderImage from "../../assets/rTkJ7v-man-png-image.png";

const StyledBox = styled(Box)(({theme, isGreen}) => ({
  backgroundColor: isGreen ? "#021961" : "white",
  color: isGreen ? "white" : "black",
  display: "flex",
  // alignItems: "left",
  flexDirection: "column",
  // justifyContent: "center",
  // height: "230px",
  width: "250px",
  // borderRadius: "50%",

  // boxShadow: "10px 10px 10px lightblue",
  // boxShadow: isGreen ? theme.shadows[5] : "none",
  // border: isGreen ? "none" : `2px solid ${theme.palette.grey[300]}`, // Light border for non-green boxes
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

const StyleBox = styled(Box)(({theme, isGreen}) => ({
  // width: "250px",
  backgroundColor: "lightblue",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  margin: "0px 8%",
}));
const ImageBox = styled(Box)(({theme, isGreen}) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  margin: "0px 8%",
  width: "100%",
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

const AboutUs = () => {
  const [products, setProducts] = useState(0);
  const [clients, setClients] = useState(0);
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    countUp(setProducts, 400, 3000);
    countUp(setClients, 1000, 3000);
    countUp(setStrength, 20, 3000);
  }, []);

  const countUp = (setter, endValue, duration) => {
    const increment = endValue / (duration / 100);
    let currentValue = 0;

    const timer = setInterval(() => {
      currentValue += increment;
      setter(Math.ceil(currentValue));

      if (currentValue >= endValue) {
        clearInterval(timer);
        setter(endValue);
      }
    }, 100); // Update every 100ms
  };

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
        <Grid
          padding="0 8%"
          display="flex"
          alignItems="center"
          height="200px"
          bgcolor="#F0F0F0">
          <Typography fontSize="55px" color="#021961" fontWeight="700">
            About Us
          </Typography>
        </Grid>
      </ThemeProvider>
      <Box sx={{padding: "30px 8%"}}>
        <Typography fontSize="18px" color="#B5C0D0" fontWeight="500">
          Our Journey
        </Typography>
        <Typography color="#021961" fontSize="24px" fontWeight="700">
          Engraving Lifelines since 1987
        </Typography>
        <Grid container spacing={4} sx={{marginTop: 2}}>
          <Grid item xs={12} md={6}>
            <Typography fontSize="16px" color="#021961" lineHeight="1.5">
              Saral Dye Chems is a leading textile chemicals distributor
              business that was founded by Mr Vipul Kumar Gupta in 1987. With a
              passion for entrepreneurship, Mr Vipul started the company at the
              age of 21 and named it after his mother, symbolizing the love and
              dedication towards his family. Initially, the company traded
              engraving chemicals and soon became an authorized agent of
              Bluecoat Pvt Ltd.
            </Typography>
            <Typography
              fontSize="16px"
              color="#021961"
              lineHeight="1.5"
              sx={{marginTop: 2}}>
              Within a few years, Saral had established a name for itself in the
              textile chemicals industry, which enabled Mr Vipul to purchase his
              own office in Tilak Bazaar - one of the biggest chemical trading
              markets in India. The company&#39;s growth was phenomenal, and
              soon Mr Sunit Kumar Gupta, Mr Vipul&#39;s younger brother, joined
              the business and played a pivotal role in the company&#39;s
              success. His contribution helped to further expand the
              company&#39;s reach and take it to new heights.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontSize="16px" color="#021961" lineHeight="1.5">
              Today, Saral is a well-known name in the textile chemicals
              industry, with offices in Delhi, Panipat, and Ludhiana. Our
              offices cater to all the markets of Punjab, Haryana and even
              international markets like Nepal. Saral takes pride in offering a
              wide array of screen making materials, flat bed chemicals, rotary
              chemicals, and many more.
            </Typography>
            <Typography
              fontSize="16px"
              color="#021961"
              lineHeight="1.5"
              sx={{marginTop: 2}}>
              Our success is attributed to the dedication of our team, which
              works hard to ensure that we deliver quality products and services
              to our clients. With 36+ years of experience in the industry, we
              have built a strong reputation for our reliability,
              professionalism, and exceptional customer service.
            </Typography>
            <Typography
              fontSize="16px"
              color="#021961"
              lineHeight="1.5"
              sx={{marginTop: 2}}>
              At Saral, we are committed to providing our clients with the best
              products, service, and experience. We strive to stay ahead of the
              curve by continuously innovating and expanding our range of
              products and services. We look forward to serving you and your
              business with our quality textile chemicals.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          // padding: "20px 2%",
          display: "flex",
          margin: "60px 0",
          justifyContent: "center",
          width: "100%",
        }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={4} container justifyContent="center">
            <StyledBox>
              <CategoryIcon
                sx={{
                  fontSize: 35,
                  color: "#021961",
                  padding: "13px",
                  background: "white",
                  transform: "rotate(7deg)",
                  borderRadius: "4px",
                  marginBottom: "20px",
                  boxShadow: "2px 2px 16px 2px lightgrey",
                }}
              />
              <Typography variant="h2" color="#021961" fontWeight="bold">
                {products}+
              </Typography>
              <Typography fontSize="20px" fontWeight="500" color="#536493">
                Products
              </Typography>
              <Typography
                fontSize="12px"
                color="#758694"
                width="230px"
                fontWeight="500">
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text.
              </Typography>
            </StyledBox>
          </Grid>
          <Grid item xs={12} sm={4} container justifyContent="center">
            <StyledBox>
              <GroupIcon
                sx={{
                  fontSize: 35,
                  color: "#021961",
                  padding: "13px",
                  background: "white",
                  marginBottom: "20px",
                  borderRadius: "4px",
                  transform: "rotate(-7deg)",
                  boxShadow: "2px 2px 16px 2px lightgrey",
                }}
              />
              <Typography variant="h2" color="#021961" fontWeight="bold">
                {clients}+
              </Typography>
              <Typography fontSize="20px" fontWeight="500" color="#536493">
                Clients
              </Typography>
              <Typography
                fontSize="12px"
                width="230px"
                color="#758694"
                fontWeight="500">
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text.
              </Typography>
            </StyledBox>
          </Grid>
          <Grid
            item
            xs={12}
            // width="250px"
            sm={4}
            container
            justifyContent="center">
            <StyledBox>
              <EmojiEventsIcon
                sx={{
                  fontSize: 35,
                  color: "#021961",
                  padding: "13px",
                  marginBottom: "20px",
                  background: "white",
                  borderRadius: "4px",
                  transform: "rotate(7deg)",

                  boxShadow: "2px 2px 16px 2px lightgrey",
                }}
              />
              <Typography variant="h2" color="#021961" fontWeight="bold">
                {strength}+
              </Typography>
              <Typography fontSize="20px" fontWeight="500" color="#536493">
                Company Strength
              </Typography>
              <Typography
                fontSize="12px"
                width="230px"
                color="#758694"
                fontWeight="500">
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text.
              </Typography>
            </StyledBox>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <StyleBox>
          <SingleBox>
            <ImageBox bgcolor="#EEE" height="300px">
              <img src={founderImage} width="50%" height="100%" />
            </ImageBox>
            <BottomBoxFounder>
              <Typography margin="20px 0">Vipul Kumar Gupta</Typography>
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
    </>
  );
};

export default AboutUs;
