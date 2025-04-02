'use client';

import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  Package,
  BookmarkCheck,
  Phone,
  MessageCircle,
} from 'lucide-react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderTrackModal from '../components/OrderTrackModal';
import ProductModal from './ProductDetails/ProductModal';
import DashboardHeader from '../components/DashBoardHeader';

const {width} = Dimensions.get('window');

const OrderTracking = ({order = sampleOrder}) => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  // Determine the current step based on status
  const getCurrentStep = () => {
    const statusMap = {
      placed: 0,
      generated: 0,
      ready: 1,
      packing: 1,
      shipped: 1,
      delivered: 3,
    };

    return statusMap[order.status.toLowerCase()] || 0;
  };

  const currentStep = getCurrentStep();

  // Toggle expanded view
  const toggleExpand = () => {
    setExpanded(!expanded);
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

  return (
    <>
      <DashboardHeader />

      <View style={styles.container}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#CCC',
            margin: 15,
            borderRadius: 8,
          }}>
          <View style={styles.orderItemContainer}>
            <View>
              <Text style={styles.orderIdText}>Order #{order.id}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
              <Text style={styles.orderDateText}>Placed on {order.date}</Text>
              <Text style={styles.orderValueText}>Total Bill Value: $299</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#3C5D87',
              paddingBottom: 12,
              margin: 10,
              borderRadius: 8,
            }}>
            <View
              style={{
                backgroundColor: '#FFF',
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}>
              <View style={{}}>
                <View style={styles.orderItem}>
                  <Image
                    source={{
                      uri: `https://s3-alpha-sig.figma.com/img/4f5a/8713/fa4ef7fec5ff73309653f4bd9e47df47?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ucFgTbikmyISCqC0oAY1bqTrA0DlMo5L~0VBEozWD0DPsl50eOWFAa0pNcyIge-V~2wyql0NIivL8baESabavtyal3APkS2qYYK~RiQWb-6jIm-z8hX2XwdlX15fve1aXx0LSVoKxJ2n6eoBPXDxSXFz7bp7q8tq4X8p08hl1ysUGsAnPgCS3DVCobsU1dlRNNgfai1deNACDHqY9V9HWrjn3eoqp0KekA3xqE8vO6aVf52stOB7PwaMSaNOhNkfTbNQ~u1-04k9~mHjCiLHTnXYN2QUjwQOwsn6LccjUwUudxRYY-SX2gDfMoXKQq6CfK1FpS0EXS2E5hNFd2vaBQ__`,
                    }}
                    style={styles.productImage}
                  />
                  <View style={styles.productDetails}>
                    <Text style={styles.productName}>Nylon </Text>
                    <Text style={styles.productSize}>70*020</Text>
                    <Text style={styles.productQuantity}>Quantity: 200</Text>
                  </View>
                  {/* <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>
                      {order.items.length > 1 ? '4+' : order.items.length}
                    </Text>
                  </View> */}
                </View>
              </View>
            </View>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: '10%'}}
          style={[
            styles.trackingContainer,
            expanded && styles.expandedTracking,
          ]}>
          <View style={styles.trackingHeader}>
            <Text style={styles.trackingTitle}>Order Tracking</Text>
          </View>
          <View style={styles.timeline}>
            {/* Placed Order */}
            <TrackingStep
              title="Placed Order"
              dates={order.tracking.placed}
              isActive={currentStep >= 0}
              isCompleted={currentStep > 0}
              isFirst={true}
              expanded={expanded}
            />

            {/* Packing */}
            <TrackingStep
              title="Packing"
              dates={order.tracking.packing}
              isActive={currentStep >= 1}
              isCompleted={currentStep > 1}
              expanded={expanded}
            />

            {/* Shipping */}
            <TrackingStep
              title="Shipping"
              dates={order.tracking.shipping}
              isActive={currentStep >= 2}
              isCompleted={currentStep > 2}
              expanded={expanded}
            />

            {/* Delivered */}
            <TrackingStep
              title="Delivered"
              dates={order.tracking.delivered}
              isActive={currentStep >= 3}
              isCompleted={currentStep > 3}
              isLast={true}
              expanded={expanded}
            />
          </View>

          {/* Delivery Receipt Button */}
          {(currentStep >= 1 || expanded) && (
            <View style={styles.receiptContainer}>
              <LinearGradient
                colors={['#38587F', '#101924']} // Left to right gradient colors
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.receiptButton} // Make sure the gradient covers the button
              >
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <BookmarkCheck
                    size={22}
                    color="#fff"
                    style={styles.receiptIcon}
                  />
                  <Text style={styles.receiptText}>Delivery Receipt</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          )}

          {visible && (
            <OrderTrackModal
              visible={visible}
              onClose={() => setVisible(!visible)}
            />
          )}

          {/* {visible && (
          <ProductModal
            visible={visible}
            onClose={() => setVisible(!visible)}
          />
        )} */}

          <View style={styles.supportContainer}>
            <View style={styles.supportButtons}>
              <Text style={styles.supportText}>Need Support?</Text>
              <LinearGradient
                colors={['#38587F', '#101924']} // Left to right gradient colors
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.receiptButton} // Make sure the gradient covers the button
              >
                <TouchableOpacity style={styles.callButton}>
                  <Phone size={16} color="#fff" />
                  <Text style={styles.buttonText}>Call</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={['#38587F', '#101924']} // Left to right gradient colors
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.receiptButton} // Make sure the gradient covers the button
              >
                <TouchableOpacity style={styles.whatsappButton}>
                  <Icon name="whatsapp" size={16} color="#fff" />
                  <Text style={styles.buttonText}>Whatsapp</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

