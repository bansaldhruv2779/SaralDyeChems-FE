import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Heading from "../Heading";

const OfficeCard = ({title, icon, address, contact}) => (
  <Card
    sx={{
      borderRadius: "8px",
      backgroundColor: "white",
      width: "320px",
      height: "135px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      cursor: !contact && "pointer",
    }}>
    <CardContent>
      {title && (
        <Typography
          color="#3C5D86"
          variant="h6"
          component="div"
          gutterBottom={title !== "Contact Info" ? true : false}>
          {title}
        </Typography>
      )}
      {address && (
        <Box display="flex" alignItems="center" mb={2}>
          {icon && (
            <div
              className="bg-[#3C5D87] rounded-full p-1 mr-4"
              style={{marginTop: title === "Ludhiana Office" && "-1rem"}}>
              {icon}
            </div>
          )}
          <Typography variant="body2" color="textSecondary">
            {address}
          </Typography>
        </Box>
      )}
      {contact && (
        <Box>
          <Typography variant="body2" color="textSecondary">
            {contact.email && (
              <>
                <IconButton sx={{color: "#3C5D87", marginRight: "8px"}}>
                  <EmailIcon />
                </IconButton>
                <Link
                  href={`mailto:${contact.email}`}
                  underline="none"
                  rel="noopener noreferrer"
                  sx={{
                    cursor: "pointer",
                    color: "inherit",
                  }}>
                  {contact.email}
                </Link>
              </>
            )}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {contact.phone && (
              <>
                <IconButton sx={{color: "#3C5D87", marginRight: "8px"}}>
                  <PhoneIcon />
                </IconButton>
                <Link
                  href="tel:+919810024522"
                  underline="none"
                  rel="noopener noreferrer"
                  sx={{
                    cursor: "pointer",
                    color: "inherit",
                  }}>
                  +91 9810024522
                </Link>
                ,
                <Link
                  href="tel:+919810166261"
                  underline="none"
                  rel="noopener noreferrer"
                  sx={{
                    cursor: "pointer",
                    color: "inherit",
                    marginLeft: "0.25rem",
                  }}>
                  +91 9810166261
                </Link>
              </>
            )}
          </Typography>
        </Box>
      )}
    </CardContent>
  </Card>
);

const OfficeLocations = props => (
  <Box sx={{padding: "10px 0", backgroundColor: "#f4f6f8"}}>
    <Heading title=" Our Offices" titlecolor="#3C5D87" />
    <Grid container spacing={3} justifyContent="center">
      <Grid
        item
        onClick={() =>
          props.changeAddress(
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.906022777617!2d77.14522311508397!3d28.69245768239411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d033c7babc08b%3A0xa8cf1b11bd4a141e!2sSaral%20Dye%20Chems!5e0!3m2!1sen!2sin!4v1681490100997!5m2!1sen!2sin",
          )
        }>
        <OfficeCard
          title="Head Office"
          icon={<LocationOnOutlinedIcon sx={{color: "white"}} />}
          address="402, P-2, Best Business Park, Netaji Subhash Place, Pitampura, (110034)"
        />
      </Grid>
      <Grid
        item
        onClick={() =>
          props.changeAddress(
            "https://maps.google.com/maps?q=9X6J%2B8CX%2C+25+Sector+Part+2%2C+Sector+25+Phase+2%2C+Huda%2C+Panipat%2C+Sarai+Pilghan%2C+Haryana+132103&t=&z=13&ie=UTF8&iwloc=&output=embed",
          )
        }>
        <OfficeCard
          title="Panipat Office"
          icon={<LocationOnOutlinedIcon sx={{color: "white"}} />}
          address="Plot No. 482, Sector-25, Part-II, Huda Ind, Area, Panipat-132103"
        />
      </Grid>
      <Grid
        item
        onClick={() =>
          props.changeAddress(
            "https://maps.google.com/maps?q=30%C2%B054%2736.5%22N+75%C2%B053%2702.2%22E&t=&z=13&ie=UTF8&iwloc=&output=embed",
          )
        }>
        <OfficeCard
          title="Ludhiana Office"
          icon={<LocationOnOutlinedIcon sx={{color: "white"}} />}
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
