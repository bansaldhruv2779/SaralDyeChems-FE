// components/Typography.js
import React from 'react';
import {Text} from 'react-native';
import {globalStyles, fonts} from '../theme';

export const Heading = props => {
  const {style, ...rest} = props;
  return <Text style={[globalStyles.heading, style]} {...rest} />;
};

export const Subheading = props => {
  const {style, ...rest} = props;
  return <Text style={[globalStyles.subheading, style]} {...rest} />;
};

export const Caption = props => {
  const {style, ...rest} = props;
  return <Text style={[globalStyles.caption, style]} {...rest} />;
};

// Example of creating custom weight components if needed
export const BoldText = props => {
  const {style, ...rest} = props;
  return <Text style={[{fontFamily: fonts.bold}, style]} {...rest} />;
};
