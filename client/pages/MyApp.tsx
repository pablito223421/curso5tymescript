import React, { useMemo } from "react";
import { ToastContainer } from "react-toastify";
import AuthContext from "../pages/context/AutoContext";



export default function MyApp({ Component, pageProps }) {

  const authData = useMemo(
    () => {
      return ({
        auth: { name: "Pablo", email: "pablohernandez@gmail.com" },
        login: () => null,
        logout: () => null,
        SetReloadUser: () => null,
      });
    },
    []
  );

  return (

    /*AuthContext.Provider value {authData}*/
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </>
    /*AuthContext.Provider*/
  );
}
