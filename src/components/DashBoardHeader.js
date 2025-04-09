// src/components/DashboardHeader.js
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  StatusBar,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import menuIcon from '../assets/menu_icon.png';
import profileIcon from '../assets/profile.png';
import {ROUTES} from '../constants/routes';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {openDrawer, toggleDrawer} from '../redux/slices/drawerSlice';
import {ChevronLeft, Route} from 'lucide-react-native';
import DropdownMenu from './DropwDownComponent';
import {clearSearchResults, searchProducts} from '../redux/slices/searchSlice';
import SearchResults from './SearchResult';
import axios from 'axios';

const DashboardHeader = ({name}) => {
  const navigation = useNavigation();
  const [currentRouteName, setCurrentRouteName] = useState('');
  const [categories, setCategories] = useState();
  const [openInput, setOpenInput] = useState(false);
  const {results, error} = useSelector(state => state.search);
  const dispatch = useDispatch();

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  // Function to get the current route name
  const getCurrentRouteName = () => {
    const state = navigation.getState();
    if (state?.routes?.length > 0) {
      return state.routes[state.index]?.name || '';
    }
    return '';
  };

  const menuRoutes = [
    ROUTES.HOME,
    'products',
    'Cart',
    ROUTES.CART,
    ROUTES.HISTORY,
    ROUTES.TRACKING,
  ];
  // Update the route name dynamically when screen changes
  useFocusEffect(
    useCallback(() => {
      setCurrentRouteName(getCurrentRouteName());
    }, [navigation]),
  );

  // Function to return the header title dynamically
  const getRouteName = () => {
    switch (currentRouteName) {
      case ROUTES.HISTORY:
        return 'Order History';
      case ROUTES.CART:
        return 'Cart Summary';
      case ROUTES.TRACKING:
        return 'Order Tracking';
      case ROUTES.HOME:
        return 'Trending Products';
      case ROUTES.PROFILE:
        return 'Profile';
      case ROUTES.PRODUCT_DETAILS:
        return 'Stoving Thinner'; // Fixed dynamic issue
      case ROUTES.SEARCH:
        return 'Search';
    }
  };

  const {loading, query} = useSelector(state => state.search);
  const [searchText, setSearchText] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchText);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  // Trigger search when debounced query changes
  useEffect(() => {
    if (debouncedQuery.trim()) {
      dispatch(searchProducts(debouncedQuery.trim()));
    } else {
      dispatch(clearSearchResults());
    }
  }, [debouncedQuery, dispatch]);

  const handleSearchSubmit = () => {
    if (searchText.trim()) {
      dispatch(searchProducts(searchText.trim()));
    }
  };

  const handleClearSearch = () => {
    setSearchText('');
    setOpenInput(false);
    dispatch(clearSearchResults());
  };

  const token = useSelector(state => state.auth.token);
  const getCategoryData = async () => {
    try {
      const {data} = await axios.get(`https://api.saraldyechems.com/category`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(data);
    } catch (error) {
      if (![401, 403].includes(error.response?.status)) {
        console.log(
          'Category Fetch Error:',
          error.response?.data?.message || error.message,
        );
      }
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.mainContent}>
          <View style={styles.centerContainer}>
            {currentRouteName && menuRoutes.includes(currentRouteName) ? (
              <TouchableOpacity
                style={styles.menuContainer}
                onPress={() => navigation.openDrawer()}>
                <Image source={menuIcon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  borderWidth: 1,
                  borderColor: '#CCC',
                  padding: 6,
                  borderRadius: 100,
                }}>
                <ChevronLeft color="#FFF" size={26} />
              </TouchableOpacity>
            )}

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                zIndex: 99,
              }}>
              {openInput ||
                (getRouteName() === 'Search' && (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      flex: 1,
                    }}>
                    <TextInput
                      placeholder="Search products..."
                      placeholderTextColor="#555"
                      value={searchText}
                      onChangeText={setSearchText}
                      style={{
                        borderRadius: 100,
                        flex: 1,
                        marginLeft: 5,
                        paddingLeft: 10,
                        paddingVertical: 10,
                        backgroundColor: '#FFF',
                      }}
                    />
                  </View>
                ))}
              {!openInput && getRouteName() !== 'Search' && (
                <Text style={styles.title}>{getRouteName()}</Text>
              )}
              {!openInput &&
                (currentRouteName === 'products' ||
                  currentRouteName === 'Item Screen') && (
                  <DropdownMenu categories={categories} />
                )}

              <TouchableOpacity
                onPress={() => {
                  if (getRouteName() === 'Search') {
                    if (openInput && searchText) {
                      handleSearchSubmit();
                    }
                    setOpenInput(!openInput);
                  } else {
                    navigation.navigate(ROUTES.SEARCH);
                  }
                }}
                style={styles.searchButton}>
                <Icon
                  name={openInput ? 'search' : 'search'}
                  size={26}
                  color="#FFF"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.rightSection}>
              <TouchableOpacity
                style={styles.profileContainer}
                onPress={() => navigation.navigate(ROUTES.PROFILE)}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>5</Text>
                </View>
                <Icon3 name="user" size={24} color="#5A5A5A" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    // paddingHorizontal: 8,
    paddingVertical: 16,
    paddingBottom: 100,
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: '#3C5D87',
  },

  mainContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    paddingHorizontal: 8,
    height: 48,
  },
  menuContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 0.8,
    borderColor: '#617D9E',

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    // elevation: 2,
  },
  centerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: '#FFF',
    fontWeight: '500',
    marginLeft: 10,
  },
  searchButton: {
    width: 40,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.8,
    borderColor: '#617D9E',
    borderRadius: 100,
    marginRight: 10,
    marginLeft: 10,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 8,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: -2,
    backgroundColor: '#E53935',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  profileContainer: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    // marginRight: 12,
    borderRightWidth: 1,
    borderColor: '#D9DFE7',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default DashboardHeader;
