/* eslint-disable */
import LogInView from "../views/loginView.jsx";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Login(props){
   
   function onLogin() {
    const auth = getAuth();
  signInWithEmailAndPassword(auth, props.email, props.password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Handle successful login
      console.log("User logged in:", user);
    })
    .catch((error) => {
      // Handle login error
      console.error("Login error:", error.message);
    });
    }
    function signUp(email) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    return(
        <LogInView
        loginACB={onLogin}
        signupACB={signUp}
        />

    )
}


export default Login;