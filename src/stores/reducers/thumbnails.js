import { LOAD_THUMBNAILS } from "../actions/thumbnails";


const initialState = {
  thumbanailArray: [], // we will save token here.
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_THUMBNAILS:
      return {
        ...state,
        thumbanailArray: action.payload,
      };
    default:
      return state;
  }
};