import React from 'react';
import {View, TextInput, Button, Image, ActivityIndicator} from 'react-native';
import loginStyle from '../styles/loginStyle';
import staticData from '../Configuration/String';
import Colors from '../Configuration/Colors';
import FullScreenBackground from '../Components/OnBoardingBackground';
import OpacityView from '../Components/Opacity';
import {useState} from 'react';
import SignInViewModel from '../ViewModel/SignInViewModel';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const viewModel = new SignInViewModel();
  // eslint-disable-next-line no-undef
  const signInClicked = async () => {
    const result = viewModel.validateInputs(email, password);
    if (result == true) {
      setIsLoading(true);
      if ((await viewModel.signUpApiCall(email, password)) == true) {
        setIsLoading(false);
        navigation.navigate('Home');
      }
      setIsLoading(false);
    }
  };

  return (
    <View>
      <FullScreenBackground />
      <View style={loginStyle.controlsView}>
        <OpacityView height={55} />
        <View>
          <Image
            style={loginStyle.logoImage}
            source={require('../images/entertainment.png')}
          />
        </View>
        <TextInput
          style={loginStyle.textViews}
          placeholder={staticData.email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          style={loginStyle.textViews}
          placeholder={staticData.password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
        />
        <View style={loginStyle.loginButtons}>
          <Button
            title={staticData.login}
            color={Colors.theme2}
            onPress={() => {
              // eslint-disable-next-line no-undef
              signInClicked();
            }}
          />
        </View>
        <View style={loginStyle.otherButtonsView}>
          <View style={loginStyle.forgotButton}>
            <Button
              title={staticData.forgetPassword}
              color={Colors.theme1}
              onPress={() => {}}
            />
          </View>
          <View style={loginStyle.spacer}></View>
          <View style={loginStyle.signupButton}>
            <Button
              title={staticData.signUp}
              color={Colors.theme1}
              onPress={() => {
                navigation.navigate('Sign Up');
              }}
            />
          </View>
        </View>
      </View>
      {isLoading && (
        <View style={loginStyle.loading}>
          <View>
            <ActivityIndicator size="large" color="black" />
          </View>
        </View>
      )}
    </View>
  );
};

export default LoginScreen;
