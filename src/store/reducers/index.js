import {combineReducers} from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import productsReducer from "./products";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = () =>
  combineReducers({
    products: productsReducer,
  });

export default persistReducer(persistConfig, rootReducer());