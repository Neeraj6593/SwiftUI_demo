import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../Configuration/Colors';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const loginStyle = StyleSheet.create({
  backgoundImageView: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 30,
  },
  loading: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  opacityView(height) {
    return {
      position: 'absolute',
      width: (90 / 100) * screenWidth,
      height: (height / 100) * screenHeight,
      borderRadius: 50,
      backgroundColor: Colors.theme3,
      opacity: 0.6,
    };
  },
  controlsView: {
    marginTop: (10 / 100) * screenHeight,
    alignItems: 'center',
    width: screenWidth,
    paddingTop: 25,
  },
  textViews: {
    width: (80 / 100) * screenWidth,
    backgroundColor: Colors.theme2,
    borderRadius: 10,
    height: (5 / 100) * screenHeight,
    paddingLeft: 20,
    marginBottom: 20,
  },
  loginButtons: {
    width: (80 / 100) * screenWidth,
    backgroundColor: Colors.theme1,
    color: Colors.theme2,
    borderRadius: 10,
    marginBottom: 20,
    height: (6 / 100) * screenHeight,
  },
  otherButtonsView: {
    flexDirection: 'row',
    width: (80 / 100) * screenWidth,
  },
  signupButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgotButton: {
    paddingBottom: 25,
  },
  spacer: {
    flex: 1,
  },
});

export default loginStyle;
