import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/slices/authSlice';
import logo from '../assets/logo.png';
import {ROUTES} from '../constants/routes';

const {width} = Dimensions.get('window');

const MenuItem = ({title, onPress, isLast}) => (
  <TouchableOpacity
    style={[styles.menuItem, isLast ? styles.lastMenuItem : null]}
    onPress={onPress}>
    <Text style={styles.menuText}>{title}</Text>
  </TouchableOpacity>
);

// This component should only be the drawer content, not the whole drawer structure
const CustomDrawerContent = props => {
  const dispatch = useDispatch();
  const {navigation} = props;

  const handleLogout = () => {
    dispatch(logout());
    navigation.closeDrawer();
  };

  const navigateTo = routeName => {
    console.log(routeName);
    navigation.closeDrawer();
    // navigation.navigate(routeName);
  };

  const menuItems = [
    {title: 'Home', route: 'Home'},
    {title: 'Products', route: 'products'},
    {title: 'Order History', route: 'history'},
    {title: 'Order Tracking', route: 'tracking'},
    {title: 'My Profile', route: 'PROFILE'},
    {title: 'Settings', route: 'Settings'},
    {title: 'Help & Support', route: 'Support'},
    {title: 'About Us', route: 'About'},
    {title: 'Terms & Conditions', route: 'Terms'},
    {title: 'Logout', action: handleLogout},
  ];

  return (
    <SafeAreaView style={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <TouchableOpacity
          style={styles.drawerLogo}
          onPress={() => navigation.closeDrawer()}>
          <Image
            source={logo}
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
            }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.menuItems}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            isLast={index === menuItems.length - 1}
            onPress={item.action ? item.action : () => navigateTo(item.route)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {flex: 1},
  drawerHeader: {
    backgroundColor: '#3C5D87',
    borderBottomRightRadius: 20,
    padding: 15,
  },
  drawerLogo: {
    backgroundColor: '#FFF',
    borderRadius: 100,
    padding: 10,
    width: 60,
    height: 60,
    alignItems: 'center',
  },
  drawerTitle: {color: '#FFF', fontSize: 18, fontWeight: '600'},
  menuItems: {flex: 1},
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  menuText: {fontSize: 16, color: '#3C5D87', fontWeight: '500'},
});

export default CustomDrawerContent;
