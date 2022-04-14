import { LOAD_THUMBNAILS_ORDERS } from "../actions/thumbnailsOrders";


const initialState = {
  thumbanaiOrderlArray: [], // we will save token here.
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_THUMBNAILS_ORDERS:
      return {
        ...state,
        thumbanaiOrderlArray: action.payload,
      };
    default:
      return state;
  }
};