import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {setSortOption} from '../redux/slices/sortSlice';

const FilterHeader = ({onSortPress, onFilterPress}) => {
  const dispatch = useDispatch();
  const currentSortOption = useSelector(state => state.sort.sortOption);

  const handleSortPress = () => {
    // Instead of passing a function, check the current state and dispatch the opposite
    const newSortOption =
      currentSortOption === 'name-asc' ? 'name-desc' : 'name-asc';
    dispatch(setSortOption(newSortOption));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Products</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleSortPress}>
          <Icon name="sort" size={20} color="#001" />
          <Text style={styles.actionText}>Sort</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.actionButton} onPress={onFilterPress}>
          <Icon name="filter" size={20} color="#001" />
          <Text style={styles.actionText}>Filter</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    fontFamily: 'Poppins-SemiBold', // Use your Poppins font
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
  },
  actionText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Medium', // Use your Poppins font
  },
});

export default FilterHeader;
