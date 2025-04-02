import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isDrawerOpen: false,
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    openDrawer: state => {
      state.isDrawerOpen = true;
    },
    closeDrawer: state => {
      state.isDrawerOpen = false;
    },
    toggleDrawer: state => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
  },
});

export const {openDrawer, closeDrawer, toggleDrawer} = drawerSlice.actions;
export default drawerSlice.reducer;
