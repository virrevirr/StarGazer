/* eslint-disable */

import LogInView from "../views/loginView.jsx";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login(props){

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  function authenticator() {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("User signed in with Google:", user);
      // You can redirect or perform additional actions here
    })
    .catch((error) => {
      console.error("Google authentication failed:", error.message);
    });
  
    return(
        <LogInView
<<<<<<< Updated upstream

=======
        authGoogleACB ={authenticator}
      
>>>>>>> Stashed changes
        />)

    
}
}

export default Login;