// Individual tracking step component
const TrackingStep = ({
  title,
  dates,
  isActive,
  isCompleted,
  isFirst = false,
  isLast = false,
  expanded = false,
}) => {
  // Determine icon color based on status
  const getIconColor = () => {
    if (isCompleted) return '#3C5D87';
    if (isActive) return '#3C5D87';
    return '#D9D9D9';
  };

  // Determine background color based on status
  const getIconBgColor = () => {
    if (isCompleted) return '#3C5D87';
    if (isActive) return '#3C5D87';
    return '#D9D9D9';
  };

  // Determine line color based on status
  const getLineColor = () => {
    if (isCompleted) return '#3C5D87';
    return '#D9D9D9';
  };

  const getLineHeight = () => {
    // Base height for the step title
    let baseHeight = 24;

    // If expanded or step is active/completed, add height for each date entry
    if ((expanded || isActive || isCompleted) && dates) {
      // Each date entry takes approximately 40px (date + status + margin)
      baseHeight += dates.length * 40;
    }

    // Add some extra padding
    return baseHeight;
  };

  return (
    <View style={styles.stepContainer}>
      {/* Icon and Line */}
      <View style={styles.stepIconColumn}>
        <View
          style={[
            styles.stepIconContainer,
            {backgroundColor: getIconBgColor()},
          ]}>
          <Package size={30} color="#fff" />
        </View>

        {!isLast && (
          <View
            style={[
              styles.stepLine,
              {
                backgroundColor: getLineColor(),
                height: getLineHeight(),
              },
            ]}
          />
        )}
      </View>

      {/* Step Content */}
      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>{title}</Text>

        {/* Show dates only if expanded or step is active/completed */}
        {(expanded || isActive || isCompleted) &&
          dates &&
          dates.map((date, index) => (
            <View key={index} style={styles.dateContainer}>
              <Text style={styles.dateText}>{date.time}</Text>
              <Text style={styles.statusLabel}>{date.status}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

// Sample order data
const sampleOrder = {
  id: '1004',
  date: '20 Mar, 2025',
  status: 'Shipped',
  totalValue: '32132',
  item: {
    name: 'Nylon (Brand)',
    size: '80"56" (N • M)',
    quantity: 8,
    rating: '4.1',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-13%20at%202.12.22%E2%80%AFPM-IfiCBKoVKkOoNd8hsYfS48ezAQjkX7.png',
  },
  tracking: {
    placed: [
      {time: 'Tue, 17 Jan 2023 02:32 PM', status: 'Pending'},
      {time: 'Tue, 17 Jan 2023 02:38 PM', status: 'Generated'},
    ],
    packing: [
      {time: 'Tue, 17 Jan 2023 02:38 PM', status: 'Ready'},
      {time: 'Tue, 17 Jan 2023 02:38 PM', status: 'Packing'},
    ],
    shipping: [{time: 'Tue, 18 Jan 2023 02:38 PM', status: 'Ready to deliver'}],

    delivered: [],
  },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    flex: 1,
    // marginHorizontal: 16,
    marginVertical: 8,
    marginTop: -80,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 100,

    zIndex: 1,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  orderInfo: {
    justifyContent: 'center',
  },
  orderId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginRight: 6,
  },
  statusText: {
    fontSize: 14,
    color: '#4CAF50',
  },
  totalValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  orderItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  itemNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  ratingBadge: {
    backgroundColor: '#1E3A8A',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  itemSize: {
    fontSize: 14,
    color: '#E0E0E0',
    marginBottom: 4,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#E0E0E0',
  },
  trackingContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  expandedTracking: {
    paddingBottom: 24,
  },
  trackingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  trackingTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  expandText: {
    fontSize: 14,
    color: '#3C5D87',
    fontWeight: '500',
  },
  timeline: {
    marginLeft: 8,
  },
  stepContainer: {
    flexDirection: 'row',
    // marginBottom: 16,
  },
  stepIconColumn: {
    alignItems: 'center',
    width: 40,
  },
  stepIconContainer: {
    width: 46,
    height: 46,
    borderRadius: 50,
    backgroundColor: '#3C5D87',

    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLine: {
    width: 2,
    // height: 100,
    backgroundColor: '#DDD',
  },
  stepContent: {
    flex: 1,

    marginLeft: 12,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  dateContainer: {
    marginBottom: 8,
  },
  dateText: {
    fontSize: 14,
    color: '#666',
  },
  statusLabel: {
    fontSize: 14,
    color: '#3C5D87',
    fontWeight: '500',
  },
  receiptContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  receiptButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3C5D87',
    paddingVertical: 8,

    paddingHorizontal: 16,
    borderRadius: 20,
  },
  receiptIcon: {
    marginRight: 8,
  },
  receiptText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  supportContainer: {
    marginTop: 24,
  },
  supportText: {
    fontSize: 16,
    color: '#666',

    textAlign: 'center',
  },
  supportButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: 8,
    // paddingHorizontal: 16,
    borderRadius: 4,
    gap: 8,
  },
  whatsappButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    gap: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },

  orderDetails: {
    // marginTop: 8,

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
    textAlign: 'right',
    fontWeight: '500',
  },
  orderValueText: {
    fontSize: 13,
    textAlign: 'right',
    fontWeight: '500',
    color: '#001',
  },
  ratingContainer: {
    backgroundColor: '#1E3A8A',
    height: 24,
    width: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
  },
  orderItem: {
    borderWidth: 1,
    // backgroundColor: 'white',
    // borderRadius: 10,
    padding: 10,

    borderRadius: 8,
    borderColor: '#CCC',
    flexDirection: 'row',
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
  },
  productPrice: {
    fontSize: 15,
    fontWeight: '600',
    color: '#212121',
    marginTop: 4,
  },
  productDetails: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
});

export default OrderTracking;
