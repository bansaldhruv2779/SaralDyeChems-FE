import ActionTypes from "./types";
import {actionCreator} from "../../utils";

const {FETCH_PRODUCT_LIST, FETCH_CATEGORY_LIST} = ActionTypes.Products;

export const fetchProductList = actionCreator(FETCH_PRODUCT_LIST);
export const fetchCategoryList = actionCreator(FETCH_CATEGORY_LIST);
