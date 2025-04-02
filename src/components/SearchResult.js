// import React from 'react';
// import {View, Text, ScrollView, StyleSheet} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {ROUTES} from '../constants/routes';
// import {useNavigation} from '@react-navigation/native';
// import ProductCard from './ProductCard';
// import {addItem} from '../redux/slices/cartSlice';

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
//       {results?.length > 0 ? (
//         <ScrollView style={styles.resultsListContainer}>
//           <View style={styles.productsContainer}>
//             {results.map((item, index) => (
//               <ProductCard
//                 key={item._id}
//                 item={item}
//                 onAddPress={handleAddPress}
//                 idx={index}
//               />
//             ))}
//           </View>
//         </ScrollView>
//       ) : searchText ? (
//         <Text style={styles.noResultsText}>No products found</Text>
//       ) : null}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignSelf: 'center',
//     marginTop: 10,
//   },
//   searchResultsContainer: {
//     width: '100%',
//     marginTop: 6,
//     borderRadius: 10,
//     backgroundColor: '#FFF',
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
//     // paddingHorizontal: 10,
//   },
//   noResultsText: {
//     textAlign: 'center',
//     fontSize: 18,
//     color: '#FFF',
//     marginTop: 10,
//     zIndex: 999,
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

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 16, color: '#EEE'}}>Loading...</Text>
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

  const handleAddPress = product => {
    dispatch(addItem(product));
  };

  // New logic for empty states
  const showNoResults = searchText && results?.length === 0;
  const showInitialState = !searchText && results?.length === 0;

  return (
    <View style={styles.searchResultsContainer}>
      {results?.length > 0 ? (
        <ScrollView style={styles.resultsListContainer}>
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
        </ScrollView>
      ) : showNoResults ? (
        <Text style={styles.noResultsText}>
          No products found for "{searchText}"
        </Text>
      ) : showInitialState ? (
        <View style={styles.emptyStateContainer}>
          <Icon name="search" size={50} color="#CCCCCC" />
          <Text style={styles.noResultsText}>Search for products above</Text>
          <Text style={styles.suggestionText}>
            Type product name, brand or category
          </Text>
        </View>
      ) : null}
    </View>
  );
};

// Your existing styles remain exactly the same
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 10,
  },
  searchResultsContainer: {
    width: '100%',
    marginTop: -80,
    borderRadius: 10,
    backgroundColor: '#FFF',

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
  noResultsText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFF',
    marginTop: 10,
    zIndex: 999,
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
