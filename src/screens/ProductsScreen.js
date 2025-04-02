import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DashboardHeader from '../components/DashBoardHeader';

const ProductsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <DashboardHeader />
      <Text>ProductsScreen</Text>
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9FF',
  },
});
