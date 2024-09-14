import React from "react";
import Header from "../Header";
import {useLocation} from "react-router";
import Footer from "../FooterDesign";
import {Box} from "@mui/material";

export default function Layout({maintenance, children}) {
  const location = useLocation();
  const disableLayout =
    ["/404", "/maintenance"].includes(location.pathname) || maintenance;
  return (
    <div>
      {!disableLayout && <Header />}
      <Box minHeight={"51vh"}>{children}</Box>
      {!disableLayout && <Footer />}
    </div>
  );
}
