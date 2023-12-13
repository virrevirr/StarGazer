/* code snippets taken from https://clerk.com/blog/building-a-react-login-page-template */
import "../style.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function LogInView(props){
  
    function authGoogleACB() {
        const auth = getAuth(app);
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log("User signed in with Google:", user);
          // You can redirect or perform additional actions here
        })
        .catch((error) => {
          console.error("Google authentication failed:", error.message);
        });
      }

    return(
        <div className="mainContainer"> 
            <img className= "logo" src= {'src/logga.png'} height = {"200"}></img>
            <br/>
            <div className="loginContainer"> 
                <button className = "buttonDesign" onClick= {authGoogleACB} >Sign in</button>
            </div>
        </div>
    )
}


export default LogInView;