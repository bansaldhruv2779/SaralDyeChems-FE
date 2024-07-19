import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Link,
  Checkbox,
  Grid,
  Box,
  Container,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Copyright} from "../../components";
// import {useDispatch} from "react-redux";
import {Form, Formik, useFormik} from "formik";
import {loginValidator} from "../../utils/validators";
// import {login} from "../../store/actions";

const theme = createTheme();

export default function SignIn() {
  // const dispatch = useDispatch();

  // const submitHandler = values => {
  //   dispatch(login.REQUEST(values));
  // };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate: values => loginValidator(values),
    onSubmit: values => {
      // submitHandler(values);
    },
  });
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{mt: 1, width: {xs: "360px", md: "440px"}}}>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validate={values => loginValidator(values)}
              onSubmit={values => {
                // submitHandler(values);
              }}>
              <Form>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  error={formik.errors.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <Typography variant="subtitle1" color="error">
                    {formik.errors.email}
                  </Typography>
                ) : null}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={formik.errors.password}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <Typography variant="subtitle1" color="error" siz>
                    * {formik.errors.password}
                  </Typography>
                ) : null}
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="primary"
                      name="rememberMe"
                      onChange={formik.handleChange}
                      checked={formik.values.rememberMe}
                      onBlur={formik.handleBlur}
                    />
                  }
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{mt: 3, mb: 2}}
                  onClick={formik.handleSubmit}
                  onSubmit={formik.handleSubmit}>
                  Sign In
                </Button>
              </Form>
            </Formik>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{mt: 8, mb: 4}} />
      </Container>
    </ThemeProvider>
  );
}
