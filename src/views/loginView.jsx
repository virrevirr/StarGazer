/* code snippets taken from https://clerk.com/blog/building-a-react-login-page-template */
import "../style.css";

 

function LogInView(props){


    function handleLoginClick() {
        console.log("Button clicked");
        props.loginCB();
        window.location.hash = '#/search';
     
      }

    return(
        <div className="mainContainer"> 
            <img className= "logo" src= {'src/logga.png'} height = {"200"}></img>
            <br/>
            <div className="loginContainer"> 
                <button className = "buttonDesign" onClick= {handleLoginClick} >Sign in</button>
            </div>
        </div>
    )
}


export default LogInView;