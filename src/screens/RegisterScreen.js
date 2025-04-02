import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  Animated,
} from 'react-native';
import React, {useState, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {registerUser} from '../redux/slices/authSlice';
import logo from '../assets/logo.png';

const RegisterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const errorToastAnim = useRef(new Animated.Value(-100)).current;
  const [errorMessage, setErrorMessage] = useState('');
  // Form state
  const [formData, setFormData] = useState({
    personName: '',
    companyName: '',
    businessType: '',
    gstNo: '',
    phone: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  // Error state
  const [errors, setErrors] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const businessTypes = [
    'Retail',
    'Wholesale',
    'Manufacturing',
    'Service',
    'Technology',
  ];

  const showErrorToast = message => {
    setErrorMessage(message);

    Animated.sequence([
      Animated.timing(errorToastAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.delay(5000), // Stay visible for 5 seconds
      Animated.timing(errorToastAnim, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // After animation completes, clear the error message
      setErrorMessage('');
    });
  };

  // Handle input changes
  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  // Handle business type selection
  const handleBusinessTypeSelect = type => {
    handleChange('businessType', type);
    setIsDropdownOpen(false);
  };

  // Validation function
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.personName) tempErrors.personName = 'Name is required';
    if (!formData.companyName)
      tempErrors.companyName = 'Company name is required';
    if (!formData.businessType)
      tempErrors.businessType = 'Business type is required';
    if (!formData.gstNo) tempErrors.gstNo = 'GST number is required';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = 'Valid 10-digit phone number is required';
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Valid email is required';
    }
    if (!formData.address) tempErrors.address = 'Address is required';
    if (!formData.password || formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle registration
  const handleRegister = async () => {
    if (!validateForm()) {
      showErrorToast('Please check all fields and try again');
      return;
    }

    setIsLoading(true);
    try {
      const response = await dispatch(
        registerUser({
          email: formData.email,
          password: formData.password,
          companyName: formData.companyName,
          personName: formData.personName,
          businessType: formData.businessType,
          gstNumber: formData.gstNo,
          phone: formData.phone,
          companyAddress: formData.address,
        }),
      ).unwrap();

      // Show success message and navigate to OTP screen
      navigation.navigate('OTP', {email: formData.email});
    } catch (error) {
      console.log(error);
      let errorMsg = 'Registration failed. Please try again.';

      if (error.message === 'User with this email already exists.') {
        errorMsg =
          'This email is already registered. Please use a different email.';
      } else if (error.message) {
        errorMsg = error.message;
      }

      showErrorToast(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <ScrollView style={{flex: 1, width: '100%'}}>
        <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Image
                source={logo}
                style={{width: 80, marginLeft: 10, height: 80}}
              />
            </View>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            <TextInput
              style={[styles.input, errors.personName && styles.inputError]}
              placeholder="Person Name"
              placeholderTextColor="#555"
              value={formData.personName}
              onChangeText={text => handleChange('personName', text)}
            />
            {/* {errors.personName && (
              <Text style={styles.errorText}>{errors.personName}</Text>
            )} */}

            <TextInput
              style={[styles.input, errors.companyName && styles.inputError]}
              placeholder="Company Name"
              placeholderTextColor="#555"
              value={formData.companyName}
              onChangeText={text => handleChange('companyName', text)}
            />
            {/* {errors.companyName && (
              <Text style={styles.errorText}>{errors.companyName}</Text>
            )} */}

            {/* Custom Dropdown */}
            <View style={styles.dropdownContainer}>
              <TouchableOpacity
                style={[
                  styles.dropdownButton,
                  errors.businessType && styles.inputError,
                ]}
                onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
                <Text style={styles.dropdownButtonText}>
                  {formData.businessType || 'Select Business Type'}
                </Text>
                <Text style={styles.dropdownArrow}>▼</Text>
              </TouchableOpacity>
              {isDropdownOpen && (
                <View style={styles.dropdownList}>
                  {businessTypes.map((type, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.dropdownItem}
                      onPress={() => handleBusinessTypeSelect(type)}>
                      <Text style={styles.dropdownItemText}>{type}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
            {/* {errors.businessType && (
              <Text style={styles.errorText}>{errors.businessType}</Text>
            )} */}

            <TextInput
              style={[styles.input, errors.gstNo && styles.inputError]}
              placeholder="GST No."
              placeholderTextColor="#555"
              value={formData.gstNo}
              onChangeText={text => handleChange('gstNo', text)}
            />
            {/* {errors.gstNo && (
              <Text style={styles.errorText}>{errors.gstNo}</Text>
            )} */}

            <TextInput
              style={[styles.input, errors.phone && styles.inputError]}
              placeholder="Phone"
              placeholderTextColor="#555"
              keyboardType="phone-pad"
              value={formData.phone}
              onChangeText={text => handleChange('phone', text)}
            />
            {/* {errors.phone && (
              <Text style={styles.errorText}>{errors.phone}</Text>
            )} */}

            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="Enter you email"
              placeholderTextColor="#555"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.email}
              onChangeText={text => handleChange('email', text)}
            />
            {/* {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )} */}

            <TextInput
              style={[styles.input, errors.address && styles.inputError]}
              placeholder="Company Address"
              placeholderTextColor="#555"
              multiline
              value={formData.address}
              onChangeText={text => handleChange('address', text)}
            />
            {/* {errors.address && (
              <Text style={styles.errorText}>{errors.address}</Text>
            )} */}

            <TextInput
              style={[styles.input, errors.password && styles.inputError]}
              placeholder="Password"
              placeholderTextColor="#555"
              secureTextEntry
              value={formData.password}
              onChangeText={text => handleChange('password', text)}
            />

            <TextInput
              style={[
                styles.input,
                errors.confirmPassword && styles.inputError,
              ]}
              placeholder="Confirm Password"
              placeholderTextColor="#555"
              secureTextEntry
              value={formData.confirmPassword}
              onChangeText={text => handleChange('confirmPassword', text)}
            />
            {/* {errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )} */}

            <TouchableOpacity
              style={[
                styles.loginButtonContainer,
                isLoading && styles.buttonDisabled,
              ]}
              onPress={handleRegister}
              disabled={isLoading}>
              <LinearGradient
                colors={['#2B4C7E', '#121C29']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.loginButton}>
                <Text style={styles.loginButtonText}>
                  {isLoading ? 'Registering...' : 'Register'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signupLink}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {errorMessage !== '' && (
        <Animated.View
          style={[
            styles.errorToast,
            {
              transform: [{translateY: errorToastAnim}],
            },
          ]}>
          <Text style={styles.errorToastText}>{errorMessage}</Text>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(244, 249, 255,0.9)',
    height: '100%',
    width: '100%',
    paddingBottom: 20,
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
    zIndex: 0,
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
    marginTop: 60,
    marginBottom: 20,
    width: '100%',
  },
  logo: {
    width: 110,
    height: 110,
    borderRadius: 80,
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
    elevation: 100,
  },
  formContainer: {
    paddingHorizontal: 40,
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
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
  // New dropdown styles
  dropdownContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 15,
    zIndex: 1000,
  },
  dropdownButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#555',
  },
  dropdownArrow: {
    fontSize: 16,
    color: '#555',
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#DDD',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#555',
  },
  // inputError: {
  //   borderColor: '#ff0000',
  // },
  // errorText: {
  //   color: '#ff0000',
  //   fontSize: 12,
  //   marginTop: -10,
  //   marginBottom: 10,
  //   marginLeft: 20,
  // },
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
    elevation: 100,
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
    paddingBottom: 20,
    marginTop: 10,
    width: '100%',
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

export default RegisterScreen;
