// LoginPresenter

/* eslint-disable */

import LogInView from "../views/loginView.jsx";
import { auth } from "../firebaseModel";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

function Login(props) {
  const provider = new GoogleAuthProvider();

  function connect() {
    console.log("loginAB");
    try {
      auth.currentUser?(signOut(auth)): (signInWithPopup(auth, provider))
      
    } catch (error) {
      console.error("Error during login/logout:", error);
    }
    window.location.hash = '#/search';
  }

  return <LogInView loginCB={connect} />;
}

export default Login;
