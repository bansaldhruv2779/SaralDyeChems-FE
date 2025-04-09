// src/redux/slices/authSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
// import storage from '../../utils/storage';
import {
  storage,
  StorageKeys,
  setItem,
  getItem,
  setBoolItem,
} from '../../utils/storage';

const BASE_URL = 'https://api.saraldyechems.com';
const api = axios.create({
  baseURL: BASE_URL,
});

// Add a response interceptor to handle expired tokens
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      storage.clearAll();
      return Promise.reject({tokenExpired: true});
    }
    return Promise.reject(error);
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({email, password}, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });

      const {user, token} = response.data;

      console.log('backend not', user);

      // Store token and user data in MMKV
      setItem(StorageKeys.AUTH_TOKEN, token);
      setItem(StorageKeys.USER_DATA, user);
      setBoolItem(StorageKeys.IS_AUTHENTICATED, true);
      return {user, token};
    } catch (error) {
      return rejectWithValue('helo', error.response.data);
    }
  },
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (
    {
      personName,
      companyName,
      businessType,
      gstNumber,
      phone,
      email,
      companyAddress,
      password,
    },
    {rejectWithValue},
  ) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, {
        personName,
        companyName,
        businessType,
        gstNumber,
        phone,
        email,
        companyAddress,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const requestOTP = createAsyncThunk(
  'auth/requestOTP',
  async ({email}, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/request-otp`, {
        email,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// **Verify OTP**
export const verifyOTP = createAsyncThunk(
  'auth/verifyOTP',
  async ({email, otp}, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/verify-otp`, {
        email,
        otp,
      });
      const {user, token} = response.data;

      // Store token and user data in MMKV after OTP verification
      setItem(StorageKeys.AUTH_TOKEN, token);
      setItem(StorageKeys.USER_DATA, user);
      setBoolItem(StorageKeys.IS_AUTHENTICATED, true);

      return {user, token};
      // return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchAuthState = createAsyncThunk(
  'auth/fetchAuthState',
  async (_, {dispatch}) => {
    const token = storage.getString(StorageKeys.AUTH_TOKEN);
    const userData = storage.getString(StorageKeys.USER_DATA);
    const isAuthenticated = storage.getBoolean(StorageKeys.IS_AUTHENTICATED);

    console.log(token, userData, isAuthenticated);

    // If we have a token, verify it's not expired
    if (token) {
      try {
        // Make a simple request to verify token
        await axios.get(`${BASE_URL}/auth/me`, {
          headers: {Authorization: `Bearer ${token}`},
        });
      } catch (error) {
        // If token expired, logout
        if (error.response && error.response.status === 401) {
          dispatch(logout());
          return {
            token: null,
            user: null,
            isAuthenticated: false,
          };
        }
      }
    }

    return {
      token,
      user: userData ? JSON.parse(userData) : null,
      isAuthenticated: !!isAuthenticated,
    };
  },
);

// Request Password Reset
export const requestPasswordReset = createAsyncThunk(
  'auth/requestPasswordReset',
  async ({email}, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/forgot-password`, {
        email,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Reset Password
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({email, otp, newPassword}, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/reset-password`, {
        email,
        otp,
        newPassword,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: getItem(StorageKeys.USER_DATA), // Load user from storage
    token: getItem(StorageKeys.AUTH_TOKEN), // Load token from storage
    isAuthenticated: getItem(StorageKeys.IS_AUTHENTICATED) === 'true',
    loading: false,
    error: null,
    otpSent: false,
    otpVerified: false,
    passwordResetRequested: false,
    passwordResetSuccess: false,
    showVariants: false, // Moved from useState
  },
  reducers: {
    logout: state => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.otpSent = false;
      state.otpVerified = false;
      storage.clearAll();
    },
    toggleShowVariants: state => {
      state.showVariants = !state.showVariants;
    },
  },
  extraReducers: builder => {
    builder
      // Login cases
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Login failed';
      })
      // Register cases
      .addCase(registerUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Registration failed';
      })
      // Request OTP cases
      .addCase(requestOTP.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestOTP.fulfilled, state => {
        state.loading = false;
        state.otpSent = true;
      })
      .addCase(requestOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to send OTP';
      })
      // Verify OTP cases
      .addCase(verifyOTP.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, state => {
        state.loading = false;
        state.otpVerified = true;
        state.isAuthenticated = true;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Invalid OTP';
      })
      .addCase(fetchAuthState.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = action.payload.isAuthenticated;
        state.loading = false;
      })
      // Reset password
      .addCase(requestPasswordReset.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestPasswordReset.fulfilled, state => {
        state.loading = false;
        state.passwordResetRequested = true;
      })
      .addCase(requestPasswordReset.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || 'Failed to send password reset OTP';
      })
      .addCase(resetPassword.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, state => {
        state.loading = false;
        state.passwordResetSuccess = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to reset password';
      });
  },
});

export const {toggleShowVariants} = authSlice.actions;
export const {logout} = authSlice.actions;
export default authSlice.reducer;
