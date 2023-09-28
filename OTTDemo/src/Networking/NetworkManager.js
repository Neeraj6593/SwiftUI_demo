export default class NetworkManager {
  key = 'AIzaSyCXVc-GkTIj1u5pZBc1M7Td9VPawfKQj24';
  projectid = 'reactnativedemo-f448b-default-rtdb';
  baseUrl = {
    auth: 'https://identitytoolkit.googleapis.com/v1/',
    crud: 'https://' + this.projectid + '.firebaseio.com/',
  };

  apiPth = {
    signUp: 'accounts:signUp?key=' + this.key,
    signIn: 'accounts:signInWithPassword?key=' + this.key,
    user: 'Users.json',
  };

  apicall = async packet => {
    try {
      const response = await fetch(packet.url, {
        method: packet.method,
        headers: packet.headers,
        body: JSON.stringify(packet.body),
      });
      const result = await response.json();
      const status = await response.status;
      return {body: result, status: status};
    } catch (error) {
      return error;
    }
  };
}
