import { ActionTypes } from "../action-type";
import { fetchUser } from "../../utils/localStorage";

const userInfo = fetchUser()
const initialState = {
  user: userInfo
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_USER:
      return { ...state, user: payload };

    default:
      return state;
  }
};
