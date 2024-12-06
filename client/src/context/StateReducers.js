import { reducerCases } from "./constants";
export const initialState = { userData: undefined, newUser: false };
export const reducers = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_USER_INFO:
      return { ...state, userData: action.userData };
    default:
      return;
  }
};
