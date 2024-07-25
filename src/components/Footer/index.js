import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import {FooterBg, Logo} from "../../assets";
import {headerTabs} from "../../constants/headers";
import {get} from "lodash";
import {useLocation, useNavigate} from "react-router";

const FooterLink = styled(Button)`
  font-size: 16px;
  margin-top: 12px;
  display: block;
`;

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box
      mt="50px"
      minHeight="200px"
      p="30px 20px"
      position="sticky"
      color="common.white"
      style={{backgroundImage: `url(${FooterBg})`}}>
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: "1480px",
          marginX: "auto",
        }}>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
            alignItems: "center",
          }}>
          <img
            src={Logo}
            alt="Saral Dye Chems"
            loading="lazy"
            style={{height: "120px", width: "120px"}}
          />
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "1px",
              color: "inherit",
              textDecoration: "none",
              flex: "1",
            }}>
            Saral Dye Chems
          </Typography> */}
        </Grid>
        <Grid item xs={12} sm={3} sx={{}}>
          <Typography variant="h6" fontSize={"18px"} color="common.white">
            SARAL DYE CHEMS
          </Typography>
          <Typography
            variant="subtitle2"
            fontSize={"16px"}
            textAlign={"left"}
            fontWeight={"500"}
            lineHeight={"22px"}
            color="common.white">
            Wholesale suppliers of advanced technology screen printing and
            textile chemicals.
          </Typography>
          <Typography
            variant="h6"
            fontSize={"18px"}
            color="common.white"
            mt="12px">
            HEAD OFFICE :{" "}
            <Typography variant="subtitle2" fontSize={"14px"} fontWeight={500}>
              402, P-2, Best Business Park, Netaji Subhash Place, Pitampura,
              Delhi &#x28;110034&#x29;
            </Typography>
            <Link
              href="tel:+919810024522"
              color="buttonWhite.main"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "secondary.main",
                },
              }}>
              <Typography
                variant="subtitle2"
                fontSize={"16px"}
                fontWeight={600}
                mt={"10px"}>
                &#x28;+91&#x29; 9810024522
              </Typography>
            </Link>
            <Link
              href="tel:+9810166261"
              color="buttonWhite.main"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "secondary.main",
                },
              }}>
              <Typography
                variant="subtitle2"
                fontSize={"16px"}
                fontWeight={600}>
                &#x28;+91&#x29; 9810166261
              </Typography>
            </Link>
            <Link
              href="mailto:saraldyes@gmail.com"
              color="buttonWhite.main"
              sx={{
                textDecoration: "none",
                "&:hover": {
                  color: "secondary.main",
                },
              }}>
              <Typography
                variant="subtitle2"
                fontSize={"16px"}
                fontWeight={600}>
                saraldyes@gmail.com
              </Typography>
            </Link>
          </Typography>
          <Box
            sx={{
              display: "flex",
              marginTop: "10px",
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
        <Grid item xs={12} sm={4} lg={4} sx={{}}></Grid>
        <Grid
          item
          xs={12}
          sm={2}
          lg={2}
          sx={{
            display: {xs: "none", sm: "flex"},
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Typography
            variant="h4"
            fontSize={"22px"}
            fontWeight={700}
            color="common.white">
            Explore
          </Typography>
          {headerTabs.map(page => {
            return (
              <FooterLink
                key={page.label}
                variant="text"
                color="buttonWhite"
                onClick={() =>
                  navigate(get(page, "routeTo", location.pathname))
                }
                sx={{
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}>
                {page.label}
              </FooterLink>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};


export default Footer;
