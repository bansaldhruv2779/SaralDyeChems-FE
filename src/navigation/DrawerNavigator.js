// src/DrawerNavigator.js
import React, {useContext, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigator from './BottomNavigator';
import DrawerContent from './SideDrawer'; // Import the custom drawer content
import {ROUTES} from '../constants/routes';
import {useNavigation} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />} // Use custom drawer content
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white', // Replace with your preferred color
        },
        headerStyle: {
          backgroundColor: '#EFEFEF', // Replace with your preferred color
        },
        headerTintColor: '#FFF', // Replace with your preferred color
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Drawer.Screen
        name=" "
        component={BottomNavigator}
        options={{headerShown: true}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
