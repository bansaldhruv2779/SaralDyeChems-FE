import {Box, Grid, Typography} from "@mui/material";
import React from "react";

const Index = () => {
  return (
    <Box sx={{padding: "30px 8%"}}>
      <Typography fontSize="18px" color="#B5C0D0" fontWeight="500">
        Our Journey
      </Typography>
      <Typography color="#021961" fontSize="24px" fontWeight="700">
        Engraving Lifelines since 1987
      </Typography>
      <Grid container spacing={4} sx={{marginTop: 2}}>
        <Grid item xs={12} md={6}>
          <Typography fontSize="16px" color="#021961" lineHeight="1.5">
            Saral Dye Chems is a leading textile chemicals distributor business
            that was founded by Mr Vipul Kumar Gupta in 1987. With a passion for
            entrepreneurship, Mr Vipul started the company at the age of 21 and
            named it after his mother, symbolizing the love and dedication
            towards his family. Initially, the company traded engraving
            chemicals and soon became an authorized agent of Bluecoat Pvt Ltd.
          </Typography>
          <Typography
            fontSize="16px"
            color="#021961"
            lineHeight="1.5"
            sx={{marginTop: 2}}>
            Within a few years, Saral had established a name for itself in the
            textile chemicals industry, which enabled Mr Vipul to purchase his
            own office in Tilak Bazaar - one of the biggest chemical trading
            markets in India. The company&#39;s growth was phenomenal, and soon
            Mr Sunit Kumar Gupta, Mr Vipul&#39;s younger brother, joined the
            business and played a pivotal role in the company&#39;s success. His
            contribution helped to further expand the company&#39;s reach and
            take it to new heights.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography fontSize="16px" color="#021961" lineHeight="1.5">
            Today, Saral is a well-known name in the textile chemicals industry,
            with offices in Delhi, Panipat, and Ludhiana. Our offices cater to
            all the markets of Punjab, Haryana and even international markets
            like Nepal. Saral takes pride in offering a wide array of screen
            making materials, flat bed chemicals, rotary chemicals, and many
            more.
          </Typography>
          <Typography
            fontSize="16px"
            color="#021961"
            lineHeight="1.5"
            sx={{marginTop: 2}}>
            Our success is attributed to the dedication of our team, which works
            hard to ensure that we deliver quality products and services to our
            clients. With 36+ years of experience in the industry, we have built
            a strong reputation for our reliability, professionalism, and
            exceptional customer service.
          </Typography>
          <Typography
            fontSize="16px"
            color="#021961"
            lineHeight="1.5"
            sx={{marginTop: 2}}>
            At Saral, we are committed to providing our clients with the best
            products, service, and experience. We strive to stay ahead of the
            curve by continuously innovating and expanding our range of products
            and services. We look forward to serving you and your business with
            our quality textile chemicals.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
