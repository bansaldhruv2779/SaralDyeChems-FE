import axios from "axios";
// import {get} from "lodash";
import {store} from "../store";
// import {logout} from "../store/actions";

const customAxios = axios.create({
  baseURL: process.env.PUBLIC_URL,
  timeout: 10000,
  headers: {
    "api-key": "eyJz-CI6Ikp-4pWY-lhdCI3",
    // "x-auth-token": getAccessToken()
  },
});

const getErrorMsg = data => {
  try {
    let error = null;
    if (typeof data === "string") error = data;
    else if (typeof data === "object") {
      if (data.hasOwnProperty("message")) error = data.message;
      else if (data.hasOwnProperty("msg")) error = data.msg;
      else error = data.toString();
    }

    return error;
  } catch (err) {
    return null;
  }
};

const handleLogout = () => {
  const state = store.getState();
  // store.dispatch(
  //   logout.REQUEST({
  //     path: window.location?.pathname,
  //     deviceToken: state?.auth?.deviceToken,
  //     email: get(state, "auth.userData.email", ""),
  //   }),
  // );
  return {
    success: false,
    data: null,
    error: "Session Expired",
  };
};

const responseHandler = response => {
  let res = {};
  if (response.status === 401) {
    res = handleLogout();
  } else if (response.status < 205) {
    res.success = true;
    res.logout = false;
    res.data = response.data;
    res.error = null;
  } else {
    res.success = false;
    res.logout = false;
    res.data = {};
    res.error = getErrorMsg(response.data);
  }
  return res;
};

const errorHandler = error => {
  let res = {};
  if (error.response.status === 401) {
    res = handleLogout();
  } else {
    res.success = false;
    res.logout = false;
    res.data = {};
    res.error = getErrorMsg(error.response.data);
  }
  return res;
};

// customAxios.interceptors.request.use(
//   (request) => requestHandler(request),
//   (error) => errorHandler(error)
// );

customAxios.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);

export default customAxios;
