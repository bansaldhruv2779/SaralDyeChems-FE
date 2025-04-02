import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  sortOption: 'default', // default, name-asc, name-desc, etc.
};

const productsSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
  },
});

export const {setSortOption} = productsSlice.actions;
export default productsSlice.reducer;
