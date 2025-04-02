// import React from 'react';
// import {Modal} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
// import {closeModal} from '../../redux/slices/modalSlice';
// import {callbackRegistry} from './callbackRegistry';
// import ConfirmModal from './ConfirmModal';
// import {ProductModal} from '../../screens';

// const MODAL_COMPONENTS = {
//   CONFIRM_MODAL: ConfirmModal,
// };

// const GlobalModal = () => {
//   const dispatch = useDispatch();
//   const {isOpen, modalType, modalProps, callbackId} = useSelector(
//     state => state.modal,
//   );

//   const handleClose = () => {
//     dispatch(closeModal());
//   };

//   const handleConfirm = () => {
//     // Invoke the callback by ID instead of directly
//     if (callbackId) {
//       callbackRegistry.invoke(callbackId);
//     }
//     handleClose();
//   };

//   if (!isOpen || !modalType) {
//     return null;
//   }

//   const SpecificModal = MODAL_COMPONENTS[modalType];

//   if (!SpecificModal) {
//     return null;
//   }

// const selectedProductItem = useSelector(state => state.cart.selectedProduct);
// const isProductModalOpen = useSelector(
//   state => state.cart.isProductModalOpen,
// );

//   return (
// <>
// {isProductModalOpen && (
//   <ProductModal
//     visible={isProductModalOpen}
//     onClose={() => dispatch(closeModal())}
//     product={selectedProductItem}
//   />
// )}
// </>
//     <Modal
//       visible={isOpen}
//       transparent={true}
//       animationType="fade"
//       onRequestClose={handleClose}>
//       <SpecificModal {...modalProps} onClose={handleClose} />
//     </Modal>
//   );
// };

// export default GlobalModal;
// GlobalModal.js

// GlobalModal.js
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {closeModal} from '../../redux/slices/modalSlice';
import {ProductModal} from '../../screens';

const GlobalModal = () => {
  const dispatch = useDispatch();
  const {isOpen} = useSelector(state => state.modal);
  const selectedProduct = useSelector(state => state.cart.selectedProduct);

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!isOpen || !selectedProduct) {
    return null;
  }

  return (
    <ProductModal
      visible={isOpen}
      onClose={handleClose}
      product={selectedProduct}
    />
  );
};

export default GlobalModal;
