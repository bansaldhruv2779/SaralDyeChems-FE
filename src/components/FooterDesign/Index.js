import {
  Box,
  Button,
  Grid,
  Typography,
  styled,
  IconButton,
  Link as MuiLink,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {FooterBg, LogoImage} from "../../assets";
import {useNavigate} from "react-router";

const FooterLink = styled(Button)`
  font-size: 16px;
  margin-top: 12px;
  display: block;
`;

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

const Footer = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const cities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Surat",
    "Kanpur",
    "Lucknow",
    "Nagpur",
    "Indore",
    "Bhopal",
    "Visakhapatnam",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
  ];

  const handleNavigation = path => {
    navigate(path);
  };

  return (
    <Box
      mt="50px"
      minHeight="200px"
      p="30px 20px"
      position="sticky"
      color="common.white"
      style={{backgroundImage: `url(${FooterBg})`}}>
      <ThemeProvider theme={theme}>
        <Grid container direction="column" spacing={2}>
          {/* <Grid item>
            <img
              src={LogoImage}
              alt="Saral Dye Chems"
              loading="lazy"
              style={{height: "120px", width: "120px"}}
            />
          </Grid> */}

          <Grid item>
            <Box
              display="flex"
              flexDirection={isSmallScreen ? "column" : "row"}
              justifyContent="space-evenly"
              marginBottom="40px"
              alignItems="flex-start">
              <Typography fontSize="14px" fontWeight="bold">
                TOP LOCATION
              </Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                gap={1}
                sx={{width: isSmallScreen ? "100%" : "50%"}}>
                {cities.map((city, index) => (
                  <React.Fragment key={index}>
                    <Typography fontWeight="bold" fontSize="13px">
                      {city}
                    </Typography>
                    {index < cities.length - 1 && (
                      <Typography fontSize="14px">•</Typography>
                    )}
                  </React.Fragment>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item>
            <Box
              display="flex"
              flexDirection={isSmallScreen ? "column" : "row"}
              justifyContent="space-evenly"
              marginBottom="40px"
              alignItems="flex-start">
              <Typography fontSize="14px" fontWeight="bold">
                TOP PRODUCTS
              </Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                gap={1}
                sx={{width: isSmallScreen ? "100%" : "50%"}}>
                {cities.map((city, index) => (
                  <React.Fragment key={index}>
                    <Typography fontWeight="bold" fontSize="13px">
                      {city}
                    </Typography>
                    {index < cities.length - 1 && (
                      <Typography fontSize="14px">•</Typography>
                    )}
                  </React.Fragment>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item>
            <Box
              display="flex"
              flexDirection={isSmallScreen ? "column" : "row"}
              justifyContent="space-evenly"
              marginBottom="40px"
              alignItems="flex-start">
              <Typography fontSize="14px" fontWeight="bold">
                HEAD OFFICE
              </Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                sx={{width: isSmallScreen ? "100%" : "50%"}}
                gap={1}>
                <Typography fontWeight="bold" fontSize="13px">
                  402, P-2, Best Business Park, Netaji Subhash Place, Pitampura,
                  (110034)
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="0 14%">
              <Box
                display="flex"
                flexDirection={isSmallScreen ? "column" : "row"}
                justifyContent="space-between"
                alignItems="center"
                width="100%">
                {[
                  {name: "HOME", path: "/"},
                  {name: "PRODUCTS", path: "/products"},
                  {name: "TESTIMONIAL", path: "/testimonial"},
                  {name: "ABOUT US", path: "/about"},
                  {name: "CONTACT US", path: "/contact"},
                ].map((item, index) => (
                  <MuiLink
                    key={index}
                    onClick={() => handleNavigation(item.path)}
                    underline="none"
                    sx={{
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      fontSize: "15px",
                      margin: isSmallScreen ? "10px 0" : "0 5px",
                      cursor: "pointer",
                      color: "inherit",
                      position: "relative",
                      paddingBottom: "5px",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "0",

                        height: "2px",
                        bottom: "0",
                        left: "50%",
                        backgroundColor: "currentColor",
                        transition: "width 0.3s ease, left 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "100%",
                        left: "0",
                      },
                    }}>
                    {item.name}
                  </MuiLink>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "40px",
                justifyContent: "center",
              }}>
              <IconButton
                color="buttonWhite"
                sx={{
                  mr: "16px",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}>
                <FacebookTwoToneIcon />
              </IconButton>
              <IconButton
                color="buttonWhite"
                sx={{
                  mr: "16px",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}>
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="buttonWhite"
                sx={{
                  mr: "16px",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default Footer;
