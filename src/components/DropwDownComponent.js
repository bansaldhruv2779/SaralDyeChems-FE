import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  setCategoryName,
  setCurrentSubcategoryId,
  setSelectedCategory,
  setSubcategories,
} from '../redux/slices/productSlice';
import {useDispatch, useSelector} from 'react-redux';

const DropdownMenu = ({currentRouteName, categories}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotateAnimation] = useState(new Animated.Value(0));
  const [selectedCategory, setSecSelectedCategory] = useState(null);
  // const selectedCategory = useSelector(state => state.product.selectedCategory);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    const toValue = isOpen ? 0 : 1;

    Animated.timing(rotateAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setIsOpen(!isOpen);
  };

  const rotateInterpolate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const handleCategorySelect = (category, index) => {
    setSecSelectedCategory(category);
    dispatch(setSubcategories(category?.subcategories));
    dispatch(setCategoryName(category.name));

    dispatch(setSelectedCategory(category.subcategories[0]?.name));
    setIsOpen(false);
  };

  const animatedStyles = {
    transform: [{rotate: rotateInterpolate}],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={toggleDropdown}
        activeOpacity={0.8}>
        <Text style={styles.dropdownButtonText}>
          {selectedCategory?.name || 'Select Category'}
        </Text>
        <Animated.View style={animatedStyles}>
          <Ionicons name="chevron-down" size={24} color="white" />
        </Animated.View>
      </TouchableOpacity>

      {isOpen && categories && (
        <View style={styles.dropdownListContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={category._id || index}
              style={[
                styles.dropdownItem,
                selectedCategory?._id === category._id && styles.activeItem,
              ]}
              onPress={() => handleCategorySelect(category, index)}>
              <Text
                style={[
                  styles.dropdownItemText,
                  selectedCategory?._id === category._id &&
                    styles.activeItemText,
                ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '76%',
    alignSelf: 'center',
    zIndex: 2,
  },
  dropdownButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFF',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  dropdownListContainer: {
    backgroundColor: '#173A66',
    borderRadius: 20,
    paddingVertical: 10,
    width: '100%',
    position: 'absolute',
    top: '100%',
    left: 0,
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    maxHeight: 300, // Added for scroll if many categories
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  dropdownItemText: {
    color: 'white',
    fontSize: 14,
  },
  activeItem: {
    backgroundColor: '#3C5D87',
    borderRadius: 30,
    marginVertical: 0,
    marginHorizontal: 6,
  },
  activeItemText: {
    fontWeight: '600',
  },
});

export default DropdownMenu;
