import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentSubcategoryId: null,
  subcategories: [], // Add this to store the array
  selectedCategory: [],
  categoryId: null,
  categoryName: null,
  selectedVariant: null,
};

export const categorySlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCurrentSubcategoryId: (state, action) => {
      state.currentSubcategoryId = action.payload;
    },
    setSubcategories: (state, action) => {
      state.subcategories = action.payload; // New reducer for storing the array
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload; // New reducer for storing the array
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload; // New reducer for storing the array
    },
    setCategoryName: (state, action) => {
      state.categoryName = action.payload; // New reducer for storing the array
    },
    setSelectedVariant: (state, action) => {
      state.selectedVariant = action.payload; // New reducer for storing the array
    },
  },
});

export const {
  setCurrentSubcategoryId,
  setSubcategories,
  setSelectedCategory,
  setCategoryId,
  setCategoryName,
  setSelectedVariant,
} = categorySlice.actions;
export default categorySlice.reducer;
