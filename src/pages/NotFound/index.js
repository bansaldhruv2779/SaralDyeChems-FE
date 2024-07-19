import React from "react";
import {Box, Button, Typography} from "@mui/material";
import {useNavigate} from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#fff",
      }}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h6" mb="20px">
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Back Home
      </Button>
    </Box>
  );
}
