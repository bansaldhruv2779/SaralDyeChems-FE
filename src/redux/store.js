// src/redux/store.js
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import drawerReducer from './slices/drawerSlice';
import cartReducer from './slices/cartSlice';
import searchReducer from './slices/searchSlice';
import sortSlice from './slices/sortSlice';
import modalReducer from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    drawer: drawerReducer, // Add drawer reducer
    cart: cartReducer,
    search: searchReducer,
    sort: sortSlice,
    modal: modalReducer,
  },
});
