import { reducerCases } from "./constants";
export const initialState = {
  userData: undefined,
  newUser: false,
  contactPage: false,
  currentChatUser: undefined,
  messages: [],
};
export const reducers = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_USER_INFO:
      return { ...state, userData: action.userData };
    case reducerCases.SET_NEW_USER:
      return { ...state, newUser: action.newUser };
    case reducerCases.SET_ALL_CONTACT_PAGE:
      return { ...state, contactPage: !state.contactPage };
    case reducerCases.SET_CURRENT_CHAT_USER:
      return { ...state, currentChatUser: action.user };
    case reducerCases.SET_MESSAGES:
      return { ...state, messages: action.messages };
    default:
      return;
  }
};
