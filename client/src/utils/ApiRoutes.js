export const baseUrl = `http://localhost:4000`;
const AUTH_Route = `${baseUrl}/api/auth`;
const MESSAGE_PATH = `${baseUrl}/api/message`;
export const CHECK_USER_AUTH = `${AUTH_Route}/check-user`;
export const ONBOARD_USER_ROUTE = `${AUTH_Route}/onboard-user`;
export const GET_ALL_CONTACTS = `${AUTH_Route}/fetchContacts`;
export const ADD_MESSSAGE_ROUTE = `${MESSAGE_PATH}/addMessage`;
export const GET_MESSAGES_ROUTE = `${MESSAGE_PATH}/getMessages`;
