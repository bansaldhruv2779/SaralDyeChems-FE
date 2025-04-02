import {
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleShowVariants} from '../redux/slices/authSlice';
import Icon from 'react-native-vector-icons/Fontisto';
const VariantsModal = () => {
  const dispatch = useDispatch();
  const showVariants = useSelector(state => state.auth.showVariants);
  const variants = useSelector(state => state.cart.selectedVariants); // Get variants from Redux

  return (
    <Modal
      visible={showVariants} // Use Redux state to show/hide modal
      transparent
      animationType="slide"
      onRequestClose={() => dispatch(toggleShowVariants())}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Variants</Text>
          </View>
          <ScrollView contentContainerStyle={styles.variantsContainer}>
            <View style={styles.variantsGrid}>
              {/* Close Button */}
              <TouchableOpacity onPress={() => dispatch(toggleShowVariants())}>
                {/* <Text style={{color: 'red', fontWeight: 'bold'}}>Close</Text> */}
              </TouchableOpacity>

              {/* Map through variants */}
              {variants.length > 0 ? (
                variants.map((variant, index) => (
                  <TouchableOpacity key={index} style={styles.variantItem}>
                    <Text style={styles.variantText}>{variant}</Text>
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={{textAlign: 'center', marginTop: 10}}>
                  No Variants Available
                </Text>
              )}
            </View>
          </ScrollView>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'center',
              paddingTop: 8,
              paddingBottom: 2,
              alignItems: 'center',
            }}
            onPress={() => dispatch(toggleShowVariants())}>
            <Icon name="close" size={16} />
            <Text style={{marginLeft: 6, fontSize: 16, fontWeight: '500'}}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: '#E5F1FF',
    borderRadius: 25,
    paddingTop: 20,
    maxHeight: '60%',
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  variantsContainer: {
    minHeight: 180,
    paddingHorizontal: 5,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  variantsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    justifyContent: 'flex-start',
  },
  variantItem: {
    backgroundColor: '#E5F1FF',
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  variantText: {
    fontSize: 11,
    color: '#3C5D86',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default VariantsModal;
