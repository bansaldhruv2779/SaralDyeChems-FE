import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import DashboardHeader from '../../components/DashBoardHeader';
import LinearGradient from 'react-native-linear-gradient';

// Expandable section component
const ExpandableSection = ({title, children}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.sectionContainer}>
      <TouchableOpacity
        style={styles.sectionHeader}
        onPress={() => setExpanded(!expanded)}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Icon
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color="#000"
        />
      </TouchableOpacity>

      {expanded && <View style={styles.sectionContent}>{children}</View>}
    </View>
  );
};

const ProductDetail = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(2);
  const [inputValue, setInputValue] = useState('');

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <DashboardHeader />
      <ScrollView
        style={styles.productContent}
        showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/4f5a/8713/fa4ef7fec5ff73309653f4bd9e47df47?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ESKybLsPR-n0Bud0qXuEHFHKztOgBvIgHWw3UlpvKISeLfYBduN4X4jt~IOL9EU6i3d~8d1YmH7DuRriaUPyqL~JgAXQU5Tlbrsxt-nz4EWiO-UfLYnEUhiOPknJr3DuNezXs6G8jvQMvhdayKlUtbYEI8t5-qqQe6SVbxNFrCj3efL4zMUuFNg8q2X2Vb7HnYVIofPXDNc2ujRzxQQkfNL8pgkMvXV5m5p1ZNgbEIeE5RwWkBgNxjHWeH7kGpS1zc-pQ6NsK-~Ap9gcaqJj~EVvZ5-IY0h3lv8tl1~PQ3HP967m7btS~8OHP9Ha2y7EKDur23--dI1uY099vZUw2Q__',
            }} // Replace with your actual image path
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        {/* Product Info */}
        <View style={styles.productInfo}>
          <Text style={styles.productName}>Stoving Thinner</Text>

          {/* Product Details Row */}
          <View style={styles.detailsRow}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Category:</Text>
                <Text style={styles.detailValue}>Textile Auxiliaries</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Brand:</Text>
                <Text style={styles.detailValue}>Krayson</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Units (in):</Text>
                <Text style={styles.detailValue}>ltr</Text>
              </View>
            </View>
            {/* SKU and Input Row */}
            <View style={styles.skuRow}>
              <View style={styles.skuContainer}>
                {/* <Text style={styles.skuLabel}>SKU</Text> */}
                <Text style={styles.skuValue}>20 L</Text>
              </View>
              <View style={styles.inputContainer}>
                {/* <Text style={styles.inputLabel}>Enter your Value</Text> */}
                <TextInput
                  style={styles.input}
                  value={inputValue}
                  onChangeText={setInputValue}
                  placeholder="Enter value"
                  keyboardType="numeric"
                />
              </View>
              <TouchableOpacity style={styles.plusButton}>
                <Icon name="add" size={20} color="#FFF" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.orderButton}>
                <Text style={styles.orderButtonText}>Don't know</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Product Type */}
          <Text style={styles.productType}>NYLON (12 No. 54" (NAM))</Text>

          {/* Product Description */}
          <ExpandableSection title="Product Description:">
            <Text style={styles.sectionText}>
              Our Nylon (12 No. 54" (NAM)) is a high-quality, durable synthetic
              fabric designed for multiple industrial and commercial
              applications. Made from premium-grade nylon fibers, this fabric
              offers excellent strength and abrasion resistance to wear and
              tear.
            </Text>
          </ExpandableSection>
          <ExpandableSection title="Key Features:">
            <View style={styles.featureItem}>
              <Icon name="circle" size={14} color="#5A5A5A" />
              <Text style={styles.featureText}>
                <Text style={styles.featureHighlight}>Durable & Strong:</Text>{' '}
                High tensile strength ensures longevity and reliability.
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="circle" size={14} color="#5A5A5A" />
              <Text style={styles.featureText}>
                <Text style={styles.featureHighlight}>
                  Lightweight & Flexible:
                </Text>{' '}
                Easy to handle and adaptable to various applications.
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="circle" size={14} color="#5A5A5A" />
              <Text style={styles.featureText}>
                <Text style={styles.featureHighlight}>
                  Weather & Moisture Resistant:
                </Text>{' '}
                Performs well in outdoor and humid conditions.
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="circle" size={14} color="#5A5A5A" />
              <Text style={styles.featureText}>
                <Text style={styles.featureHighlight}>Versatile Use:</Text>{' '}
                Suitable for netting, filtration, protective covers, and
                industrial purposes.
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="circle" size={14} color="#5A5A5A" />
              <Text style={styles.featureText}>
                <Text style={styles.featureHighlight}>Standard Width:</Text>{' '}
                54-inch width provides ample coverage for different projects.
              </Text>
            </View>
          </ExpandableSection>

          <ExpandableSection title="Specifications:">
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Material:</Text>
              <Text style={styles.specValue}>100% Nylon</Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Mesh/Thread Size:</Text>
              <Text style={styles.specValue}>12 No. (NAM)</Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Width:</Text>
              <Text style={styles.specValue}>54 inches</Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Color Options:</Text>
              <Text style={styles.specValue}>
                Available in various colors upon request
              </Text>
            </View>
            <View style={styles.specItem}>
              <Text style={styles.specLabel}>Customization:</Text>
              <Text style={styles.specValue}>
                Can be tailored to specific requirements
              </Text>
            </View>
          </ExpandableSection>
        </View>
      </ScrollView>
      <View style={styles.bottomActions}>
        <View style={styles.totalQty}>
          <Text style={styles.totalQtyText}>Total Qty: 400 L</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityBtn1}
              onPress={decrementQuantity}>
              <Text style={styles.quantityBtnText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityBtn2}
              onPress={incrementQuantity}>
              <Text style={styles.quantityBtnText}>+</Text>
            </TouchableOpacity>
          </View>
          <LinearGradient
            colors={['#1B2B48', '#2D4565']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{borderRadius: 100}}>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add To Cart</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: -103,
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#3C5D87',
  },
  menuButton: {
    marginRight: 15,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButton: {
    marginRight: 15,
  },
  cartButton: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: -8,
    top: -8,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productContent: {
    // flex: 1,
    marginTop: -80,
    backgroundColor: '#FFF',
    borderRadius: 20,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    padding: 15,
  },
  imageContainer: {
    backgroundColor: '#CCC',
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // elevation: 2,
  },
  productImage: {
    width: '90%',
    height: '90%',
  },
  productInfo: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detailsRow: {
    marginBottom: 15,
    backgroundColor: '#E5F1FF',
    padding: 10,
    borderRadius: 6,
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    color: '#666',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  skuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  skuContainer: {
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    width: 70,
  },
  skuLabel: {
    fontSize: 12,
    color: '#666',
  },
  skuValue: {
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    flex: 1,
  },
  inputLabel: {
    fontSize: 12,
    color: '#666',
  },
  input: {
    fontSize: 14,
    padding: 0,
    height: 20,
  },
  plusButton: {
    backgroundColor: '#3C5D87',
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  orderButton: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  orderButtonText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500',
  },
  productType: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  featureText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
    marginLeft: 8,
    flex: 1,
  },
  featureHighlight: {
    fontWeight: '600',
    color: '#333',
  },
  specItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  specLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    width: 120,
  },
  specValue: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
  bottomActions: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
    // flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingHorizontal: 15,

    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    alignItems: 'center',
  },
  totalQty: {
    marginBottom: 10,
  },
  totalQtyText: {
    fontSize: 16,
    fontWeight: '600',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: '#CCC',
    marginRight: 15,
  },
  quantityBtn1: {
    width: 30,
    height: 30,

    borderRightWidth: 1,
    borderColor: '#CCC',

    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityBtn2: {
    width: 30,
    height: 30,
    borderColor: '#CCC',
    borderLeftWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityBtnText: {
    fontSize: 16,
    color: '#3C5D87',
  },
  quantityText: {
    paddingHorizontal: 15,
    fontSize: 16,
  },
  addToCartButton: {
    // backgroundColor: '#3C5D87',

    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  sectionContainer: {
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  sectionContent: {
    paddingBottom: 15,
  },
});
