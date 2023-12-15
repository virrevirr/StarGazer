// "home sidan" där man ska söka på en plats. knapp för profilen och "sök".

function SearchFormView(props){
    
    function userInputACB(event){
        console.log("search for ", event.target.value);
        return props.userInput(event.target.value);
    }

    function clickSearchACB(){
        console.log("click search");
        return props.clickSearch();
    }

    function navigateToProfileACB(){
        console.log("navigate to profile");
        window.location.hash = '#/profile';
    }
    
    function navigateToLoginACB(){
        console.log("navigate to login")
        window.location.hash = '#/'
    };

    return(
    
    <div className="searchContainer">
        {/*Title of the page*/}
        <h1>Find Cities for Your Stargazing Memories or Dream Destinations</h1>
        <div className="profileButton">
            <button className="buttonDesign" onClick={navigateToProfileACB}>Profile</button>
        </div>
        <div className="centerButton">
            <input className="input" placeholder={"Search city"} onChange={userInputACB}/>
            <button className="buttonDesign" onClick={clickSearchACB}>&#128269;</button>
        </div>
        <div className="logOutButton">
            <button className="buttonDesign" onClick={navigateToLoginACB}>Log out</button>
        </div>
    </div>
    )
    
};

export default SearchFormView;