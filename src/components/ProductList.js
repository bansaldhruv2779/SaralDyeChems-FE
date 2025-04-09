import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ROUTES} from '../constants/routes';
import CustomText from '../CustomText';
import {setCategoryName} from '../redux/slices/productSlice';
import {useDispatch} from 'react-redux';

const ProductList = ({title, products, onViewAll, idx}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleProductItem = (item, idx) => {
    dispatch(setCategoryName(item.name));
    if (item.subcategories) {
      navigation.navigate(ROUTES.ITEM_SCREEN, {
        subcategories: item.subcategories,
        categoryId: item._id,
        subcategoryId: item.subcategories[0]?._id,
        selectedItem: item.subcategories[0]?.name,
      });
    } else {
      navigation.navigate(ROUTES.ITEM_SCREEN, {
        subcategories: item.subCategories, // No subcategories for subcategory items
        categoryId: item.parentCategoryId, // You'll need to add this to your data
        subcategoryId: item._id,
        selectedItem: item.subCategories[idx]?.name,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onViewAll}>
          {title !== 'Shop By Category' && (
            <CustomText style={styles.viewAll}>View All</CustomText>
          )}
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products &&
          products.map((product, index) => (
            <TouchableOpacity
              key={index}
              style={styles.productCard}
              onPress={() => handleProductItem(product, index)}>
              {product && product.image ? (
                <Image
                  source={{
                    uri: `https://api.saraldyechems.com/upload/image/${product.image}`,
                  }}
                  style={styles.productImage}
                />
              ) : (
                <Image
                  source={{
                    uri: 'https://s3-alpha-sig.figma.com/img/d947/c1cf/3875c5a4423e670d6ff4add7f266f106?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GrXSLhPHDiBrOXgh~kF2RZMNiI0zHLzDAeWR6KPafZweSmCHIQUh1zyO3jyrbUOfetpCvu9YWbLNDRVnmvPRBAEAkTh6DIFwY9Xsuajt8G6Gy7k7h84RdgL9ATyzh~T1BpR5ez3CzbxedtIW6bj3a9deITbFy9wYQxTZpaoHSTm93kBG0KK6MeykuPzeqzSlEqiKp8SdX2k3OSn5~C4tnPtwO8m6MM36RVMXWF4PnNb6Gso3D0tItYQUnQblz8AgMhyGSPZjRCmwbJJc~yqLKo9do5AHE7BGf9jsiieDOix1QDYIdYIeKVZR4QwkZyj22qq3W61sOR0tHS7yJSxQsw__',
                  }}
                  style={styles.productImage}
                />
              )}

              <CustomText
                style={[
                  styles.productName,
                  {fontWeight: '700', color: '#5A5A5A'},
                ]}>
                {product.name}
              </CustomText>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  viewAll: {
    fontSize: 14,
    color: '#666',
  },
  productCard: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    width: 100,

    // marginRight: 10,
  },
  productImage: {
    width: 85,
    height: 85,
    borderRadius: 10,
  },
  productName: {
    marginTop: 5,
    fontSize: 11,
    width: '77%',
    // backgroundColor: 'red',
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
});

export default ProductList;
