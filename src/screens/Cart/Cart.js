import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../constants/routes';
import LinearGradient from 'react-native-linear-gradient';
import DashboardHeader from '../../components/DashBoardHeader';

const CartItem = ({product, onRemove, onDecrement, onIncrement}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cartItem}>
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.PRODUCT_DETAILS)}>
        <Image source={{uri: product.image}} style={styles.cartItemImage} />
      </TouchableOpacity>
      <View style={styles.cartItemDetails}>
        <View style={styles.cartItemHeader}>
          <Text style={styles.cartItemName}>{product.name}</Text>
          <TouchableOpacity onPress={onRemove}>
            <Icon name="delete" size={22} color="#666" />
          </TouchableOpacity>
        </View>
        <Text style={styles.cartItemSpec}>{product.specification}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.cartItemQuality}>
            Quality : {product.quality}
          </Text>
          <View style={styles.cartItemQuantity}>
            <TouchableOpacity style={styles.quantityBtn} onPress={onDecrement}>
              <Text style={styles.quantityBtnText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{product.quantity}</Text>
            <TouchableOpacity style={styles.quantityBtn} onPress={onIncrement}>
              <Text style={styles.quantityBtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const Cart = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Nylon (Brand)',
      specification: '80*56" (N + M)',
      quality: '1',
      quantity: 1,
      image:
        'https://s3-alpha-sig.figma.com/img/4f5a/8713/fa4ef7fec5ff73309653f4bd9e47df47?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ESKybLsPR-n0Bud0qXuEHFHKztOgBvIgHWw3UlpvKISeLfYBduN4X4jt~IOL9EU6i3d~8d1YmH7DuRriaUPyqL~JgAXQU5Tlbrsxt-nz4EWiO-UfLYnEUhiOPknJr3DuNezXs6G8jvQMvhdayKlUtbYEI8t5-qqQe6SVbxNFrCj3efL4zMUuFNg8q2X2Vb7HnYVIofPXDNc2ujRzxQQkfNL8pgkMvXV5m5p1ZNgbEIeE5RwWkBgNxjHWeH7kGpS1zc-pQ6NsK-~Ap9gcaqJj~EVvZ5-IY0h3lv8tl1~PQ3HP967m7btS~8OHP9Ha2y7EKDur23--dI1uY099vZUw2Q__',
    },
    {
      id: 2,
      name: 'Nylon (Brand)',
      specification: '80*56" (N + M)',
      quality: '1',
      quantity: 1,

      image:
        'https://s3-alpha-sig.figma.com/img/4f5a/8713/fa4ef7fec5ff73309653f4bd9e47df47?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ESKybLsPR-n0Bud0qXuEHFHKztOgBvIgHWw3UlpvKISeLfYBduN4X4jt~IOL9EU6i3d~8d1YmH7DuRriaUPyqL~JgAXQU5Tlbrsxt-nz4EWiO-UfLYnEUhiOPknJr3DuNezXs6G8jvQMvhdayKlUtbYEI8t5-qqQe6SVbxNFrCj3efL4zMUuFNg8q2X2Vb7HnYVIofPXDNc2ujRzxQQkfNL8pgkMvXV5m5p1ZNgbEIeE5RwWkBgNxjHWeH7kGpS1zc-pQ6NsK-~Ap9gcaqJj~EVvZ5-IY0h3lv8tl1~PQ3HP967m7btS~8OHP9Ha2y7EKDur23--dI1uY099vZUw2Q__',
    },
  ]);

  const handleRemoveItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleDecrement = id => {
    setCartItems(
      cartItems.map(item =>
        item.id === id && item.quantity > 1
          ? {...item, quantity: item.quantity - 1}
          : item,
      ),
    );
  };

  const handleIncrement = id => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <DashboardHeader />
      <View style={styles.cartContent}>
        <Text style={styles.addProductsText}>Add Products</Text>
        <ScrollView style={styles.cartItemsContainer}>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              product={item}
              onRemove={() => handleRemoveItem(item.id)}
              onDecrement={() => handleDecrement(item.id)}
              onIncrement={() => handleIncrement(item.id)}
            />
          ))}
        </ScrollView>
        <View style={{alignSelf: 'center', marginBottom: 20}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('products')}
            style={{
              borderWidth: 1,
              borderColor: '#3C5D87',
              paddingVertical: 8,
              paddingHorizontal: 15,
              borderRadius: 20,
            }}>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#3C5D87'}}>
              Add Product
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <LinearGradient
            colors={['#05842A', '#05842A']} // Left to right gradient colors
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.confirmButton} // Make sure the gradient covers the button
          >
            <TouchableOpacity style={styles.quoteButton}>
              <Text style={styles.quoteButtonText}>Confirm</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#38587F', '#101924']} // Left to right gradient colors
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.receiptButton} // Make sure the gradient covers the button
          >
            <TouchableOpacity style={styles.quoteButton}>
              <Text style={styles.quoteButtonText}>Request for Quote</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },

  menuButton: {
    marginRight: 15,
  },
  searchButton: {
    marginRight: 15,
  },
  cartButton: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: -8,
    top: -8,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cartContent: {
    padding: 15,
    marginTop: -80,
    backgroundColor: '#FFF',
    borderRadius: 20,
  },
  cartTitle: {
    fontSize: 16,

    marginLeft: 10,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  addProductsText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  cartItemsContainer: {
    marginBottom: 15,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: 10,
  },
  cartItemImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#F0F0F0',
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  cartItemName: {
    fontSize: 15,
    fontWeight: '500',
  },
  cartItemSpec: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  cartItemQuality: {
    fontSize: 13,
    color: '#666',
    marginBottom: 10,
  },
  cartItemQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityBtn: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityBtnText: {
    fontSize: 16,
    color: '#3C5D87',
  },
  quantityText: {
    paddingHorizontal: 15,
    fontSize: 16,
  },
  quoteButton: {
    borderRadius: 25,
    paddingVertical: 12,
    alignSelf: 'center',
    alignItems: 'center',
  },
  quoteButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    height: 60,
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  activeNavItem: {
    marginTop: -15,
  },
  activeNavCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#3C5D87',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeNavText: {
    color: '#3C5D87',
    fontWeight: '500',
  },
  confirmButton: {
    width: '30%',
    backgroundColor: '#05842A',
    paddingHorizontal: 5,
    borderRadius: 100,
  },
  receiptButton: {
    width: '60%',
    backgroundColor: '#3C5D87',
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderRadius: 100,
  },
});
