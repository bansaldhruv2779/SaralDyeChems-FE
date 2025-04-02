// components/CustomText.js
import React from 'react';
import {Text} from 'react-native';
import {globalStyles} from '../theme';

const CustomText = props => {
  const {style, ...rest} = props;
  return <Text style={[globalStyles.text, style]} {...rest} />;
};

export default CustomText;
