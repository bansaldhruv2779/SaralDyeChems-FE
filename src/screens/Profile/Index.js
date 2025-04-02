import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import DashboardHeader from '../../components/DashBoardHeader';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/slices/authSlice';

import {ROUTES} from '../../constants/routes';
import {useNavigation} from '@react-navigation/native';

const MenuItem = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuIconContainer}>
        <View style={styles.menuIcon} />
      </View>
      <Text style={styles.menuText}>{title}</Text>
      <Icon name="chevron-right" size={20} color="#000" />
    </TouchableOpacity>
  );
};

const Profile = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const user = useSelector(state => state.auth.user); // Make sure the path is correct

  console.log('users', user);

  // Check if user exists, else fallback to default value
  const userName = user?.name || 'John Deo';
  const userEmail = user?.email || 'JohnDeo@gmail.com';

  // Logout function
  const handleLogout = () => {
    // navigation.navigate(ROUTES.LOGIN);
    dispatch(logout());
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <DashboardHeader />
      <View style={[styles.container, {paddingTop: insets.top}]}>
        <View style={styles.profileContainer}>
          <View style={styles.profileHeader}>
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/9153/e528/226e9714d86e9909ec7a7afbb487e6f4?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ju5708~~du1MFBfTBMUJCXylWkupwwj~LkOtnGrmiNO-htDfMWhJyVGM1u6FVPIjqGmz506XWeXSI7NIHDnC8LJ3ThsMPrn8HCfoELG~cWMeK0Yz4zhpJphgAsxi04VZjHaJ2Ur1zXvmpInxpT0b-GatZl13gE5au2xQrCMZrnwgblTwpgcYLogvFeaWhui8vp49gl6QssPmS9j5wZWKevdiZkJpAgtVvr7YfdJvoPJ7WYMCWBGPPZfjz0M58GrYjfNVXLFeNqJ3cyworsc~-c71D3hhCPkOYbWBkHLF~3Mlmc~uoemnpUP8RPEWe6mto-OsM6a1cGFEecsLtwJHIQ__',
              }}
              style={styles.profileAvatar}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{userName}</Text>
              <Text style={styles.profileEmail}>{userEmail}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>YOUR INFORMATION</Text>
          <MenuItem title="Order Traking" onPress={() => {}} />
          <View style={styles.divider} />
          <MenuItem title="Order history" onPress={() => {}} />
          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>OTHER INFORMATION</Text>
          <MenuItem title="Share the app" onPress={() => {}} />
          <View style={styles.divider} />
          <MenuItem title="About us" onPress={() => {}} />
          <View style={styles.divider} />
          <MenuItem title="Log out" onPress={handleLogout} />
          <View style={styles.divider} />
        </View>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    marginTop: -30,
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3b5998',
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: 50,
  },
  menuButton: {
    padding: 5,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButton: {
    marginRight: 15,
  },
  profileButton: {
    position: 'relative',
  },
  headerAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#d3d3d3',
  },

  profileContainer: {
    backgroundColor: 'white',
    marginTop: -50,
    borderRadius: 20,
    paddingBottom: 50,
    overflow: 'hidden',
    shadowColor: '#F4F9FF',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 100,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#d3d3d3',
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: '#001',
    marginTop: 4,
  },
  divider: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#011',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#001',
    marginVertical: 12,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#cad3e0',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
});
