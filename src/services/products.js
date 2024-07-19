import {apiURL} from "../constants";
import {request} from "../utils/requestService";

export const getProductsList = async data => {
  try {
    const URL = `${apiURL}/products`;
    const res = await request(URL, "GET", {}, data);
    return res;
  } catch (e) {
    return {
      success: false,
      data: {},
      message: e.message,
    };
  }
};

export const getCategoriesList = async data => {
  try {
    const URL = `${apiURL}/categories`;
    const res = await request(URL, "GET", {}, {});
    return res;
  } catch (e) {
    return {
      success: false,
      data: {},
      message: e.message,
    };
  }
};
