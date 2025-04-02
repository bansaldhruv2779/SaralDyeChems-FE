import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Navigation from './navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9FF',
  },
});
