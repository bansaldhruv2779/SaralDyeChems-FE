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
import {setSelectedVariant} from '../redux/slices/productSlice';
const VariantsModal = () => {
  const dispatch = useDispatch();
  const showVariants = useSelector(state => state.auth.showVariants);
  const variants = useSelector(state => state.cart.selectedVariants); // Get variants from Redux

  const selectVariant = variant => {
    dispatch(setSelectedVariant(variant));
  };

  const selectedVariant = useSelector(state => state.product.selectedVariant);
  const categoryName = useSelector(state => state.product.categoryName);

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
              {/* Map through variants */}
              {variants.length > 0 ? (
                variants.map((variant, index) => (
                  <View key={index}>
                    <TouchableOpacity
                      key={index}
                      style={
                        selectedVariant !== variant
                          ? styles.variantItem
                          : styles.selectedVariant
                      }
                      onPress={() => selectVariant(variant)}>
                      <Text
                        style={
                          selectedVariant !== variant
                            ? styles.variantText
                            : styles.selectedVariantText
                        }>
                        {variant}
                      </Text>
                    </TouchableOpacity>
                  </View>
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
  selectedVariant: {
    backgroundColor: '#3C5D86',
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
  selectedVariantText: {
    fontSize: 11,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default VariantsModal;
