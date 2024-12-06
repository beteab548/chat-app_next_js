import { createContext, useReducer, useContext } from "react";
const Usercontext = createContext();
export const ContextProvider = ({ children, initialState, reducers }) => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <Usercontext.Provider value={{ state, dispatch }}>
      {children}
    </Usercontext.Provider>
  );
};
export const useStateprovider = () => {
  return useContext(Usercontext);
};
