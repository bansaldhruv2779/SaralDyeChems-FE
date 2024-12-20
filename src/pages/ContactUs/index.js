import {
  Box,
  Grid,
  TextField,
  Typography,
  Select,
  Chip,
  MenuItem,
  FormControl,
} from "@mui/material";
import React, {useState} from "react";
import {Formik, Form} from "formik";
import CommonBackground from "../../components/CommonBackground";
import ScrollButton from "../../components/ScrollButton";
import Branches from "../../components/Branches";
import {toast} from "react-toastify";
import {MuiTelInput} from "mui-tel-input";
import {products as Products} from "../../constants/newProduct";

const ContactUs = () => {
  const [selectedAddress, setSelectedAddress] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.906022777617!2d77.14522311508397!3d28.69245768239411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d033c7babc08b%3A0xa8cf1b11bd4a141e!2sSaral%20Dye%20Chems!5e0!3m2!1sen!2sin!4v1681490100997!5m2!1sen!2sin",
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [ProductList, setProductList] = useState([]);

  const changeAddress = address => {
    setSelectedAddress(address);
  };

  const handlePhoneNumberChange = value => {
    setPhoneNumber(value);
  };

  const handleCategoryChange = event => {
    const {
      target: {value},
    } = event;
    const productsArray = Products.data
      .filter(category =>
        event.target.value.some(
          item => item?.replaceAll(" ", "-") === category.category,
        ),
      )
      .flatMap(category =>
        category.product.flatMap(product =>
          product.subCategory.flatMap(subCategory =>
            subCategory.name ? [subCategory.name] : subCategory.items,
          ),
        ),
      );
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

  const submitHandler = async (values, {resetForm}) => {
    const data = {
      ...values,
      phoneNumber: phoneNumber,
      categories: selectedCategory,
      products: selectedProduct,
    };
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    formData.append("access_key", "dcb8b93d-9885-473d-acde-5bf175471253");
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
      toast.success("We Will Contact You Shortly.", {
        autoClose: 15000,
      });
      resetForm();
      setPhoneNumber("");
      setSelectedProduct([]);
      setSelectedCategory([]);
      setProductList([]);
    }
  };

  return (
    <>
      <CommonBackground
        title="Contact Us"
        mainRoute="Home"
        arrow={true}
        childRoute="Contact Us"
      />
      <Branches changeAddress={changeAddress} />
      <Grid
        container
        spacing={3}
        sx={{padding: {xs: 2, sm: 5, md: 15}}}
        style={{backgroundColor: "#F5F7FB"}}>
        <Grid item xs={12} md={6} sx={{paddingRight: {xs: 0, md: 2}}}>
          <iframe
            title={selectedAddress}
            src={selectedAddress}
            width="100%"
            height="550"
            style={{border: "0px"}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Grid>
        <Grid item xs={12} md={6} sx={{paddingLeft: {xs: 0, md: 2}}}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: {xs: 2, md: 6},
              fontSize: {xs: 20, md: 26},
              borderLeft: "2px solid #3C5D87",
              // fontFamily: "Helvetica Neue",
              paddingLeft: {xs: 1, md: "10px"},
              color: "#3C5D87",
            }}>
            Love to Hear From You
          </Typography>
          <div>
            <Formik
              initialValues={{
                name: "",
                companyName: "",
                email: "",
                message: "",
              }}
              onSubmit={submitHandler}>
              {({values, handleChange}) => (
                <Form>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}>
                    <div
                      style={{
                        display: "flex",
                        width: "50%",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}>
                      <label style={{fontSize: "14px"}}>Name *</label>
                      <TextField
                        placeholder="Enter your name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        required
                        fullWidth
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "50%",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginLeft: "10px",
                      }}>
                      <label style={{fontSize: "14px"}}>Company Name *</label>
                      <TextField
                        placeholder="Enter company name"
                        name="companyName"
                        value={values.companyName}
                        onChange={handleChange}
                        required
                        fullWidth
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "20px",
                      alignItems: "center",
                    }}>
                    <div
                      style={{
                        display: "flex",
                        width: "50%",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }}>
                      <label style={{fontSize: "14px"}}>Email *</label>
                      <TextField
                        placeholder="Enter your email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        fullWidth
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "50%",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginLeft: "10px",
                      }}>
                      <label style={{fontSize: "14px"}}>Phone Number *</label>
                      <MuiTelInput
                        fullWidth
                        defaultCountry="IN"
                        value={phoneNumber}
                        name="phoneNumber"
                        onChange={handlePhoneNumberChange}
                        required
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "20px",
                      alignItems: "center",
                    }}>
                    <div
                      style={{
                        display: "flex",
                        width: "50%",
                        alignItems: "flex-start",
                        flexDirection: "column",
                      }}>
                      <FormControl sx={{width: "100%"}}>
                        <label style={{fontSize: "14px"}}>Categories</label>
                        <Select
                          defaultValue="none"
                          placeholder="Select Category"
                          multiple
                          value={selectedCategory}
                          onChange={handleCategoryChange}
                          renderValue={selected => (
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                              }}>
                              {selected.map(value => (
                                <Chip key={value} label={value} />
                              ))}
                            </Box>
                          )}>
                          {Products.data.map(product => (
                            <MenuItem
                              key={product.category}
                              value={product.category.replaceAll("-", " ")}>
                              {product.category.replaceAll("-", " ")}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "50%",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginLeft: "10px",
                      }}>
                      <FormControl sx={{width: "100%"}}>
                        <label style={{fontSize: "14px"}}>Product</label>
                        <Select
                          multiple
                          value={selectedProduct}
                          onChange={handleProductChange}
                          renderValue={selected => (
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                              }}>
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
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "20px",
                    }}>
                    <label style={{fontSize: "14px"}}>Message</label>
                    <TextField
                      fullWidth
                      placeholder="Enter your message...."
                      name="message"
                      onChange={handleChange}
                      value={values.message}
                      multiline
                      rows={3}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      marginTop: "20px",
                    }}>
                    <button
                      type="submit"
                      style={{
                        width: "142px",
                        height: "48px",
                        backgroundColor: "#3C5D87",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}>
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Grid>
        <ScrollButton />
      </Grid>
    </>
  );
};

export default ContactUs;
