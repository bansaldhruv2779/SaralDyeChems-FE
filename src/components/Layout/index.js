import React from "react";
import Header from "../Header";
import {useLocation} from "react-router";
import Footer from "../FooterDesign";
// import Footer from "../Footer";
import {Box} from "@mui/material";

export default function Layout({children}) {
  const location = useLocation();
  const disableLayout = ["/404"].includes(location.pathname);
  return (
    <div>
      {!disableLayout && <Header />}
      <Box minHeight={"51vh"}>{children}</Box>
      {!disableLayout && <Footer />}
    </div>
  );
}
