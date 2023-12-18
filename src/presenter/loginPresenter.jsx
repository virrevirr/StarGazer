// LoginPresenter

/* eslint-disable */

import LogInView from "../views/loginView.jsx";
import { auth } from "../firebaseModel";
import { GoogleAuthProvider, signInWithPopup,  signOut } from "firebase/auth";

function Login(props) {
  const provider = new GoogleAuthProvider();

async function connect() {
    console.log("loginAB");
    try {
      auth.currentUser? await signOut(auth): (await signInWithPopup(auth, provider),window.location.hash = '#/search');
    } catch (error) {
      console.error("Error during login/logout:", error);
    }
  }

  return <LogInView loginCB={connect} />;
}

export default Login;
