// src/redux/slices/searchSlice.js
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  storage,
  StorageKeys,
  setItem,
  getItem,
  setBoolItem,
} from '../../utils/storage';

export const searchProducts = createAsyncThunk(
  'search/searchProducts',
  async (query, {rejectWithValue}) => {
    const token = storage.getString(StorageKeys.AUTH_TOKEN);
    console.log(token);

    try {
      console.log('query', query);
      const response = await axios.get(
        `https://api.saraldyechems.com/product/search?query=${query}`,
        {headers: {Authorization: `Bearer ${token}`}},
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
    loading: false,
    error: null,
    query: '',
  },
  reducers: {
    clearSearchResults: state => {
      state.results = [];
      state.query = '';
    },
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(searchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {clearSearchResults, setSearchQuery} = searchSlice.actions;
export default searchSlice.reducer;
