import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {toggleShowVariants} from '../redux/slices/authSlice';
import {useDispatch, useSelector} from 'react-redux';
import {
  openScreen,
  setVariants,
  addItem,
  closeModal,
} from '../redux/slices/cartSlice'; // Import the action
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../constants/routes';
import {ProductModal} from '../screens';
import VariantsModal from './VariantsModal';
import {openModal} from '../redux/slices/modalSlice';
import {callbackRegistry} from '../utils/Modal/callbackRegistry';
import {setSelectedVariant} from '../redux/slices/productSlice';

const ProductCard = ({item, onAddPress, idx}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const showVariants = useSelector(state => state.auth.showVariants);
  const selectedVariant = useSelector(state => state.product.selectedVariant);

  const handleShowVariants = variantArray => {
    dispatch(setVariants(variantArray)); // Store variants globally
    console.log('Selected Variants:', variantArray); // Debugging log
    dispatch(toggleShowVariants());
  };

  const selectedProductItem = useSelector(state => state.cart.selectedProduct);
  const isProductModalOpen = useSelector(
    state => state.cart.isProductModalOpen,
  );

  const openScreenTag = product => {
    dispatch(openScreen(product));
    navigation.navigate(ROUTES.PRODUCT_DETAILS);
  };

  const handleAddPress = product => {
    dispatch(addItem(product));
  };

  const handleOpenModal = product => {
    dispatch(addItem(product));
    dispatch(
      openModal({
        modalType: 'CONFIRM_MODAL', // Must match your MODAL_COMPONENTS key
        modalProps: {
          title: 'Confirmation', // Customize these props
          message: 'Are you sure you want to proceed?',
        },
      }),
    );
  };

  const selectVariant = variant => {
    dispatch(setSelectedVariant(variant));
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => openScreenTag(item, idx)}>
          <Image
            source={{
              uri: `https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80`,
            }}
            style={styles.productImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleOpenModal(item, idx)}>
          {/* onPress={() => handleAddPress(item, idx)}> */}
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {item.variants.length > 0 && (
            <View style={styles.variantsContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                {item.variants.slice(0, 3).map((variant, index) => (
                  <TouchableOpacity
                    key={index}
                    style={
                      selectedVariant !== variant
                        ? styles.variantItem
                        : styles.selectedVariantItem
                    }
                    onPress={() => selectVariant(variant)}>
                    <Text
                      style={
                        selectedVariant !== variant
                          ? styles.variantText
                          : styles.selectedVariantText
                      }>
                      {variant.length > 6
                        ? `${variant.substring(0, 6)}...`
                        : variant}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              {item.variants.length > 1 && (
                <TouchableOpacity
                  style={styles.moreButton}
                  onPress={() => handleShowVariants(item.variants)}>
                  <Text style={styles.moreButtonText}>+</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
          {/* {item.variants.length > 0 && (
            <View style={styles.variantsContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                {item.variants.slice(0, 3).map((variant, index) => {
                  // Create a unique combination of item reference and variant
                  const variantIdentifier = `${
                    item.name || item.id
                  }-${variant}`;
                  const isSelected = selectedVariant === variantIdentifier;

                  return (
                    <TouchableOpacity
                      key={`${item.id}-${variant}-${index}`}
                      style={
                        isSelected
                          ? styles.selectedVariantItem
                          : styles.variantItem
                      }
                      onPress={() => {
                        selectVariant(variantIdentifier);
                      }}>
                      <Text
                        style={
                          isSelected
                            ? styles.selectedVariantText
                            : styles.variantText
                        }>
                        {variant.length > 6
                          ? `${variant.substring(0, 6)}...`
                          : variant}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>

              {item.variants.length > 1 && (
                <TouchableOpacity
                  style={styles.moreButton}
                  onPress={() => handleShowVariants(item.variants)}>
                  <Text style={styles.moreButtonText}>+</Text>
                </TouchableOpacity>
              )}
            </View>
          )} */}
        </View>
        <TouchableOpacity onPress={() => handleOpenModal(item, idx)}>
          <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
        <View style={styles.brandInfo}>
          <Text style={styles.brandText}>
            Brand:{' '}
            {item.brand
              ? item.brand.length > 8
                ? `${item.brand.substring(0, 8)}...`
                : item.brand
              : 'None'}
          </Text>
          <Text style={styles.UnitText}>Unit: ltr</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '33%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    flexDirection: 'column',
  },
  variantsContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  variantItem: {
    // width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 3,
    backgroundColor: '#E5F1FF',
    color: '#3C5D85',
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  selectedVariantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 3,
    backgroundColor: '#3C5D85',

    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },

  variantText: {
    fontSize: 12,
    color: '#333',
  },
  selectedVariantText: {
    fontSize: 12,
    color: '#FFF',
  },
  moreButton: {
    backgroundColor: '#3C5D85',
    borderRadius: 3,
    width: 24,

    justifyContent: 'center',
    alignItems: 'center',
  },
  moreButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 110,
    borderRadius: 8,
    // overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  addButton: {
    position: 'absolute',
    right: 3,
    bottom: -10,
    zIndex: 9000,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#3C5D85',
    paddingHorizontal: 10,
    paddingVertical: 1.5,
    borderRadius: 6,
    elevation: 3, // Adds a slight shadow for better visibility
  },
  addButtonText: {
    color: '#3C5D85',
    fontWeight: '600',
  },
  infoContainer: {
    flex: 1,
    marginTop: 8,
  },
  size: {
    fontSize: 10,
    backgroundColor: '#E5F1FF',
    borderRadius: 3,
    marginTop: 15,
    textAlign: 'left',
    fontWeight: '500',
    paddingHorizontal: 8,
    color: '#3C5D85',
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    marginVertical: 4,
  },
  brandInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandText: {
    fontSize: 10,
    color: '#333',
  },
  UnitText: {
    fontSize: 10,
    color: '#333',
  },
});

export default ProductCard;
