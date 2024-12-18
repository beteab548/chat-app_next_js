import { reducerCases } from "./constants";
export const initialState = {
  userData: undefined,
  newUser: false,
  contactPage: false,
};
export const reducers = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_USER_INFO:
      return { ...state, userData: action.userData };
    case reducerCases.SET_NEW_USER:
      return { ...state, newUser: action.newUser };
    case reducerCases.SET_ALL_CONTACT_PAGE:
      return { ...state, contactPage: !state.contactPage };
    default:
      return;
  }
};
