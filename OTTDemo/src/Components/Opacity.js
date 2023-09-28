import React from 'react';
import {View, ImageBackground} from 'react-native';
import loginStyle from '../styles/loginStyle';
const OpacityView = props => {
  return <View style={loginStyle.opacityView(props.height)} />;
};
export default OpacityView;
