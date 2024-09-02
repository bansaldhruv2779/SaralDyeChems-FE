import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Heading from "../Heading/Heading";

const OfficeCard = ({title, icon, address, contact}) => (
  <Card
    sx={{
      borderRadius: "8px",
      padding: "13px",
      backgroundColor: "white",
      width: "300px", // Fixed width
      height: "180px", // Fixed height
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
    <CardContent>
      <Typography variant="h6" component="div" gutterBottom>
        {title}
      </Typography>
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton sx={{color: "#3C5D87"}}>{icon}</IconButton>
        <Typography variant="body2" color="textSecondary">
          {address}
        </Typography>
      </Box>
      {contact && (
        <Box mt={1}>
          <Typography variant="body2" color="textSecondary">
            {contact.email && (
              <>
                <IconButton sx={{color: "#3C5D87", marginRight: "8px"}}>
                  <EmailIcon />
                </IconButton>
                {contact.email}
              </>
            )}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {contact.phone && (
              <>
                <IconButton sx={{color: "#3C5D87", marginRight: "8px"}}>
                  <PhoneIcon />
                </IconButton>
                {contact.phone}
              </>
            )}
          </Typography>
        </Box>
      )}
    </CardContent>
  </Card>
);

const OfficeLocations = () => (
  <Box sx={{padding: "40px 0", backgroundColor: "#f4f6f8"}}>
    <Heading title=" Our Offices" titlecolor="#3C5D87" />
    <Grid container spacing={3} justifyContent="center">
      <Grid item>
        <OfficeCard
          title="Head Office"
          icon={<LocationOnIcon />}
          address="402, P-2, Best Business Park, Netaji Subhash Place, Pitampura, (110034)"
        />
      </Grid>
      <Grid item>
        <OfficeCard
          title="Branch Panipat"
          icon={<LocationOnIcon />}
          address="Plot No. 482, Sector-25, Part-II, Huda Ind, Area, Panipat-132103"
        />
      </Grid>
      <Grid item>
        <OfficeCard
          title="Branch Ludhiana"
          icon={<LocationOnIcon />}
          address="221/L, Indra Colony, Chandigarh Road, B/H.S.K. Marbal, Ludhiana-141008"
        />
      </Grid>
      <Grid item>
        <OfficeCard
          title="Contact Info"
          contact={{
            email: "saraldyes@gmail.com",
            phone: "+91 9810024522, +91 9810166261",
          }}
        />
      </Grid>
    </Grid>
  </Box>
);

export default OfficeLocations;
