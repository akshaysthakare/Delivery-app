import AsyncStorage from '@react-native-community/async-storage';

export const LOAD_ORDERS = 'LOAD_ORDERS';


export const loadOrders = () => {
  return async dispatch => {
    try {
      let url = 'http://api-delivery.o2t2.com/api/Orders.json';
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
        let content = data.data.slice(0, 3);

        console.log('Inside true')
        dispatch({ type: LOAD_ORDERS, payload: content });
      } else {
        console.log('Inside false')
        throw new Error('not found');
      }

    } catch (e) {
      // if(response.status === 404){
      // throw new Error(404);
      // }
      console.log(e.message);
      throw e;

    }
  };
};
