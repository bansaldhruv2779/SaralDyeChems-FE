import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import Carousel from '../components/Carousel';
import ProductList from '../components/ProductList';
import axios from 'axios';
import TrendingProducts from '../components/TrendingProducts';
import DashboardHeader from '../components/DashBoardHeader';

const HomeScreen = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get token from Redux store
  const token = useSelector(state => state.auth.token);
  const getCategoryData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://172.20.10.3:4000/category`,
        // `https://95ae-2401-4900-1c72-8070-dce3-2227-b42b-cdfd.ngrok-free.app/category`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const categoriesData = response.data;
      const subCategoriesMap = {};
      categoriesData.forEach(category => {
        const subcats = category.subcategories.map(subcat => ({
          ...subcat,
          parentCategoryId: category._id,
          subCategories: category.subcategories,
        }));
        subCategoriesMap[category._id] = subcats || [];
      });

      setCategories(categoriesData);
      setSubCategories(subCategoriesMap);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        setError('Session expired. Please login again.');
      } else {
        setError('Failed to load categories');
        console.log(
          'Category Fetch Error:',
          error.response?.data?.message || error.message,
        );
      }
    }
  };

  useEffect(() => {
    if (token) {
      getCategoryData();
    }
  }, [token]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3b5998" />
      </View>
    );
  }

  if (error) {
    return (
      <>
        <DashboardHeader />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <DashboardHeader />
      <TrendingProducts categories={categories} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sectionContainer}>
          <ProductList title="Shop By Category" products={categories} />
        </View>
        {categories.map((category, index) => (
          <View key={category._id}>
            <ProductList
              title={`${category.name}`}
              products={subCategories[category._id] || []}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    backgroundColor: '#F4F9FF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F9FF',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F9FF',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  sectionContainer: {
    backgroundColor: '#FFF',
    shadowColor: '#002',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
