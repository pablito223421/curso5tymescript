import "../pages/scss/gobal.scss";
import "react-toastify/dist/ReactToastify.css";
import React, { useState,useEffect,useMemo } from "react";
import { ToastContainer } from "react-toastify";
import { setToken, getToken} from "../api/Token";
import AuthContext from "../pages/context/AutoContext";
import jwtDecode from "jwt-decode";

export default function MyApp({ Component, pageProps }) {

  const [auth, setAuth] = useState(undefined);
  const [reloadUser,setReloadUser]= useState(false);
 
   useEffect( () =>{
     const token = getToken();
     if(token){
       setAuth({
        token,
        idUser: jwtDecode(token),
       });
     }else{
       setAuth(null);
     }
     setReloadUser(false);
   }, [reloadUser]);


  const login = (token) =>{
    setToken(token);
    setAuth ({
    token,
    idUser : jwtDecode(token),
    });
  };

  const authData = useMemo(
    () => ({
        auth,
        login,
        logout: () => null,
        setReloadUser,
      }), 
    [auth]
  );

  if(auth===undefined) return null;

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

