// theme.js
import {StyleSheet} from 'react-native';

export const fonts = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  light: 'Poppins-Light',
  thin: 'Poppins-Thin',
  bold: 'Poppins-Bold',
  semiBold: 'Poppins-SemiBold',
  extraBold: 'Poppins-ExtraBold',
  italic: 'Poppins-Italic',
};

export const globalStyles = StyleSheet.create({
  text: {
    fontFamily: fonts.regular,
  },
  heading: {
    fontFamily: fonts.bold,
  },
  subheading: {
    fontFamily: fonts.semiBold,
  },
  caption: {
    fontFamily: fonts.light,
  },
});
