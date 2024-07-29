import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import {Menu as MenuIcon} from "@mui/icons-material";
import React, {useState} from "react";
import {headerTabs} from "../../constants/headers";
import {get} from "lodash";
import {useLocation, useNavigate} from "react-router";
import {Logo} from "../../assets";

const Header = props => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{maxWidth: "100vw", bgcolor: "white"}}>
      <Container
        maxWidth="xl"
        sx={{backgroundColor: "white", color: "black", px: "0px"}}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: {xs: "none", md: "flex", cursor: "pointer"},
            }}
            onClick={() => navigate("/")}>
            <img
              src={Logo}
              alt="Saral Dye Chems"
              loading="lazy"
              style={{height: "36px", marginRight: "16px"}}
            />
            <Typography
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
            </Typography>
          </Box>

          <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
            <Box
              flex={1}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{cursor: "pointer"}}
              onClick={() => navigate("/")}>
              <img
                src={Logo}
                alt="Saral Dye Chems"
                loading="lazy"
                style={{height: "36px", marginRight: "16px"}}
              />
            </Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: "block", md: "none"},
              }}>
              {headerTabs.map(page => (
                <MenuItem
                  key={page.label}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(get(page, "routeTo", location.pathname));
                  }}>
                  <Typography
                    textAlign="center"
                    color={"common.fontPrimary"}
                    fontSize={"16px"}
                    fontWeight={"700"}
                    lineHeight={"21px"}>
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {xs: "none", md: "flex", justifyContent: "flex-end"},
            }}>
            {headerTabs.map(page => {
              const isActive = Boolean(
                location.pathname === get(page, "routeTo", "nil"),
              );
              return (
                <Button
                  key={page.label}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(get(page, "routeTo", location.pathname));
                  }}
                  sx={{
                    my: 2,
                    mx: 6,
                    color: isActive ? "primary" : "common.fontPrimary",
                    borderBottom: isActive ? 2 : 0,
                    borderColor: "secondary.main",
                    borderRadius: "1px",
                    textAlign: "center",
                    fontSize: "16px",
                  }}>
                  <Typography
                    color={isActive ? "primary" : "common.fontPrimary"}
                    fontSize={"14px"}
                    fontWeight={"700"}>
                    {page.label}
                  </Typography>
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
