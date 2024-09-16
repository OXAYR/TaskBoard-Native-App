import {Text as RNText, StyleSheet} from 'react-native';
import React, {Children} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const CustomText = props => {
  return (
    <RNText
      allowFontScaling={false}
      style={props?.style ? props?.style : style.text}>
      {props?.text}
    </RNText>
  );
};

const style = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
export default CustomText;
