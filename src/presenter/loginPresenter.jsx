/* eslint-disable */

import LogInView from "../views/loginView.jsx";
import { authentication } from "../firebaseModel";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


function Login(props){

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  function loginCB() {
    authentication.CurrentUser? (signOut(auth), window.location.hash = "search") : signInWithPopup(auth, provider);
;
  
    return(
        <LogInView
        user={props.user}
        text={props.text}
        loginACB={loginCB}
        />)

    
}
}

export default Login;