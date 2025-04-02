import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Make sure to install expo/vector-icons if not already installed

const OrderTrackModal = ({visible, onClose, orderData}) => {
  // Sample data based on the screenshot
  const sampleOrderData = {
    orderNumber: '8234',
    date: '20 Mar, 2025',
    status: 'Processing',
    items: [
      {
        id: 1,
        name: 'Nylon',
        brand: 'Brand',
        size: '80*56" (N * M)',
        quantity: 8,
        image:
          'https://s3-alpha-sig.figma.com/img/4f5a/8713/fa4ef7fec5ff73309653f4bd9e47df47?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ucFgTbikmyISCqC0oAY1bqTrA0DlMo5L~0VBEozWD0DPsl50eOWFAa0pNcyIge-V~2wyql0NIivL8baESabavtyal3APkS2qYYK~RiQWb-6jIm-z8hX2XwdlX15fve1aXx0LSVoKxJ2n6eoBPXDxSXFz7bp7q8tq4X8p08hl1ysUGsAnPgCS3DVCobsU1dlRNNgfai1deNACDHqY9V9HWrjn3eoqp0KekA3xqE8vO6aVf52stOB7PwaMSaNOhNkfTbNQ~u1-04k9~mHjCiLHTnXYN2QUjwQOwsn6LccjUwUudxRYY-SX2gDfMoXKQq6CfK1FpS0EXS2E5hNFd2vaBQ__', // Replace with actual image URL
      },
      {
        id: 2,
        name: 'Nylon',
        brand: 'Brand',
        size: '80*56" (N * M)',
        quantity: 8,
        image:
          'https://s3-alpha-sig.figma.com/img/4f5a/8713/fa4ef7fec5ff73309653f4bd9e47df47?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ucFgTbikmyISCqC0oAY1bqTrA0DlMo5L~0VBEozWD0DPsl50eOWFAa0pNcyIge-V~2wyql0NIivL8baESabavtyal3APkS2qYYK~RiQWb-6jIm-z8hX2XwdlX15fve1aXx0LSVoKxJ2n6eoBPXDxSXFz7bp7q8tq4X8p08hl1ysUGsAnPgCS3DVCobsU1dlRNNgfai1deNACDHqY9V9HWrjn3eoqp0KekA3xqE8vO6aVf52stOB7PwaMSaNOhNkfTbNQ~u1-04k9~mHjCiLHTnXYN2QUjwQOwsn6LccjUwUudxRYY-SX2gDfMoXKQq6CfK1FpS0EXS2E5hNFd2vaBQ__', // Replace with actual image URL
      },
      {
        id: 3,
        name: 'Nylon',
        brand: 'Brand',
        size: '80*56" (N * M)',
        quantity: 8,
        image:
          'https://s3-alpha-sig.figma.com/img/4f5a/8713/fa4ef7fec5ff73309653f4bd9e47df47?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ucFgTbikmyISCqC0oAY1bqTrA0DlMo5L~0VBEozWD0DPsl50eOWFAa0pNcyIge-V~2wyql0NIivL8baESabavtyal3APkS2qYYK~RiQWb-6jIm-z8hX2XwdlX15fve1aXx0LSVoKxJ2n6eoBPXDxSXFz7bp7q8tq4X8p08hl1ysUGsAnPgCS3DVCobsU1dlRNNgfai1deNACDHqY9V9HWrjn3eoqp0KekA3xqE8vO6aVf52stOB7PwaMSaNOhNkfTbNQ~u1-04k9~mHjCiLHTnXYN2QUjwQOwsn6LccjUwUudxRYY-SX2gDfMoXKQq6CfK1FpS0EXS2E5hNFd2vaBQ__', // Replace with actual image URL
      },
      {
        id: 4,
        name: 'Nylon',
        brand: 'Brand',
        size: '80*56" (N * M)',
        quantity: 8,
        image:
          'https://s3-alpha-sig.figma.com/img/4f5a/8713/fa4ef7fec5ff73309653f4bd9e47df47?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ucFgTbikmyISCqC0oAY1bqTrA0DlMo5L~0VBEozWD0DPsl50eOWFAa0pNcyIge-V~2wyql0NIivL8baESabavtyal3APkS2qYYK~RiQWb-6jIm-z8hX2XwdlX15fve1aXx0LSVoKxJ2n6eoBPXDxSXFz7bp7q8tq4X8p08hl1ysUGsAnPgCS3DVCobsU1dlRNNgfai1deNACDHqY9V9HWrjn3eoqp0KekA3xqE8vO6aVf52stOB7PwaMSaNOhNkfTbNQ~u1-04k9~mHjCiLHTnXYN2QUjwQOwsn6LccjUwUudxRYY-SX2gDfMoXKQq6CfK1FpS0EXS2E5hNFd2vaBQ__', // Replace with actual image URL
      },
    ],
    totalTax: 1500.0,
    subtotal: 1400.0,
    total: 2900.0,
  };

  // Use provided data or fallback to sample data
  const data = orderData || sampleOrderData;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.headerContainer}>
              <View>
                <Text style={styles.orderNumber}>
                  Order #{data.orderNumber}
                </Text>
                <Text style={styles.orderDate}>Placed on {data.date}</Text>
              </View>
              <View style={styles.actionContainer}>
                <LinearGradient
                  colors={['#38587F', '#101924']} // Left to right gradient colors
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={{borderRadius: 50}}
                  //   style={styles.receiptButton} // Make sure the gradient covers the button
                >
                  <TouchableOpacity style={styles.repeatButton}>
                    <Text style={styles.repeatButtonText}>Repeat Order</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>{data.status}</Text>
                </View>
              </View>
            </View>

            {data.items.map(item => (
              <View key={item.id} style={styles.itemContainer}>
                <Image source={{uri: item.image}} style={styles.itemImage} />
                <View style={styles.itemDetails}>
                  <View style={styles.nameContainer}>
                    <Text style={styles.itemName}>{item.name} </Text>
                    <Text style={styles.itemBrand}>({item.brand})</Text>
                  </View>
                  <Text style={styles.itemSize}>{item.size}</Text>
                  <Text style={styles.itemQuantity}>
                    Quantity: {item.quantity}
                  </Text>
                </View>
              </View>
            ))}

            <View style={styles.summaryContainer}>
              <TouchableOpacity style={styles.downloadButton}>
                <Ionicons name="download" size={18} color="#4267B2" />
                <Text style={styles.downloadText}>Download Invoice</Text>
              </TouchableOpacity>
              <View>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Total Tax :</Text>
                  <Text style={styles.summaryValue}>
                    ${data.totalTax.toFixed(2)}
                  </Text>
                </View>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Subtotal :</Text>
                  <Text style={styles.summaryValue}>
                    ${data.subtotal.toFixed(2)}
                  </Text>
                </View>
                <View style={styles.summaryRow}>
                  <Text style={styles.summaryLabel}>Total :</Text>
                  <Text style={[styles.summaryValue, styles.totalValue]}>
                    ${data.total.toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.trackingButton}>
              <View style={styles.trackingDot} />
              <Text style={styles.trackingText}>Order Tracking</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalView: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  orderNumber: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  orderDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  repeatButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  repeatButtonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
  },
  statusBadge: {
    backgroundColor: '#FFEBE6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginLeft: 5,
    borderRadius: 15,
  },
  statusText: {
    color: '#FF6347',
    fontSize: 10,
    fontWeight: '500',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  itemBrand: {
    fontSize: 16,
    color: '#666',
  },
  itemSize: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  summaryContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  summaryRow: {
    flexDirection: 'row',
    alignSelf: 'right',
    marginBottom: 5,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  totalValue: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  downloadText: {
    color: '#4267B2',
    marginLeft: 5,
    fontSize: 14,
  },
  trackingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    width: '40%',
    backgroundColor: '#FFF',
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 10,
  },
  trackingDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4CAF50',
    marginRight: 8,
    elevation: 2,
    shadowColor: '#4CAF50',
    shadowOffset: {width: 0, height: 2}, // Offset in x and y direction
    shadowOpacity: 1, // Opacity of the shadow
    shadowRadius: 4, // Blur radius
  },

  trackingText: {
    color: '#4CAF50',
    fontWeight: '500',
  },
});

export default OrderTrackModal;
