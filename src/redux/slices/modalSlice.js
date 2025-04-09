import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isOpen: false, // Set to true to show modal by default
  modalType: 'CONFIRM_MODAL', // Set default modal type
  modalProps: {
    title: 'Default Title',
    message: 'This modal shows by default',
  },
  callbackId: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      console.log('Opening modal with payload:', action.payload); // Debug log
      state.isOpen = true;
      state.modalType = action.payload.modalType;
      state.modalProps = action.payload.modalProps || {};
      state.callbackId = action.payload.callbackId;
    },
    closeModal: state => {
      console.log('Closing modal'); // Debug log
      state.isOpen = false;
      state.modalType = null;
      state.modalProps = {};
      state.callbackId = null;
    },
  },
});

export const {openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;
