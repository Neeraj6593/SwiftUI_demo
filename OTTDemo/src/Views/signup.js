import React from 'react';
import {View, TextInput, Button, Image, ActivityIndicator} from 'react-native';
import SignUpStyle from '../styles/SignUpStyle';
import staticData from '../Configuration/String';
import Colors from '../Configuration/Colors';
import FullScreenBackground from '../Components/OnBoardingBackground';
import OpacityView from '../Components/Opacity';
import SignUpViewModel from '../ViewModel/SignUpViewModel';
import {useState} from 'react';
var SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [username, setUsername] = useState('');
  const [invlidEmail, setInvalidemail] = useState(false);
  const [invlidMobile, setInvalidMobile] = useState(false);
  const [confirmPasswordMatched, setConfirmPasswordMatched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const viewModel = new SignUpViewModel();

  // eslint-disable-next-line no-undef
  emailUpdated = value => {
    let result = !viewModel.emailValid(value);
    setInvalidemail(result);
    setEmail(value);
  };
  // eslint-disable-next-line no-undef
  mobileUpdated = value => {
    let result = !viewModel.mobileValid(value);
    setInvalidMobile(result);
    setMobile(value);
  };
  // eslint-disable-next-line no-undef
  confirmPasswordUpdated = value => {
    setConfirmPassword(value);
    if (password == value) {
      setConfirmPasswordMatched(true);
    } else {
      setConfirmPasswordMatched(false);
    }
  };
  // eslint-disable-next-line no-undef
  signUpClicked = async () => {
    // eslint-disable-next-line prettier/prettier
    const result = viewModel.validateInputs(
      email,
      password,
      confirmPassword,
      mobile,
      username,
    );
    if (result == true) {
      setIsLoading(true);
      if ((await viewModel.signUpApiCall(email, password)) == true) {
        if ((await viewModel.createUser(email, username, mobile)) == true) {
          navigation.navigate('Login Screen');
        }
      }
    }
  };

  return (
    <View>
      <FullScreenBackground />
      <View style={SignUpStyle.controlsView}>
        <OpacityView height={80} />
        <View>
          <Image
            style={SignUpStyle.logoImage}
            source={require('../images/entertainment.png')}
          />
        </View>
        <TextInput
          style={SignUpStyle.textViews(Colors.theme1)}
          placeholder={staticData.username}
          onChangeText={value => setUsername(value)}
        />
        <TextInput
          style={SignUpStyle.textViews(
            invlidMobile == true ? 'red' : Colors.theme1,
          )}
          placeholder={staticData.mobile}
          // eslint-disable-next-line no-undef
          onChangeText={value => mobileUpdated(value)}
        />
        <TextInput
          style={SignUpStyle.textViews(
            invlidEmail == true ? 'red' : Colors.theme1,
          )}
          placeholder={staticData.email}
          // eslint-disable-next-line no-undef
          onChangeText={value => emailUpdated(value)}
        />
        <TextInput
          style={SignUpStyle.textViews(Colors.theme1)}
          placeholder={staticData.password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
        />
        <TextInput
          style={SignUpStyle.textViews(
            confirmPasswordMatched == false ? 'red' : Colors.theme1,
          )}
          placeholder={staticData.confirmPassword}
          // eslint-disable-next-line no-undef
          onChangeText={value => confirmPasswordUpdated(value)}
          secureTextEntry
        />
        <View style={SignUpStyle.loginButtons}>
          <Button
            title={staticData.signUp}
            color={Colors.theme2}
            onPress={() => {
              // eslint-disable-next-line no-undef
              signUpClicked();
            }}
          />
        </View>
        <View style={SignUpStyle.otherButtonsView}>
          <View>
            <Button
              title={staticData.alreadyHaveAnAccount}
              color={Colors.theme1}
              onPress={() => {
                navigation.navigate('Login Screen');
              }}
            />
          </View>
        </View>
      </View>
      {isLoading && (
        <View style={SignUpStyle.loading}>
          <View>
            <ActivityIndicator size="large" color="black" />
          </View>
        </View>
      )}
    </View>
  );
};

export default SignupScreen;
