import { ActionTypes } from "../action-type";

const initialState = {
  user : null
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_USER:
      return { ...state, user: payload };
 
    default:
      return state;
  }
};
