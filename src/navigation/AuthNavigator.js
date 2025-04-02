// src/navigation/AppNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import EmailOtp from '../screens/EmailOtp';
import {StatusBar} from 'react-native';
import {ROUTES} from '../constants/routes';
import {ResetPassword} from '../screens';
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <>
      <StatusBar backgroundColor="#F4F9FF" barStyle="dark-content" hidden />
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={EmailOtp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTES.RESET_PASSWORD}
          component={ResetPassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
