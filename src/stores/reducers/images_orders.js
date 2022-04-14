import { LOAD_IMAGES_ORDERS } from "../actions/images_orders";


const initialState = {
  imagesOrdersArray: [], // we will save token here.
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGES_ORDERS:
      return {
        ...state,
        imagesOrdersArray: action.payload,
      };
    default:
      return state;
  }
};