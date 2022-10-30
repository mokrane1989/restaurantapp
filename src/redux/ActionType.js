import { ActionTypes } from "./action-type";

export const setUserInfo = user => {
  return {
    type: ActionTypes.GET_USER,
    payload: user,
  };
};

