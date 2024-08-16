import {
  Box,
  Grid,
  Typography,
  IconButton,
  Link as MuiLink,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import {ThemeProvider} from "@mui/material/styles";
import {FooterBg} from "../../assets";
import {useNavigate, useLocation} from "react-router";
import {headerTabs} from "../../constants/headers";
import {get} from "lodash";
import {footerLogo} from "../../assets";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const cities = [
    "Punjab",
    "Himachal Pradesh",
    "Haryana",
    "UP",
    "West Bengal",
    "Orissa",
    "Tamil Nadu",
    "Gujarat",
    "Rajasthan",
    "Madhya Pradesh",
    "Andhra Pradesh",
  ];

  const conturies = ["Nepal", "South Africa"];

  return (
    <Box
      mt="50px"
      minHeight="200px"
      p="30px 20px"
      position="sticky"
      color="common.white"
      style={{backgroundImage: `url(${FooterBg})`}}>
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={2}
          direction={isSmallScreen ? "column" : "row"}>
          <Grid item xs={4}>
            <img className="h-96" src={footerLogo} alt="loading..." />
          </Grid>
          <Grid item container direction="column" spacing={2} xs={8}>
            <Grid item>
              <Box
                display="flex"
                flexDirection={isSmallScreen ? "column" : "row"}
                justifyContent="space-evenly"
                marginBottom="20px"
                alignItems="flex-start">
                <Typography fontSize="14px" fontWeight="bold">
                  INDIA LOCATIONS
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
                marginBottom="20px"
                alignItems="flex-start">
                <Typography fontSize="14px" fontWeight="bold">
                  INTERNATIONAL LOCATIONS
                </Typography>
                <Box
                  display="flex"
                  flexWrap="wrap"
                  gap={1}
                  sx={{width: isSmallScreen ? "100%" : "50%"}}>
                  {conturies.map((contury, index) => (
                    <React.Fragment key={index}>
                      <Typography fontWeight="bold" fontSize="13px">
                        {contury}
                      </Typography>
                      {index < conturies.length - 1 && (
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
                marginBottom="20px"
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
                marginBottom="20px"
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
                    402, P-2, Best Business Park, Netaji Subhash Place,
                    Pitampura, (110034)
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
                  {headerTabs.map((item, index) => (
                    <MuiLink
                      key={index}
                      onClick={() =>
                        navigate(get(item, "routeTo", location.pathname))
                      }
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
                      {item.label}
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
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default Footer;
