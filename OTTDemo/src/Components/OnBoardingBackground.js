import React from 'react';
import {View, ImageBackground} from 'react-native';
import loginStyle from '../styles/loginStyle';
const FullScreenBackground = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../images/background.jpeg')}
      style={loginStyle.backgoundImageView}
    />
  );
};

export default FullScreenBackground;
