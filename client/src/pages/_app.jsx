import "@/styles/globals.css";
import { ContextProvider } from "@/context/StateContext";
import { reducers, initialState } from "@/context/StateReducers";
export default function App({ Component, pageProps }) {
  //here use the contex provider to provide the global state to all the components that need it
  return (
    <ContextProvider reducers={reducers} initialState={initialState}>
      <Component {...pageProps} />;
    </ContextProvider>
  );
}
