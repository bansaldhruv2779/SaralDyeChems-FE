import React from "react";
import {Box} from "@mui/material";
import loader from "../../assets/loader.gif";

export default function Loader() {
  return (
    <Box className="flex items-center">
      <img className="object-fill h-32 w-48" src={loader} alt="loading..." />
    </Box>
  );
}
