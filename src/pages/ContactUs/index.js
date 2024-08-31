// import {
//   Box,
//   Button,
//   Grid,
//   InputAdornment,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import {Formik, Form} from "formik";
// import {contactUsValidator} from "../../utils/validators";
// import CommonBackground from "../../components/CommonBackground/Index";
// import PhoneIcon from "@mui/icons-material/Phone"; // Import the phone icon

// const ContactUs = () => {
//   const submitHandler = values => {
//     console.log("Values ===> ", values);
//   };

//   return (
//     <>
//       <CommonBackground />
//       <Grid container spacing={3} sx={{padding: 15}}>
//         <Grid item xs={12} md={6} sx={{paddingRight: 2}}>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.906022777617!2d77.14522311508397!3d28.69245768239411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d033c7babc08b%3A0xa8cf1b11bd4a141e!2sSaral%20Dye%20Chems!5e0!3m2!1sen!2sin!4v1681490100997!5m2!1sen!2sin"
//             width="100%"
//             height="550"
//             style={{border: "0px"}}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="Delhi Office"></iframe>
//         </Grid>
//         <Grid item xs={12} md={6} sx={{paddingLeft: 2}}>
//           <Typography
//             variant="h4"
//             sx={{
//               marginBottom: 6,
//               fontSize: 26,
//               borderLeft: "2px solid #3C5D87",
//               fontFamily: "Helvetica Neue",
//               paddingLeft: "10px",
//               color: "#3C5D87",
//             }}>
//             Love to Hear from You Get in Touch
//           </Typography>
//           <Formik
//             initialValues={{
//               name: "",
//               companyName: "",
//               email: "",
//               phoneNumber: "",
//               category: "",
//               products: "",
//               message: "",
//             }}
//             validationSchema={contactUsValidator}
//             onSubmit={submitHandler}>
//             {({values, handleChange, handleBlur}) => (
//               <Form>
//                 <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
//                   <Box sx={{display: "flex", gap: 2, marginBottom: 4}}>
//                     <TextField
//                       name="name"
//                       label="Name"
//                       variant="outlined"
//                       style={{margin: 8}}
//                       fullWidth
//                       value={values.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     <TextField
//                       name="companyName"
//                       label="Company Name"
//                       style={{margin: 8}}
//                       variant="outlined"
//                       fullWidth
//                       value={values.companyName}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                   </Box>
//                   <Box sx={{display: "flex", gap: 2, marginBottom: 4}}>
//                     <TextField
//                       name="email"
//                       label="Email"
//                       type="email"
//                       style={{margin: 8}}
//                       variant="outlined"
//                       fullWidth
//                       value={values.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     <TextField
//                       name="phoneNumber"
//                       label="Phone Number"
//                       type="tel"
//                       variant="outlined"
//                       fullWidth
//                       style={{margin: 8}}
//                       value={values.phoneNumber}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position="start">
//                             <PhoneIcon sx={{marginRight: 1}} />
//                             +91
//                           </InputAdornment>
//                         ),
//                       }}
//                     />
//                   </Box>
//                   <Box sx={{display: "flex", gap: 2, marginBottom: 4}}>
//                     <Select
//                       name="category"
//                       value={values.category}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       fullWidth
//                       displayEmpty
//                       style={{margin: 8}}
//                       renderValue={selected =>
//                         selected ? selected : "Category"
//                       }>
//                       <MenuItem value="Category1">Category 1</MenuItem>
//                       <MenuItem value="Category2">Category 2</MenuItem>
//                       <MenuItem value="Category3">Category 3</MenuItem>
//                     </Select>
//                     <Select
//                       name="products"
//                       value={values.products}
//                       onChange={handleChange}
//                       style={{margin: 8}}
//                       onBlur={handleBlur}
//                       fullWidth
//                       displayEmpty
//                       renderValue={selected =>
//                         selected ? selected : "Products"
//                       }>
//                       <MenuItem value="Product1">Product 1</MenuItem>
//                       <MenuItem value="Product2">Product 2</MenuItem>
//                       <MenuItem value="Product3">Product 3</MenuItem>
//                     </Select>
//                   </Box>
//                   <TextField
//                     name="message"
//                     label="Message"
//                     variant="outlined"
//                     multiline
//                     style={{margin: 8}}
//                     rows={4}
//                     fullWidth
//                     value={values.message}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                   />
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     sx={{
//                       backgroundColor: "#3C5D87",
//                       width: "150px", // Adjust width as needed
//                       alignSelf: "flex-start",
//                       marginTop: 2,
//                     }}>
//                     Submit
//                   </Button>
//                 </Box>
//               </Form>
//             )}
//           </Formik>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default ContactUs;
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {Formik, Form} from "formik";
import {contactUsValidator} from "../../utils/validators";
import CommonBackground from "../../components/CommonBackground/Index";
import PhoneIcon from "@mui/icons-material/Phone"; // Import the phone icon

const ContactUs = () => {
  const submitHandler = values => {
    console.log("Values ===> ", values);
  };

  return (
    <>
      <CommonBackground
        title="Contact Us"
        mainRoute="Home"
        arrow={true}
        childRoute="Contact Us"
      />
      <Grid container spacing={3} sx={{padding: {xs: 2, sm: 5, md: 15}}}>
        <Grid item xs={12} md={6} sx={{paddingRight: {xs: 0, md: 2}}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.906022777617!2d77.14522311508397!3d28.69245768239411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d033c7babc08b%3A0xa8cf1b11bd4a141e!2sSaral%20Dye%20Chems!5e0!3m2!1sen!2sin!4v1681490100997!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{border: "0px"}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Delhi Office"></iframe>
        </Grid>
        <Grid item xs={12} md={6} sx={{paddingLeft: {xs: 0, md: 2}}}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: {xs: 2, md: 6},
              fontSize: {xs: 20, md: 26},
              borderLeft: "2px solid #3C5D87",
              fontFamily: "Helvetica Neue",
              paddingLeft: {xs: 1, md: "10px"},
              color: "#3C5D87",
            }}>
            Love to Hear from You Get in Touch
          </Typography>
          <Formik
            initialValues={{
              name: "",
              companyName: "",
              email: "",
              phoneNumber: "",
              category: "",
              products: "",
              message: "",
            }}
            validationSchema={contactUsValidator}
            onSubmit={submitHandler}>
            {({values, handleChange, handleBlur}) => (
              <Form>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: {xs: 1, sm: 2},
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {xs: "column", sm: "row"},
                      gap: 2,
                      marginBottom: {xs: 2, sm: 4},
                    }}>
                    <TextField
                      name="name"
                      label="Name"
                      variant="outlined"
                      style={{margin: 0}}
                      fullWidth
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      name="companyName"
                      label="Company Name"
                      style={{margin: 0}}
                      variant="outlined"
                      fullWidth
                      value={values.companyName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {xs: "column", sm: "row"},
                      gap: 2,
                      marginBottom: {xs: 2, sm: 4},
                    }}>
                    <TextField
                      name="email"
                      label="Email"
                      type="email"
                      style={{margin: 0}}
                      variant="outlined"
                      fullWidth
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextField
                      name="phoneNumber"
                      label="Phone Number"
                      type="tel"
                      variant="outlined"
                      fullWidth
                      style={{margin: 0}}
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon sx={{marginRight: 1}} />
                            +91
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {xs: "column", sm: "row"},
                      gap: 2,
                      marginBottom: {xs: 2, sm: 4},
                    }}>
                    <Select
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                      displayEmpty
                      style={{margin: 0}}
                      renderValue={selected =>
                        selected ? selected : "Category"
                      }>
                      <MenuItem value="Category1">Category 1</MenuItem>
                      <MenuItem value="Category2">Category 2</MenuItem>
                      <MenuItem value="Category3">Category 3</MenuItem>
                    </Select>
                    <Select
                      name="products"
                      value={values.products}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                      displayEmpty
                      style={{margin: 0}}
                      renderValue={selected =>
                        selected ? selected : "Products"
                      }>
                      <MenuItem value="Product1">Product 1</MenuItem>
                      <MenuItem value="Product2">Product 2</MenuItem>
                      <MenuItem value="Product3">Product 3</MenuItem>
                    </Select>
                  </Box>
                  <TextField
                    name="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    style={{margin: 0}}
                    rows={4}
                    fullWidth
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#3C5D87",
                      width: {xs: "100%", sm: "150px"},
                      alignSelf: "flex-start",
                      marginTop: 2,
                    }}>
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;
