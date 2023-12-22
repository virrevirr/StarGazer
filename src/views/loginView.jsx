import "/style.css";

function LogInView(props) {
  function handleLoginClick() {
    // will log out or  log in the user if called on
    props.loginCB();
  }

  return (
    <div className="logoContainer">
      <div className="centerContent">
        <img
          className="logo"
          src={"/images/updated_logo.png"}
          height={"200"}
        ></img>
        <br />
        <div className="loginContainer">
          {/* sentd the person to the search page if the login is succesful*/}
          <button className="buttonDesign" onClick={handleLoginClick}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogInView;