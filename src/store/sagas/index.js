import {all} from "redux-saga/effects";
import products from "./products";

const sagas = [...products];

export function* rootSaga() {
  yield all(sagas);
}
