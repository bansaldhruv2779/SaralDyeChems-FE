import {Fab, styled} from "@mui/material";
import React, {useEffect, useState} from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollButton = styled(Fab)(({theme}) => ({
  position: "fixed",
  bottom: "30px",
  right: "30px",
  display: "none",
  zIndex: 1000,
  backgroundColor: "#3C5D87",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#2c4a72",
  },
}));
const Index = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <div>
      <ScrollButton
        onClick={scrollToTop}
        style={{display: showButton ? "inline-flex" : "none"}}>
        <ArrowUpwardIcon />
      </ScrollButton>
    </div>
  );
};

export default Index;
