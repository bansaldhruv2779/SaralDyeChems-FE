// src/utils/storage.js
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const StorageKeys = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  IS_AUTHENTICATED: 'is_authenticated',
};

export const setItem = (key, value) => {
  if (typeof value === 'string') {
    storage.set(key, value);
  } else {
    storage.set(key, JSON.stringify(value));
  }
};

export const getItem = key => {
  const value = storage.getString(key);
  try {
    return value ? JSON.parse(value) : null;
  } catch (error) {
    return value;
  }
};

export const getBoolItem = key => {
  return storage.getBoolean(key) || false;
};

export const setBoolItem = (key, value) => {
  storage.set(key, value);
};

export const removeItem = key => {
  storage.delete(key);
};

export const clearAll = () => {
  storage.clearAll();
};
