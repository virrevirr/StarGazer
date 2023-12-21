/* code snippets taken from https://clerk.com/blog/building-a-react-login-page-template */
import "/style.css";

 

function LogInView(props){
    function handleLoginClick() {
        console.log("Button clicked");
        props.loginCB();
        }

    return(
        <div className="logoContainer"> 
            <div className="centerContent">
                <img className= "logo" src= {'/images/updated_logo.png'} height = {"200"}></img>
                <br/>
                <div className="loginContainer"> 
                    <button className = "buttonDesign" onClick= {handleLoginClick} >Sign in</button>
                </div>
            </div>
            
        </div>
    )
}


export default LogInView;