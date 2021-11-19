import "../pages/scss/gobal.scss";
import "semantic-ui-css/semantic.min.css";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
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
  pauseOnHover
  />
  </>
  );
}

export default MyApp
