import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  sortOption: 'name-asc', // Default sort option
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortOption: (state, action) => {
      // Only accept string values
      state.sortOption = action.payload;
    },
  },
});

export const {setSortOption} = sortSlice.actions;
export default sortSlice.reducer;
