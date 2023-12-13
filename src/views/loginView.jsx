/* code snippets taken from https://clerk.com/blog/building-a-react-login-page-template */
import { ref } from 'vue';
import "../style.css";

function LogInView(props){
    const emailError = ref("");
    const passwordError = ref("");
    const email = ref("");
    const password = ref("");

    function loginACB(event) {
        props.email= email.value
        props.password= password.value     
        console.log("Button clicked for login");
    }
    function signupACB(event) { 
        console.log("Button clicked for signup");
    }
    function emailConfirmACB(event) {
        email.value = event.target.value;
        emailError.value = "";
        if ("" === email.value) {
            emailError.value = "Please enter your email";
            return;
        }
        if (!email.includes("@")) {
            emailError.value = "Please enter a valid email address";
            return;
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            emailError.value = "Please enter a valid email";
            return;
        }
        console.log("Email confirmed");
    
    
    }
    function passwordConfirmACB(event) {
        password.value = event.target.value;
        passwordError.value = "";
        if ("" === password.value) {
            passwordError.value = "Please enter your password";
            return
        }
        console.log("Password confirmed");
     
    }

    return(
        <div className="mainContainer"> 
            <div>Log in or sign up</div>
            <br/>
            <div className="loginContainer"> 
                <input className="input" placeholder="Enter email here" onChange={emailConfirmACB} value={email.value} />
                <label className="errorLable">{emailError.value}</label>
                <br/>
                <input className="input" placeholder="Enter password here" onChange={passwordConfirmACB} value={password.value} />
                <label className="errorLable">{passwordError.value}</label>
                <br/>
                <button className = "buttonDesign" onClick={loginACB} value={"Log in"} >Log in</button>
                <button className = "buttonDesign" onClick={signupACB} value={"Sign up "} >Sign up</button>
            </div>
        </div>
    )
}


export default LogInView;