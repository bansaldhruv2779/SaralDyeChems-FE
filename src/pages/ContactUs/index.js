import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Select,
  Chip,
  MenuItem,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@mui/material";
import React, {useState} from "react";
import {Buildings} from "../../assets";
import FlipHeading from "../../components/Flipword/FlipHeading";
import {footerLogo} from "../../assets";
import Products from "../../constants/products.json";
import {MuiTelInput} from "mui-tel-input";
import {toast} from "react-toastify";

const Offices = [
  {
    location: "Delhi",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.906022777617!2d77.14522311508397!3d28.69245768239411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d033c7babc08b%3A0xa8cf1b11bd4a141e!2sSaral%20Dye%20Chems!5e0!3m2!1sen!2sin!4v1681490100997!5m2!1sen!2sin",
  },
  {
    location: "Panipat",
    address:
      "https://maps.google.com/maps?q=9X6J%2B8CX%2C+25+Sector+Part+2%2C+Sector+25+Phase+2%2C+Huda%2C+Panipat%2C+Sarai+Pilghan%2C+Haryana+132103&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    location: "Ludhiana",
    address:
      "https://maps.google.com/maps?q=30%C2%B054%2736.5%22N+75%C2%B053%2702.2%22E&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
];

const ContactUs = () => {
  const theme = useTheme();
  const [selectedOffice, setSelectedOffice] = useState("Delhi");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [ProductList, setProductList] = useState([]);
  const [values, setValues] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = event => {
    setValues(prevValues => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handlePhoneNumberChange = value => {
    setPhoneNumber(value);
  };

  const handleCategoryChange = event => {
    const {
      target: {value},
    } = event;
    const productsArray = [];
    event.target.value.forEach(item => {
      Products.data.forEach(category => {
        if (!item || category.category === item) {
          category.product.forEach(product => {
            productsArray.push(product.name);
          });
        }
      });
    });
    setProductList(productsArray);

    setSelectedCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  const handleProductChange = event => {
    const {
      target: {value},
    } = event;
    setSelectedProduct(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const data = {
      ...values,
      phoneNumber: phoneNumber,
      categories: selectedCategory,
      products: selectedProduct,
    };
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    formData.append("access_key", "6ba961e7-46a3-42f1-8e5b-1fb1ae50f472");
    const object = JSON.stringify(Object.fromEntries(formData));
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: object,
    }).then(res => res.json());

    if (response.success) {
      toast.success("We Will Contact You Shortly.");
      event.target.reset();
      setPhoneNumber("");
      setSelectedProduct([]);
      setSelectedCategory([]);
      setProductList([]);
    }
  };

  return (
    <Grid
      container
      spacing={6}
      sx={{marginY: "2rem", position: "relative", px: "5rem"}}>
      <Grid item xs={12}>
        <FlipHeading word="Our   Offices" />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={4}
            lg={2}
            display="flex"
            flexDirection={isSmallScreen ? "row" : "column"}>
            {Offices.map((office, index) => (
              <Box
                key={index}
                bgcolor="primary.main"
                display="flex"
                flexDirection="column"
                height="8rem"
                width="9rem"
                boxSizing="border-box"
                borderRadius="1rem"
                alignItems={"center"}
                justifyContent="space-around"
                p={!isSmallScreen && "1rem"}
                mr={isSmallScreen && index < Offices.length - 1 && "auto"}
                mb={index < Offices.length - 1 && "auto"}
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => setSelectedOffice(office.location)}>
                <Buildings />
                <Typography
                  variant="subtitle2"
                  fontWeight={600}
                  color="primary.contrastText">
                  {office.location}
                </Typography>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={8} lg={10}>
            <iframe
              src={
                Offices.find(office => office.location === selectedOffice)
                  .address
              }
              width="100%"
              height="450"
              style={{border: "0px"}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${selectedOffice} Office`}></iframe>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} mt="1.5rem">
        <FlipHeading word="Love   to   hear   from   you," />
        <FlipHeading word="Get  in  touch  " emoji="0x1f44b" />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4} rowGap={6} sx={{mt: "1.5rem"}}>
            <Grid item xs={12} sm={6} sx={{paddingX: "1rem"}}>
              <TextField
                margin="normal"
                fullWidth
                label="First Name"
                name="firstName"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{paddingX: "1rem"}}>
              <TextField
                margin="normal"
                fullWidth
                label="Last Name"
                name="lastName"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{paddingX: "1rem"}}>
              <TextField
                margin="normal"
                fullWidth
                label="Email"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{paddingX: "1rem", mt: "1rem"}}>
              <MuiTelInput
                fullWidth
                defaultCountry="IN"
                value={phoneNumber}
                name="phoneNumber"
                onChange={handlePhoneNumberChange}
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{paddingX: "1rem", marginTop: "1rem"}}>
              <FormControl sx={{width: "100%"}}>
                <InputLabel>Categories</InputLabel>
                <Select
                  multiple
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  input={<OutlinedInput label="Categories" />}
                  required
                  renderValue={selected => (
                    <Box sx={{display: "flex", flexWrap: "wrap", gap: 0.5}}>
                      {selected.map(value => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}>
                  {Products.data.map(product => (
                    <MenuItem key={product.category} value={product.category}>
                      {product.category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{paddingX: "1rem", marginTop: "1rem"}}>
              <FormControl sx={{width: "100%"}}>
                <InputLabel>Products</InputLabel>
                <Select
                  multiple
                  value={selectedProduct}
                  onChange={handleProductChange}
                  input={<OutlinedInput label="Products" />}
                  required
                  renderValue={selected => (
                    <Box sx={{display: "flex", flexWrap: "wrap", gap: 0.5}}>
                      {selected.map(value => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}>
                  {ProductList.map((name, index) => (
                    <MenuItem key={index} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} sx={{paddingX: "1rem"}}>
              <TextField
                margin="normal"
                fullWidth
                label="Message"
                name="message"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              paddingTop: "3rem",
              display: "flex",
              justifyContent: "flex-end",
            }}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              sx={{
                padding: "1.5rem, 2rem, 1.5rem, 2rem",
                marginY: "auto",
                width: {xs: "100%", sm: "auto"},
              }}>
              Send Message
            </Button>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12} md={6} mt="1.5rem">
        <img className="h-96" src={footerLogo} alt="loading..." />
      </Grid>
    </Grid>
  );
};

export default ContactUs;
