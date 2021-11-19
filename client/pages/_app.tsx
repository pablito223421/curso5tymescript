import "../pages/scss/gobal.scss";
import "react-toastify/dist/ReactToastify.css";
import React, { useState,useMemo } from "react";
import { ToastContainer } from "react-toastify";
import { setToken} from "../api/Token";
import AuthContext from "../pages/context/AutoContext";
import jwtDecode from "jwt-decode";

export default function MyApp({ Component, pageProps }) {

  const [auth, setAuth] = useState(undefined);
  console.log(auth);

  const login = (token) =>{
    setToken(token);
    setAuth ({
    token,
    idUser : jwtDecode(token),
    });
  };

  const authData = useMemo(
    () => ({
        auth: () => null,
        login,
        logout: () => null,
        SetReloadUser: () => null,
      }), 
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

