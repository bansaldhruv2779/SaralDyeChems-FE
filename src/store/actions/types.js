import {actionTypeCreator} from "../../utils";

const FETCH_PRODUCT_LIST = actionTypeCreator("FETCH_PRODUCT_LIST");
const FETCH_CATEGORY_LIST = actionTypeCreator("FETCH_CATEGORY_LIST");
const Products = {
  FETCH_PRODUCT_LIST,
  FETCH_CATEGORY_LIST,
};

const ActionTypes = {
  Products,
};

export default ActionTypes;
