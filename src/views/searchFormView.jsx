import {AccountOutlineIcon, LogoutIcon} from "/src/components.jsx";


function SearchFormView(props){
    
    function userInputACB(event){
        // Return the user input from search bar 
        return props.userInput(event.target.value); 
    }

    function clickSearchACB(){
        // Return click of search button
        return props.clickSearch();
    }

    function navigateToProfileACB(){ 
        // Navigating to the profile page
        window.location.hash = '#/profile'; 
    }
    
    function navigateToLoginACB(){
        // Navigation to the log in page 
        props.loginCB();
    };

    return(
    
    <div className="searchContainer">
        {/*Title of the page*/}
        <h1>Find Cities for Your Stargazing Memories or Dream Destinations</h1>

        {/* Profile Button */}
        <div className="profileButton"> 
            <AccountOutlineIcon title="Profile" onClick={navigateToProfileACB} fillColor="#ffffff" size="48"/>
        </div>

        {/* Search Bar */}
        <div className="centerButton">
            <input className="input" placeholder={"Search City (min. 3 letters)"} onChange={userInputACB}/>
            <button className="buttonDesign" onClick={clickSearchACB}>&#128269;</button>
        </div>

        {/* Log Out Button*/}
        <div className="logOutButton">
            <LogoutIcon title="Log Out" onClick={navigateToLoginACB} fillColor="#ffffff" size="48"/>
        </div>
    </div>
    )
    
};

export default SearchFormView;
