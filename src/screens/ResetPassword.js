import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../assets/logo.png';
import {useDispatch, useSelector} from 'react-redux';
import {requestPasswordReset} from '../redux/slices/authSlice';
import {ROUTES} from '../constants/routes';

export default function ResetPassword({navigation}) {
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.auth);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const errorToastAnim = useRef(new Animated.Value(-100)).current;

  const showErrorToast = message => {
    setErrorMessage(message);
    Animated.sequence([
      Animated.timing(errorToastAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.delay(5000),
      Animated.timing(errorToastAnim, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => setErrorMessage(''));
  };

  const handleChange = (field, value) => {
    if (field === 'email') {
      setEmail(value);
    }
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!email || email.trim() === '') {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleResetPassword = async () => {
    if (!validateForm()) {
      showErrorToast('Please check all fields and try again');
      return;
    }
    try {
      await dispatch(requestPasswordReset({email})).unwrap();
      navigation.navigate('OTP', {email});
    } catch (err) {
      let errorMsg = 'Failed to send reset request. Try again later.';
      console.log('er', err.message);
      if (err?.message) {
        errorMsg = err.message;
      } else if (err?.data?.message) {
        errorMsg = err.data.message;
      }
      showErrorToast(errorMsg);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={{width: '100%', justifyContent: 'space-between'}}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Image
              source={logo}
              style={{width: 140, marginLeft: 20, height: 140}}
            />
          </View>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="Enter your email"
            placeholderTextColor="#555"
            keyboardType="email-address"
            value={email}
            onChangeText={text => handleChange('email', text)}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={[
              styles.loginButtonContainer,
              loading && styles.buttonDisabled,
            ]}
            onPress={handleResetPassword}
            disabled={loading}>
            <LinearGradient
              colors={['#2B4C7E', '#121C29']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Request Reset Link</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      {errorMessage !== '' && (
        <Animated.View
          style={[
            styles.errorToast,
            {transform: [{translateY: errorToastAnim}]},
          ]}>
          <Text style={styles.errorToastText}>{errorMessage}</Text>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(244, 249, 255,0.9)',
    height: '100%',
    width: '100%',
  },
  circle1: {
    position: 'absolute',
    top: -70,
    left: -120,
    width: 200,
    height: 200,
    borderRadius: 150,
    backgroundColor: '#8BA1C3',
    opacity: 0.7,
    zIndex: 1,
  },
  circle2: {
    position: 'absolute',
    top: -90,
    left: 7,
    width: 170,
    height: 170,
    borderRadius: 100,
    backgroundColor: '#8BA1C3',
    opacity: 0.7,
    zIndex: 0,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 100,
    width: '100%',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#555',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 100, // Reduced elevation for Android
  },
  formContainer: {
    paddingHorizontal: 40,
    // flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    width: '100%',
    height: 50,
    color: 'black',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 15,
    fontSize: 16,
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 0,
  },
  inputError: {
    borderColor: '#ff0000',
  },
  loginButtonContainer: {
    width: '100%',
    height: 50,
    marginTop: 20,
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 100, // Reduced elevation for Android
  },
  loginButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B4C7E',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    marginTop: 20,
    width: '100%',
  },
  forgotPassword: {
    color: '#2B4C7E',
    textAlign: 'center',
    marginVertical: 10,
  },
  signupText: {
    color: '#666',
  },
  signupLink: {
    color: '#2B4C7E',
    fontWeight: '600',
    marginLeft: 5,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  errorToast: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#ff6b6b',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  errorToastText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
  },
});
