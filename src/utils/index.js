/* eslint-disable array-callback-return */
import {get} from "lodash";

export const actionTypeCreator = action => ({
  REQUEST: `${action}_REQUEST`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
});

export const actionCreator = ACTION => ({
  REQUEST: (payload, callback, ...rest) => ({
    type: ACTION.REQUEST,
    payload,
    callback,
    ...rest,
  }),
  SUCCESS: payload => ({
    type: ACTION.SUCCESS,
    payload,
  }),
  FAILURE: payload => ({
    type: ACTION.FAILURE,
    payload,
  }),
});

export const isFile = input => "File" in window && input instanceof File;

export const isJson = str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const formatAddressData = result => {
  const temp = {
    city: "",
    state: "",
    country: "",
    postalCode: "",
    addressLine1: "",
    addressLine2: "",
  };
  result?.address_components?.map(item => {
    if (
      item.types.includes("neighborhood") &&
      item.types.includes("sublocality")
    ) {
      temp.addressLine2 += `${item.long_name} `;
    }
    if (
      item.types.includes("locality") &&
      item.types.includes("administrative_area_level_2")
    ) {
      temp.city = item.long_name;
    }
    if (item.types.includes("administrative_area_level_1")) {
      temp.state = item.long_name;
    }
    if (item.types.includes("country")) {
      temp.country = item.long_name;
    }
    if (item.types.includes("postal_code")) {
      temp.postalCode = item.long_name;
    }
  });
  return temp;
};

export const convertFullAddress = (address = null) => {
  const fields = [
    "unitNumber",
    "addressLine1",
    "addressLine2",
    "city",
    "state",
    "coutry",
    "postalCode",
  ];
  if (address) {
    let temp = "";
    fields.map((field, index) => {
      if (get(address, field, false)) {
        temp += get(address, field, "");
        if (index !== fields.length - 1) temp += ", ";
      }
    });

    return temp;
  }

  return "No Address";
};
