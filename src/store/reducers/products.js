import {get} from "lodash";
import ActionTypes from "../actions/types";

const authInitialState = {
  products: [],
  categories: [],
  loading: false,
};

const productsReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case ActionTypes.Products.FETCH_PRODUCT_LIST.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.Products.FETCH_PRODUCT_LIST.SUCCESS:
      return {
        ...state,
        loading: false,
        products: get(action, "payload", []),
      };
    case ActionTypes.Products.FETCH_PRODUCT_LIST.FAILURE:
      return {
        ...state,
        loading: false,
        products: [],
      };

    case ActionTypes.Products.FETCH_CATEGORY_LIST.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.Products.FETCH_CATEGORY_LIST.SUCCESS:
      return {
        ...state,
        loading: false,
        categories: get(action, "payload", []),
      };
    case ActionTypes.Products.FETCH_CATEGORY_LIST.FAILURE:
      return {
        ...state,
        loading: false,
        categories: [],
      };
    default:
      return state;
  }
};

export default productsReducer;
