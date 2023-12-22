// LoginPresenter

/* eslint-disable */

import LogInView from "../views/loginView.jsx";
import { auth } from "../firebaseModel";
import { GoogleAuthProvider, signInWithPopup,  signOut } from "firebase/auth";
const provider = new GoogleAuthProvider();

export async function connect() {
  // Will log out or log in the user if called on and depending on if the authenticated user exists or not
  // Also sends the user to the search page if the login is succesful and to the login page if the user logs out
  try {
    if(auth.currentUser) {
      await signOut(auth);
      window.location.hash = '#/';}
    else{
       await signInWithPopup(auth, provider);
       window.location.hash = '#/search';}
  } catch (error) {
    console.error("Error during login/logout:", error);
  }
}

function Login(props) {
  return <LogInView loginCB={connect}/>;
}



export default Login;
