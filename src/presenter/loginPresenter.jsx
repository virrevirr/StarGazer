// LoginPresenter

/* eslint-disable */

import LogInView from "../views/loginView.jsx";
import { loginlogOut, auth } from "../firebaseModel";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

function Login(props) {
  const provider = new GoogleAuthProvider();

  async function loginCB() {
    loginlogOut(props.user);
    
    try {
      auth.currentUser?(await signOut(auth), window.location.hash = "search"): await signInWithPopup(auth, provider)
    } catch (error) {
      console.error("Error during login/logout:", error);
    }
  }

  return <LogInView handleLoginClick={loginCB} />;
}

export default Login;
