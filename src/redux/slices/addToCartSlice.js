import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {StorageKeys, storage} from '../../utils/storage';
// import {BASE_URL} from '../config';

// https://api.saraldyechems.com/
const BASE_URL = 'https://api.saraldyechems.com';
// const BASE_URL = 'http://172.20.10.3:4000';
const api = axios.create({
  baseURL: BASE_URL,
});

// Add a response interceptor to handle expired tokens
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      storage.clearAll();
      return Promise.reject({tokenExpired: true});
    }
    return Promise.reject(error);
  },
);

// Async Thunks
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({productId, variant, quantity}, {getState, rejectWithValue}) => {
    try {
      console.log('helo yeh cart');
      const token = storage.getString(StorageKeys.AUTH_TOKEN);
      console.log('data', productId, variant, quantity);
      const response = await axios.post(
        `${BASE_URL}/cart/add`,
        {productId, variant, quantity},
        {headers: {Authorization: `Bearer ${token}`}},
      );
      console.log('datasss', response.data);
      return response.data.cart;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getCart = createAsyncThunk(
  'cart/getCart',
  async (_, {getState, rejectWithValue}) => {
    try {
      const token = storage.getString(StorageKeys.AUTH_TOKEN);
      const response = await axios.get(`${BASE_URL}/cart`, {
        headers: {Authorization: `Bearer ${token}`},
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateCartItem = createAsyncThunk(
  'cart/updateCartItem',
  async ({productId, variant, quantity}, {getState, rejectWithValue}) => {
    try {
      const token = storage.getString(StorageKeys.AUTH_TOKEN);
      const response = await axios.put(
        `${BASE_URL}/cart/update`,
        {productId, variant, quantity},
        {headers: {Authorization: `Bearer ${token}`}},
      );
      return response.data.cart;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async ({productId, variant}, {getState, rejectWithValue}) => {
    try {
      const token = storage.getString(StorageKeys.AUTH_TOKEN);
      const response = await axios.delete(`${BASE_URL}/cart/remove`, {
        headers: {Authorization: `Bearer ${token}`},
        data: {productId, variant},
      });
      return response.data.cart;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async (_, {getState, rejectWithValue}) => {
    try {
      const token = storage.getString(StorageKeys.AUTH_TOKEN);
      const response = await axios.delete(`${BASE_URL}/cart/clear`, {
        headers: {Authorization: `Bearer ${token}`},
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // Add to Cart
      .addCase(addToCart.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to add to cart';
      })

      // Get Cart
      .addCase(getCart.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items || [];
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch cart';
      })

      // Update Cart Item
      .addCase(updateCartItem.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to update cart';
      })

      // Remove from Cart
      .addCase(removeFromCart.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to remove item';
      })

      // Clear Cart
      .addCase(clearCart.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(clearCart.fulfilled, state => {
        state.loading = false;
        state.items = [];
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to clear cart';
      });
  },
});

export default cartSlice.reducer;
