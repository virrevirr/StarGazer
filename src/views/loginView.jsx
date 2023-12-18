/* code snippets taken from https://clerk.com/blog/building-a-react-login-page-template */
import "../style.css";

 

function LogInView(props){
    function authGoogleACB() {
        props.authenticator(auth, provider);
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