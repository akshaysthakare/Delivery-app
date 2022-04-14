import { LOAD_USERS } from "../actions/users";


const initialState = {
  usersArray: [], // we will save token here.
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        usersArray: action.payload,
      };
    default:
      return state;
  }
};