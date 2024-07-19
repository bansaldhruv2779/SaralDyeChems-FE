import {call, takeLatest, put} from "redux-saga/effects";
import {toast} from "react-toastify";
import ActionTypes from "../actions/types";
import {getProductsList, getCategoriesList} from "../../services/products";
import {fetchCategoryList, fetchProductList} from "../actions";
import {get} from "lodash";

export function* fetchProductListSaga(action) {
  try {
    const res = yield call(getProductsList, action.payload);
    if (res.success) {
      yield put(fetchProductList.SUCCESS(get(res, "data", [])));
    } else {
      yield put(fetchProductList.FAILURE(res));
      toast.error(
        get(
          res,
          "error",
          "Error fetching the products. Please try again later!",
        ),
      );
    }
  } catch (e) {
    yield put(
      fetchProductList.FAILURE({
        success: false,
        message: e.message,
      }),
    );
    toast.error("Something went wrong!");
  }
}

export function* fetchCategoryListSaga() {
  try {
    const res = yield call(getCategoriesList);
    if (res.success) {
      yield put(fetchCategoryList.SUCCESS(get(res, "data", [])));
    } else {
      yield put(fetchCategoryList.FAILURE(res));
      toast.error(
        get(
          res,
          "error",
          "Error fetching the categories. Please try again later!",
        ),
      );
    }
  } catch (e) {
    yield put(
      fetchCategoryList.FAILURE({
        success: false,
        message: e.message,
      }),
    );
    toast.error("Something went wrong!");
  }
}

const productsSaga = () => [
  takeLatest(
    ActionTypes.Products.FETCH_PRODUCT_LIST.REQUEST,
    fetchProductListSaga,
  ),
  takeLatest(
    ActionTypes.Products.FETCH_CATEGORY_LIST.REQUEST,
    fetchCategoryListSaga,
  ),
];
export default productsSaga();
