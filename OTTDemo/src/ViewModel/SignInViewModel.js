import {Alert} from 'react-native';
import NetworkManager from '../Networking/NetworkManager';

// eslint-disable-all
export default class SignInViewModel {
  validateInputs = (email, password) => {
    // eslint-disable-next-line eqeqeq
    if (email == '') {
      Alert.alert('email cannot be blank');
      return false;
    }
    if (password == '') {
      Alert.alert('Password cannot be blank');
      return false;
    }
    return true;
  };

  signUpApiCall = async (email, password) => {
    const networkManager = new NetworkManager();
    const signUpPacket = {
      url: networkManager.baseUrl.auth + networkManager.apiPth.signIn,
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
}
