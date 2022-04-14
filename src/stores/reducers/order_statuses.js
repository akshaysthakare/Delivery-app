import { LOAD_ORDER_STATUSES } from "../actions/order_statuses";


const initialState = {
  ordersStatusesArray: [], // we will save token here.
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDER_STATUSES:
      return {
        ...state,
        ordersStatusesArray: action.payload,
      };
    default:
      return state;
  }
};
