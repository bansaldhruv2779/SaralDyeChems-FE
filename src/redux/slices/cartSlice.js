import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isDrawerOpen: false,
  selectedVariants: [],
  selectedProduct: null, // Store selected product globally
  isProductModalOpen: true, // Track modal visibility
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setVariants: (state, action) => {
      state.selectedVariants = action.payload;
    },
    openScreen: (state, action) => {
      state.selectedProduct = action.payload;
    },
    addItem: (state, action) => {
      state.selectedProduct = action.payload; // Store the selected product
      state.isProductModalOpen = true; // Open the modal
    },
    closeModal: state => {
      state.isProductModalOpen = false; // Close modal
      state.selectedProduct = null;
    },
  },
});

export const {setVariants, addItem, closeModal, openScreen} = cartSlice.actions;
export default cartSlice.reducer;
