import React from 'react';
import {Modal, View, StyleSheet, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {closeModal} from '../../redux/slices/modalSlice';
import ConfirmModal from './ConfirmModal';

const MODAL_COMPONENTS = {
  CONFIRM_MODAL: ConfirmModal,
};

const GlobalModal = () => {
  const dispatch = useDispatch();
  const {isOpen, modalType, modalProps} = useSelector(state => state.modal);
  const selectedProductItem = useSelector(state => state.cart.selectedProduct);

  // const handleClose = () => dispatch(closeModal());
  const handleClose = () => {
    console.log('Dispatching close modal'); // Debug log
    dispatch(closeModal());
  };

  if (!isOpen || !modalType) return null;

  const SpecificModal = MODAL_COMPONENTS[modalType];
  if (!SpecificModal) return null;

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
      statusBarTranslucent>
      <View style={styles.overlay}>
        <View style={styles.modalWrapper}>
          <SpecificModal
            {...modalProps}
            onClose={handleClose}
            product={selectedProductItem}
          />
        </View>
      </View>
    </Modal>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width,
    height,
  },
  modalWrapper: {
    width: '90%',
    maxWidth: 500,
  },
});

export default GlobalModal;
