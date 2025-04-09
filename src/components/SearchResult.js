// import React from 'react';
// import {View, Text, ScrollView, StyleSheet} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {ROUTES} from '../constants/routes';
// import {useNavigation} from '@react-navigation/native';
// import ProductCard from './ProductCard';
// import {addItem} from '../redux/slices/cartSlice';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const SearchResults = ({searchText}) => {
//   const dispatch = useDispatch();
//   const {results, loading, error} = useSelector(state => state.search);
//   const navigation = useNavigation();

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <Text style={{fontSize: 16, color: '#EEE'}}>Loading...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.container}>
//         <Text>Error: {error.message}</Text>
//       </View>
//     );
//   }

//   const handleAddPress = product => {
//     dispatch(addItem(product));
//   };

//   // New logic for empty states
//   const showNoResults = searchText && results?.length === 0;
//   const showInitialState = !searchText && results?.length === 0;

//   return (
//     <View style={styles.searchResultsContainer}>
//       <ScrollView style={styles.resultsListContainer}>
//         <View style={styles.productsContainer}>
//           {results.map((item, index) => (
//             <ProductCard
//               key={item._id}
//               item={item}
//               onAddPress={handleAddPress}
//               idx={index}
//             />
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// // Your existing styles remain exactly the same
// const styles = StyleSheet.create({
//   container: {
//     alignSelf: 'center',
//     marginTop: 10,
//   },
//   searchResultsContainer: {
//     width: '100%',
//     marginTop: -80,
//     borderRadius: 10,
//     height: 1000,
//     backgroundColor: '#FFF',
//     // maxHeight: 500,
//     zIndex: 1000,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.25,
//     paddingBottom: 50,
//     shadowRadius: 3.84,
//   },
//   resultsListContainer: {
//     width: '100%',
//   },
//   productsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   noResultsText: {
//     textAlign: 'center',
//     fontSize: 18,
//     color: '#FFF',
//     marginTop: 10,
//     zIndex: 999,
//   },
//   emptyStateContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 30,
//     minHeight: 200,
//   },
//   noResultsText: {
//     textAlign: 'center',
//     fontSize: 18,
//     color: '#555555',
//     marginTop: 15,
//     fontWeight: '500',
//   },
// });

// export default SearchResults;
import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ROUTES} from '../constants/routes';
import {useNavigation} from '@react-navigation/native';
import ProductCard from './ProductCard';
import {addItem} from '../redux/slices/cartSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchResults = ({searchText}) => {
  const dispatch = useDispatch();
  const {results, loading, error} = useSelector(state => state.search);
  const navigation = useNavigation();

  const handleAddPress = product => {
    dispatch(addItem(product));
  };

  // Define empty states
  const showNoResults = searchText && results?.length === 0;
  const showInitialState = !searchText && results?.length === 0;

  return (
    <View style={styles.searchResultsContainer}>
      <ScrollView style={styles.resultsListContainer}>
        {loading ? (
          <View style={styles.emptyStateContainer}>
            <Text style={{fontSize: 16, color: '#555'}}>Loading...</Text>
          </View>
        ) : error ? (
          <View style={styles.emptyStateContainer}>
            <Text style={{fontSize: 16, color: '#555'}}>
              Error: {error.message}
            </Text>
          </View>
        ) : showNoResults ? (
          <View style={styles.emptyStateContainer}>
            <Icon name="search-off" size={48} color="#CCCCCC" />
            <Text style={styles.noResultsText}>
              No results found for "{searchText}"
            </Text>
          </View>
        ) : showInitialState ? (
          <View style={styles.emptyStateContainer}>
            <Icon name="search" size={48} color="#CCCCCC" />
            <Text style={styles.noResultsText}>Search for products</Text>
          </View>
        ) : (
          <View style={styles.productsContainer}>
            {results.map((item, index) => (
              <ProductCard
                key={item._id}
                item={item}
                onAddPress={handleAddPress}
                idx={index}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 10,
  },
  searchResultsContainer: {
    width: '100%',
    marginTop: -80,
    borderRadius: 10,
    height: 1000,
    backgroundColor: '#FFF',
    // maxHeight: 500,
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    paddingBottom: 50,
    shadowRadius: 3.84,
  },
  resultsListContainer: {
    width: '100%',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    minHeight: 200,
  },
  noResultsText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#555555',
    marginTop: 15,
    fontWeight: '500',
  },
});

export default SearchResults;
