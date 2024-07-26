import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import React from "react";
import {Form, Formik} from "formik";
import {contactUsValidator} from "../../utils/validators";
import {Buildings} from "../../assets";

const ContactUs = () => {
  const submitHandler = values => {
    console.log("Values ===> ", values);
  };

  return (
    <Grid
      container
      spacing={6}
      sx={{marginY: "30px", position: "relative", px: "60px"}}>
      <Grid item xs={12}>
        <Typography variant="h4" fontWeight="600">
          Our Offices
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={2}>
            <Box
              bgcolor="primary.main"
              display="flex"
              flexDirection="column"
              height="112px"
              width="142px"
              boxSizing="border-box"
              borderRadius="12px"
              alignItems={"center"}
              justifyContent="space-around"
              p="10px"
              sx={{
                cursor: "pointer",
              }}>
              <Buildings />
              <Typography
                variant="subtitle2"
                fontWeight={600}
                color="primary.contrastText">
                Delhi
              </Typography>
            </Box>

            <Box
              bgcolor="primary.main"
              display="flex"
              flexDirection="column"
              height="112px"
              width="142px"
              boxSizing="border-box"
              borderRadius="12px"
              alignItems={"center"}
              justifyContent="space-around"
              p="10px"
              mt="12px"
              sx={{
                cursor: "pointer",
              }}>
              <Buildings />
              <Typography
                variant="subtitle2"
                fontWeight={600}
                color="primary.contrastText">
                Panipat
              </Typography>
            </Box>

            <Box
              bgcolor="primary.main"
              display="flex"
              flexDirection="column"
              height="112px"
              width="142px"
              boxSizing="border-box"
              borderRadius="12px"
              alignItems={"center"}
              justifyContent="space-around"
              p="10px"
              mt="12px"
              sx={{
                cursor: "pointer",
              }}>
              <Buildings />
              <Typography
                variant="subtitle2"
                fontWeight={600}
                color="primary.contrastText">
                Ludhiana
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={8} lg={10}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.906022777617!2d77.14522311508397!3d28.69245768239411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d033c7babc08b%3A0xa8cf1b11bd4a141e!2sSaral%20Dye%20Chems!5e0!3m2!1sen!2sin!4v1681490100997!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{border: "0px"}}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Delhi Office"></iframe>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} mt="20px">
        <Typography
          variant="h5"
          color="common.fontPrimary"
          fontWeight="600"
          fontSize={"32px"}>
          Love to hear from you,
          <br />
          Get in touch 👋
        </Typography>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          }}
          validationSchema={contactUsValidator}
          onSubmit={submitHandler}>
          {({errors, touched}) => (
            <Form>
              <Grid container spacing={4} rowGap={6} sx={{mt: "20px"}}>
                <Grid item xs={12} sm={6} sx={{paddingX: "10px"}}>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="First Name"
                    name="firstName"
                  />
                  {touched.firstName && errors.firstName ? (
                    <Typography variant="subtitle1" color="error">
                      {errors.firstName}
                    </Typography>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6} sx={{paddingX: "10px"}}>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Last Name"
                    name="lastName"
                  />
                  {touched.lastName && errors.lastName ? (
                    <Typography variant="subtitle1" color="error">
                      {errors.lastName}
                    </Typography>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6} sx={{paddingX: "10px"}}>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                  {touched.email && errors.email ? (
                    <Typography variant="subtitle1" color="error">
                      {errors.email}
                    </Typography>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6} sx={{paddingX: "10px"}}>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Phone Number"
                    name="phone"
                  />
                  {touched.phone && errors.phone ? (
                    <Typography variant="subtitle1" color="error">
                      {errors.phone}
                    </Typography>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={12} sx={{paddingX: "10px"}}>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Message"
                    name="message"
                  />
                  {touched.message && errors.message ? (
                    <Typography variant="subtitle1" color="error">
                      {errors.message}
                    </Typography>
                  ) : null}
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                sx={{
                  paddingTop: "50px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  sx={{
                    padding: "18px, 32px, 18px, 32px",
                    marginY: "auto",
                    width: {xs: "100%", sm: "auto"},
                  }}>
                  Send Message
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
