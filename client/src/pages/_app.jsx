import "@/styles/globals.css";
export default function App({ Component, pageProps }) {
  //here use the contex provider to provide the global state to all the components that need it
  return <Component {...pageProps} />;
}
