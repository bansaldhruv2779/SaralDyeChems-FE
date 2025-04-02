import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAuthState} from '../redux/slices/authSlice';
import StackNavigation from './StackNavigation';
import AuthNavigator from './AuthNavigator';
const AppNavigator = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthState = async () => {
      await dispatch(fetchAuthState());
      setLoading(false);
    };

    checkAuthState();
  }, [dispatch]);

  // Listen to changes in isAuthenticated from Redux
  useEffect(() => {
    console.log('Auth state changed:', isAuthenticated);
  }, [isAuthenticated]);

  if (loading) return null;

  // Use the Redux state directly instead of local state
  return <>{isAuthenticated ? <StackNavigation /> : <AuthNavigator />}</>;
};

export default AppNavigator;
