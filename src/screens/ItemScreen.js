import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {StorageKeys, storage} from '../utils/storage';
import DashboardHeader from '../components/DashBoardHeader';
import ProductCard from '../components/ProductCard';
import FilterButtons from '../components/FilterButtons';
import VariantsModal from '../components/VariantsModal';
import ProductModal from './ProductDetails/ProductModal';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, closeModal} from '../redux/slices/cartSlice';

const ItemScreen = ({route}) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  // State variables
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentSubcategoryId, setCurrentSubcategoryId] = useState(null);

  const dispatch = useDispatch();
  const showVariants = useSelector(state => state.auth.showVariants);

  // Initialize state from route params when screen focuses
  useEffect(() => {
    if (isFocused) {
      setSelectedCategory(route.params?.selectedItem || null);
      setCurrentSubcategoryId(route.params?.subcategoryId || null);
    }
  }, [isFocused, route.params]);

  const handleCatgorySelection = (category, index) => {
    setSelectedCategory(category.name);
    setCurrentSubcategoryId(category._id);
  };

  // Fetch products when subcategory changes
  useEffect(() => {
    if (!isFocused) return;

    setProduct([]);
    setErrorMsg('');

    if (!route.params?.categoryId || !currentSubcategoryId) {
      setErrorMsg('No category or subcategory selected');
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      setLoading(true);
      const token = storage.getString(StorageKeys.AUTH_TOKEN);

      try {
        const response = await axios.get(
          `http://172.20.10.3:4000/product/category/${route.params.categoryId}/subcategory/${currentSubcategoryId}`,
          {headers: {Authorization: `Bearer ${token}`}},
        );
        setProduct(response.data);
      } catch (error) {
        console.error('API Error:', error);
        setErrorMsg(
          error.response?.data?.message || 'Failed to fetch products',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentSubcategoryId, isFocused]);

  const selectedProductItem = useSelector(state => state.cart.selectedProduct);
  const isProductModalOpen = useSelector(
    state => state.cart.isProductModalOpen,
  );

  const handleAddPress = product => {
    dispatch(addItem(product)); // Store product globally and open modal
  };
  return (
    <View style={styles.screen}>
      <DashboardHeader categories={route.params.subcategories} />
      <View style={styles.scrollWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.container}>
          {route?.params?.subcategories &&
            route.params.subcategories.map((category, index) => (
              <TouchableOpacity
                key={category._id}
                style={[
                  styles.itemContainer,
                  selectedCategory === category.name && styles.selectedItem,
                ]}
                onPress={() => handleCatgorySelection(category, index)}>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1583364493238-248032147fbd?auto=format&fit=crop&w=1974&q=80',
                  }}
                  style={styles.image}
                />
                <Text style={styles.itemTitle}>{category.name}</Text>
                {selectedCategory === category.name && (
                  <View style={styles.borderBottom} />
                )}
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>

      {/* Filter Buttons */}
      <FilterButtons
        filters={['Filter']}
        selectedFilter="sort"
        onFilterPress={() => {}}
      />

      <ScrollView
        style={styles.productsContainer}
        showsVerticalScrollIndicator={false}>
        {loading ? (
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 16, color: 'gray'}}>Loading...</Text>
          </View>
        ) : errorMsg ? (
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 16, color: 'red'}}>{errorMsg}</Text>
          </View>
        ) : product.length > 0 ? (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {product.map((product, index) => (
              <ProductCard
                key={product._id}
                item={product}
                onAddPress={handleAddPress}
                idx={index}
                // handleShowPress={handleShowPress}
              />
            ))}
          </View>
        ) : (
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 16, color: 'gray'}}>
              No items available
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Product Modal */}
      {/* {isProductModalOpen && (
        <ProductModal
          visible={isProductModalOpen}
          onClose={() => dispatch(closeModal())}
          product={selectedProduct}
        />
      )} */}
      {/* <VariantsModal
        visible={showVariants}
        // onClose={() => setShowVariants(false)}
        variants={selectedProduct?.variants || []}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {backgroundColor: '#F2F7FE', flex: 1},
  scrollWrapper: {marginTop: -80, marginLeft: 10},
  container: {
    backgroundColor: '#E5F1FF',
    flexDirection: 'row',
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  selectedItem: {opacity: 1},
  image: {width: 95, height: 95, borderRadius: 15},
  itemTitle: {fontSize: 14, textAlign: 'center', marginTop: 5, width: 95},
  borderBottom: {
    width: '100%',
    height: 4,
    borderRadius: 10,
    backgroundColor: '#3C5D85',
    marginTop: 5,
  },
  productsContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 20,
    marginHorizontal: 0,
    marginBottom: 20,
  },
});

export default ItemScreen;
