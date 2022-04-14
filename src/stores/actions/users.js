import AsyncStorage from '@react-native-community/async-storage';
import { USER_TOKEN } from '../../constants/AppConstants';

export const LOAD_USERS = 'LOAD_USERS';


export const loadUsers = () => {
  return async dispatch => {
    try {
      let url = 'http://api-delivery.o2t2.com/api/users.json';
      let token = await AsyncStorage.getItem('TOKEN');
      console.log('resendOTP url =', url);

      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
      // console.log('response raw', response);
      console.log(response.status);

      let data = await response.json();

      console.log('data' + JSON.stringify(data));
      if (data.success === true) {
        let content = data.data;
        console.log('Inside true')

        dispatch({ type: LOAD_USERS, payload: content });
      } else {
        console.log('Inside false')

        throw new Error('not found');
      }

    } catch (e) {
      // if (response.status === 404) {
      //   throw new Error(404);
      // }
      console.log(e.message);
      throw e;

    }
  };
};