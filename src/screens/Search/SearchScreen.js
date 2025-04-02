import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchResults from '../../components/SearchResult';
import DashboardHeader from '../../components/DashBoardHeader';

const SearchScreen = () => {
  return (
    <View>
      <DashboardHeader />
      <SearchResults />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
