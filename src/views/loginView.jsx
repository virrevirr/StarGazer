/* code snippets taken from https://clerk.com/blog/building-a-react-login-page-template */

function LogInView(){
    /*function loginACB(event) {
        props.onLogin();
    }
    function signupACB(event) { 
        console.log("Button clicked");
    }
    function emailConfirmACB(event) {
        console.log("Email confirmed");
        props.validEmail(event.email);
    
    }
    function passwordConfirmACB(event) {
        console.log("Password confirmed");
        props.validPassword(event.password);  
    }*/

    return(
        <div className={"mainContainer"}> 
            <div>Log in or sign up</div>
            <br/>
            <div className={"loginContainer"}> 
                <input placeholder="Enter email here" 
                    //onChange={emailConfirmACB} 
                  
                    className={"input"}/>
                <label className="errorLable"></label>
                <input placeholder="Enter password here" 
                    //onChange={passwordConfirmACB} 
                    className={"input"}/>
                <label className="errorLable"></label>
                <button //onClick={loginACB} 
                value={"Log in"}className={"loginButton"}>Log in</button>
                <button //onClick={signupACB} 
                value={"Sign up "}className={"singupButton"}>Sign up</button>
            </div>
        </div>
    )
}


export default LogInView;