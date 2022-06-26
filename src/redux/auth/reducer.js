import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionType";

const initState = {
  isAuth: false,
  token: ""
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        token: payload
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: ""
      };
    }
    default:
      return state;
  }
};
