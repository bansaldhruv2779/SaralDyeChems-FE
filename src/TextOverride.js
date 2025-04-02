// TextOverride.js
import React from 'react';
import {Text as RNText} from 'react-native';
import {globalStyles} from './theme';

// Override the default Text component
const Text = props => {
  const {style, ...rest} = props;
  return <RNText style={[globalStyles.text, style]} {...rest} />;
};

// Export our custom Text component as the default
export {Text};

// Usage in other files:
// import { Text } from './TextOverride';
