// LoginPresenter

/* eslint-disable */

import LogInView from "../views/loginView.jsx";
import { auth } from "../firebaseModel";
import { GoogleAuthProvider, signInWithPopup,  signOut } from "firebase/auth";
const provider = new GoogleAuthProvider();

export async function connect() {
  
  console.log("loginAB");
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
