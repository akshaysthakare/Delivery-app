import {LOAD_ORDER_TYPES} from '../actions/order_types';

const initialState = {
  ordersTypesArray: [], // we will save token here.
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDER_TYPES:
      console.log('payload = ' + JSON.stringify(action.payload));
      return {
        ...state,
        ordersTypesArray: action.payload,
      };
    default:
      return state;
  }
};
