import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import {ROUTES} from '../constants/routes';
import {useNavigation} from '@react-navigation/native';
import DashboardHeader from '../components/DashBoardHeader';

const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState('All Orders');
  const [expandedOrders, setExpandedOrders] = useState([]);
  const navigation = useNavigation();

  // Sample data based on the image
  const orders = [
    {
      id: '#1234',
      status: 'Delivered',
      date: '20 Mar, 2024',
      value: '$323.52',
      items: [
        {
          name: 'Nylon (Brand)',
          size: `80"×56" (4 * 4')`,
          quantity: 8,
          price: '$200.00',
          image: `https://s3-alpha-sig.figma.com/img/4f5a/8713/fa4ef7fec5ff73309653f4bd9e47df47?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ESKybLsPR-n0Bud0qXuEHFHKztOgBvIgHWw3UlpvKISeLfYBduN4X4jt~IOL9EU6i3d~8d1YmH7DuRriaUPyqL~JgAXQU5Tlbrsxt-nz4EWiO-UfLYnEUhiOPknJr3DuNezXs6G8jvQMvhdayKlUtbYEI8t5-qqQe6SVbxNFrCj3efL4zMUuFNg8q2X2Vb7HnYVIofPXDNc2ujRzxQQkfNL8pgkMvXV5m5p1ZNgbEIeE5RwWkBgNxjHWeH7kGpS1zc-pQ6NsK-~Ap9gcaqJj~EVvZ5-IY0h3lv8tl1~PQ3HP967m7btS~8OHP9Ha2y7EKDur23--dI1uY099vZUw2Q__`, // Placeholder - use your actual image path
        },
      ],
    },
    {
      id: '#8234',
      status: 'Processing',
      date: '20 Mar, 2025',
      value: '$323.52',
      items: [
        {
          name: 'Nylon (Brand)',
          size: `80"×56" (4' × 4')`,
          quantity: 8,
          image: `https://s3-alpha-sig.figma.com/img/4f5a/8713/fa4ef7fec5ff73309653f4bd9e47df47?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ESKybLsPR-n0Bud0qXuEHFHKztOgBvIgHWw3UlpvKISeLfYBduN4X4jt~IOL9EU6i3d~8d1YmH7DuRriaUPyqL~JgAXQU5Tlbrsxt-nz4EWiO-UfLYnEUhiOPknJr3DuNezXs6G8jvQMvhdayKlUtbYEI8t5-qqQe6SVbxNFrCj3efL4zMUuFNg8q2X2Vb7HnYVIofPXDNc2ujRzxQQkfNL8pgkMvXV5m5p1ZNgbEIeE5RwWkBgNxjHWeH7kGpS1zc-pQ6NsK-~Ap9gcaqJj~EVvZ5-IY0h3lv8tl1~PQ3HP967m7btS~8OHP9Ha2y7EKDur23--dI1uY099vZUw2Q__`, // Placeholder - use your actual image path
        },
        {
          name: 'Nylon (Brand)',
          size: `80"×56" (4' × 4')`,
          quantity: 8,
          image: `https://s3-alpha-sig.figma.com/img/4f5a/8713/fa4ef7fec5ff73309653f4bd9e47df47?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ESKybLsPR-n0Bud0qXuEHFHKztOgBvIgHWw3UlpvKISeLfYBduN4X4jt~IOL9EU6i3d~8d1YmH7DuRriaUPyqL~JgAXQU5Tlbrsxt-nz4EWiO-UfLYnEUhiOPknJr3DuNezXs6G8jvQMvhdayKlUtbYEI8t5-qqQe6SVbxNFrCj3efL4zMUuFNg8q2X2Vb7HnYVIofPXDNc2ujRzxQQkfNL8pgkMvXV5m5p1ZNgbEIeE5RwWkBgNxjHWeH7kGpS1zc-pQ6NsK-~Ap9gcaqJj~EVvZ5-IY0h3lv8tl1~PQ3HP967m7btS~8OHP9Ha2y7EKDur23--dI1uY099vZUw2Q__`, // Placeholder - use your actual image path
        },
        {
          name: 'Nylon (Brand)',
          size: `80"×56" (4' × 4')`,
          quantity: 8,
          image: `https://s3-alpha-sig.figma.com/img/4f5a/8713/fa4ef7fec5ff73309653f4bd9e47df47?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ESKybLsPR-n0Bud0qXuEHFHKztOgBvIgHWw3UlpvKISeLfYBduN4X4jt~IOL9EU6i3d~8d1YmH7DuRriaUPyqL~JgAXQU5Tlbrsxt-nz4EWiO-UfLYnEUhiOPknJr3DuNezXs6G8jvQMvhdayKlUtbYEI8t5-qqQe6SVbxNFrCj3efL4zMUuFNg8q2X2Vb7HnYVIofPXDNc2ujRzxQQkfNL8pgkMvXV5m5p1ZNgbEIeE5RwWkBgNxjHWeH7kGpS1zc-pQ6NsK-~Ap9gcaqJj~EVvZ5-IY0h3lv8tl1~PQ3HP967m7btS~8OHP9Ha2y7EKDur23--dI1uY099vZUw2Q__`, // Placeholder - use your actual image path
        },
        {
          name: 'Nylon (Brand)',
          size: `80"×56" (4' × 4')`,
          quantity: 8,
          image: `https://s3-alpha-sig.figma.com/img/4f5a/8713/fa4ef7fec5ff73309653f4bd9e47df47?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ESKybLsPR-n0Bud0qXuEHFHKztOgBvIgHWw3UlpvKISeLfYBduN4X4jt~IOL9EU6i3d~8d1YmH7DuRriaUPyqL~JgAXQU5Tlbrsxt-nz4EWiO-UfLYnEUhiOPknJr3DuNezXs6G8jvQMvhdayKlUtbYEI8t5-qqQe6SVbxNFrCj3efL4zMUuFNg8q2X2Vb7HnYVIofPXDNc2ujRzxQQkfNL8pgkMvXV5m5p1ZNgbEIeE5RwWkBgNxjHWeH7kGpS1zc-pQ6NsK-~Ap9gcaqJj~EVvZ5-IY0h3lv8tl1~PQ3HP967m7btS~8OHP9Ha2y7EKDur23--dI1uY099vZUw2Q__`, // Placeholder - use your actual image path
        },
        {
          name: 'Nylon (Brand)',
          size: `80"×56" (4' × 4')`,
          quantity: 8,
          image: `https://s3-alpha-sig.figma.com/img/4f5a/8713/fa4ef7fec5ff73309653f4bd9e47df47?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ESKybLsPR-n0Bud0qXuEHFHKztOgBvIgHWw3UlpvKISeLfYBduN4X4jt~IOL9EU6i3d~8d1YmH7DuRriaUPyqL~JgAXQU5Tlbrsxt-nz4EWiO-UfLYnEUhiOPknJr3DuNezXs6G8jvQMvhdayKlUtbYEI8t5-qqQe6SVbxNFrCj3efL4zMUuFNg8q2X2Vb7HnYVIofPXDNc2ujRzxQQkfNL8pgkMvXV5m5p1ZNgbEIeE5RwWkBgNxjHWeH7kGpS1zc-pQ6NsK-~Ap9gcaqJj~EVvZ5-IY0h3lv8tl1~PQ3HP967m7btS~8OHP9Ha2y7EKDur23--dI1uY099vZUw2Q__`, // Placeholder - use your actual image path
        },
      ],
    },
    {
      id: '#1235',
      status: 'Shipped',
      date: '20 Mar, 2024',
      value: '$323.52',
      items: [
        {
          name: 'Nylon (Brand)',
          size: `80"×56" (4' × 4')`,
          quantity: 8,
          price: '$200.00',
          image: `https://s3-alpha-sig.figma.com/img/4f5a/8713/fa4ef7fec5ff73309653f4bd9e47df47?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ESKybLsPR-n0Bud0qXuEHFHKztOgBvIgHWw3UlpvKISeLfYBduN4X4jt~IOL9EU6i3d~8d1YmH7DuRriaUPyqL~JgAXQU5Tlbrsxt-nz4EWiO-UfLYnEUhiOPknJr3DuNezXs6G8jvQMvhdayKlUtbYEI8t5-qqQe6SVbxNFrCj3efL4zMUuFNg8q2X2Vb7HnYVIofPXDNc2ujRzxQQkfNL8pgkMvXV5m5p1ZNgbEIeE5RwWkBgNxjHWeH7kGpS1zc-pQ6NsK-~Ap9gcaqJj~EVvZ5-IY0h3lv8tl1~PQ3HP967m7btS~8OHP9Ha2y7EKDur23--dI1uY099vZUw2Q__`, // Placeholder - use your actual image path
        },
      ],
    },
  ];

  const toggleOrderExpand = orderId => {
    setExpandedOrders(prev =>
      prev.includes(orderId)
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId],
    );
  };

  const getStatusColor = status => {
    switch (status) {
      case 'Delivered':
        return '#4CAF50';
      case 'Processing':
        return '#FF9800';
      case 'Shipped':
        return '#2196F3';
      default:
        return '#757575';
    }
  };

  const filterTabs = ['All Orders', 'Processing', 'Shipped', 'Delivered'];

  return (
    <View style={styles.container}>
      <DashboardHeader />
      <View style={styles.headerContainer}>
        <View style={styles.userInfoCard}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/9153/e528/226e9714d86e9909ec7a7afbb487e6f4?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ju5708~~du1MFBfTBMUJCXylWkupwwj~LkOtnGrmiNO-htDfMWhJyVGM1u6FVPIjqGmz506XWeXSI7NIHDnC8LJ3ThsMPrn8HCfoELG~cWMeK0Yz4zhpJphgAsxi04VZjHaJ2Ur1zXvmpInxpT0b-GatZl13gE5au2xQrCMZrnwgblTwpgcYLogvFeaWhui8vp49gl6QssPmS9j5wZWKevdiZkJpAgtVvr7YfdJvoPJ7WYMCWBGPPZfjz0M58GrYjfNVXLFeNqJ3cyworsc~-c71D3hhCPkOYbWBkHLF~3Mlmc~uoemnpUP8RPEWe6mto-OsM6a1cGFEecsLtwJHIQ__',
            }} // Use your actual asset
            style={styles.userAvatar}
          />
          <View style={styles.userTextContainer}>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userEmail}>JohnDoe@gmail.com</Text>
          </View>
        </View>

        <View
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          {/* User Info */}

          <View style={styles.tabsContainer}>
            {filterTabs.map(tab => (
              <LinearGradient
                key={tab}
                colors={
                  activeTab && activeTab === tab
                    ? ['#38587F', '#101924']
                    : ['#FFF', '#FFF']
                }
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[
                  styles.tabButton,
                  activeTab === tab && styles.activeTabButton,
                ]}
                // style={styles.receiptButton} // Make sure the gradient covers the button
              >
                <TouchableOpacity onPress={() => setActiveTab(tab)}>
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === tab && styles.activeTabText,
                    ]}>
                    {tab}
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            ))}
          </View>
        </View>

        <ScrollView
          style={styles.ordersContainer}
          showsVerticalScrollIndicator={false}>
          {orders
            .filter(
              order => activeTab === 'All Orders' || order.status === activeTab,
            )
            .map((order, index) => (
              <View key={index} style={styles.orderCard}>
                <View
                  style={styles.orderHeader}
                  onPress={() => toggleOrderExpand(order.id)}>
                  <View style={styles.orderDetails}>
                    <View>
                      <Text style={styles.orderIdText}>Order {order.id}</Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View
                          style={[
                            styles.statusDot,
                            {backgroundColor: getStatusColor(order.status)},
                          ]}
                        />
                        <Text style={styles.orderStatus}>{order.status}</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.orderDateText}>
                        Placed on {order.date}
                      </Text>
                      <Text style={styles.orderValueText}>
                        Total Bill Value: {order.value}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#3C5D87',
                      marginTop: 10,
                      borderRadius: 10,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#FFF',
                        borderBottomLeftRadius: 10,
                      }}>
                      {!expandedOrders.includes(order.id) &&
                        order.items.length > 0 && (
                          <View style={styles.orderItemsContainer}>
                            <View style={styles.orderItem}>
                              <TouchableOpacity
                                onPress={() =>
                                  navigation.navigate(ROUTES.PRODUCT_DETAILS)
                                }>
                                <Image
                                  source={{uri: order.items[0].image}}
                                  style={styles.productImage}
                                />
                              </TouchableOpacity>
                              <View style={styles.productDetails}>
                                <Text style={styles.productName}>
                                  {order.items[0].name}
                                </Text>
                                <Text style={styles.productSize}>
                                  {order.items[0].size}
                                </Text>
                                <Text style={styles.productQuantity}>
                                  Quantity: {order.items[0].quantity}
                                </Text>
                              </View>
                              {order.items.length > 2 && (
                                <View>
                                  <LinearGradient
                                    colors={['#38587F', '#101924']} // Left to right gradient colors
                                    start={{x: 0, y: 0}}
                                    end={{x: 1, y: 0}}
                                    style={styles.ratingContainer}>
                                    <Text style={styles.ratingText}>
                                      {order.items.length > 1
                                        ? '4+'
                                        : order.items.length}
                                    </Text>
                                  </LinearGradient>
                                </View>
                              )}
                            </View>
                          </View>
                        )}

                      {expandedOrders.includes(order.id) && (
                        <View style={styles.orderItemsContainer}>
                          {order.items.map((item, itemIndex) => (
                            <View key={itemIndex} style={styles.orderItem}>
                              <Image
                                source={{uri: item.image}}
                                style={styles.productImage}
                              />
                              <View style={styles.productDetails}>
                                <Text style={styles.productName}>
                                  {item.name}
                                </Text>
                                <Text style={styles.productSize}>
                                  {item.size}
                                </Text>
                                <Text style={styles.productQuantity}>
                                  Quantity: {item.quantity}
                                </Text>
                              </View>
                            </View>
                          ))}
                        </View>
                      )}
                    </View>
                    {order.items.length > 1 && (
                      <TouchableOpacity
                        onPress={() => toggleOrderExpand(order.id)}
                        style={{
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          marginTop: -10,
                          paddingTop: 7,
                        }}>
                        <Icon
                          name={
                            expandedOrders.includes(order.id)
                              ? 'chevron-up'
                              : 'chevron-down'
                          }
                          style={{alignSelf: 'center'}}
                          size={24}
                          color="#fff"
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
  headerContainer: {
    // padding: 16,
    // marginTop: -110,
    marginTop: -30,
    borderRadius: 12,
    backgroundColor: '#FFF',
  },
  pageTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  userInfoCard: {
    marginTop: -50,
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#CCCCCC',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0E0E0',
  },
  userTextContainer: {
    marginLeft: 16,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  userEmail: {
    fontSize: 14,
    color: '#757575',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    marginRight: 4,
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 25,
  },
  activeTabButton: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  tabText: {
    fontSize: 13,
    color: '#555555',
  },
  activeTabText: {
    color: 'white',
    fontWeight: '600',
  },
  ordersContainer: {
    backgroundColor: '#FFF',
    paddingBottom: 100,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  orderCard: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  orderHeader: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  orderStatus: {
    fontSize: 14,
    color: '#757575',
  },
  orderDetails: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  orderIdText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#212121',
  },

  orderDateText: {
    fontSize: 13,
    color: '#001',
    fontWeight: '500',
  },
  orderValueText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#001',
  },
  expandIconContainer: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  expandIcon: {
    fontSize: 16,
    color: '#757575',
  },
  orderItemsContainer: {
    // marginTop: 10,
    // backgroundColor: 'white',
  },
  orderItem: {
    borderWidth: 1,
    // backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#CCC',
    flexDirection: 'row',
    marginTop: 10,
    padding: 15,
    // marginBottom: 10,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
  },
  productDetails: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#212121',
  },
  productSize: {
    fontSize: 13,
    color: '#757575',
    marginTop: 4,
  },
  productQuantity: {
    fontSize: 13,
    color: '#757575',
    marginTop: 4,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '600',
    color: '#212121',
    marginTop: 4,
  },
  ratingContainer: {
    // backgroundColor: '#1E3A8A',
    height: 20,
    width: 30,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  ratingText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});
