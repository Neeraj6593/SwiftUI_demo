import {Alert} from 'react-native';
import NetworkManager from '../Networking/NetworkManager';

// eslint-disable-all
export default class SignUpViewModel {
  validateInputs = (email, password, confirmPassword, mobileNo, username) => {
    // eslint-disable-next-line eqeqeq

    if (username == '') {
      Alert.alert('Username cannot be blank');
      return false;
    }
    if (mobileNo == '') {
      Alert.alert('Mobile No cannot be blank');
      return false;
    }
    if (email == '') {
      Alert.alert('email cannot be blank');
      return false;
    }
    if (password == '') {
      Alert.alert('Password cannot be blank');
      return false;
    }
    if (confirmPassword == '') {
      Alert.alert('Confirm password cannot be blank');
      return false;
    }

    if (this.mobileValid(mobileNo) == false) {
      Alert.alert('Enter Valid mobile no');
      return false;
    }

    if (this.emailValid(email) == false) {
      Alert.alert('Enter Valid email Id');
      return false;
    }

    if (password != confirmPassword) {
      Alert.alert('Confirm password should match password');
      return false;
    }

    return true;
  };

  emailValid = email => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      return false;
    } else {
      return true;
    }
  };

  mobileValid = mobile => {
    if (mobile.length == 10) {
      return true;
    } else {
      return false;
    }
  };

  signUpApiCall = async (email, password) => {
    const networkManager = new NetworkManager();
    const signUpPacket = {
      url: networkManager.baseUrl.auth + networkManager.apiPth.signUp,
      method: 'POST',
      body: {
        email: email,
        password: password,
      },
    };
    const result = await networkManager.apicall(signUpPacket);
    if (result.status == 200) {
      return true;
    } else {
      Alert.alert(result.body.error.message);
    }
  };

  createUser = async (email, username, mobile) => {
    const networkManager = new NetworkManager();
    const createUserPacket = {
      url: networkManager.baseUrl.crud + networkManager.apiPth.user,
      method: 'POST',
      body: {
        email: email,
        username: username,
        mobile: mobile,
      },
    };
    const result = await networkManager.apicall(createUserPacket);
    if (result.status == 200) {
      return true;
    } else {
      Alert.alert(result.body.error.message);
    }
  };
}
