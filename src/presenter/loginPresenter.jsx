// LoginPresenter

/* eslint-disable */

import LogInView from "../views/loginView.jsx";
import { auth } from "../firebaseModel";
import { GoogleAuthProvider, signInWithPopup,  signOut } from "firebase/auth";

export async function connect() {
  const provider = new GoogleAuthProvider();
  console.log("loginAB");
  try {
    auth.currentUser? (await signOut(auth), window.location.hash = '#/'): (await signInWithPopup(auth, provider),  window.location.hash = '#/search');
  } catch (error) {
    console.error("Error during login/logout:", error);
  }
}

function Login(props) {
  return <LogInView loginCB={connect}/>;
}



export default Login;
