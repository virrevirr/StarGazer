import AccountOutlineIcon from 'vue-material-design-icons/AccountOutline.vue';
import LogoutIcon from 'vue-material-design-icons/Logout.vue';


function SearchFormView(props){
    
    function userInputACB(event){
        console.log("searched for ", event.target.value);
        return props.userInput(event.target.value);
    }

    function clickSearchACB(){
        return props.clickSearch();
    }

    function navigateToProfileACB(){
        window.location.hash = '#/profile';
    }
    
    function navigateToLoginACB(){
        window.location.hash = '#/';
    };

    return(
    
    <div className="searchContainer">
        {/*Title of the page*/}
        <h1>Find Cities for Your Stargazing Memories or Dream Destinations</h1>
        <div className="profileButton">
            {/*<button className="buttonDesign" onClick={navigateToProfileACB}>Profile</button>*/}
            <AccountOutlineIcon onClick={navigateToProfileACB} fillColor="#ccc" size="48"/>
        </div>
        <div className="centerButton">
            <input className="input" placeholder={"Search city"} onChange={userInputACB}/>
            <button className="buttonDesign" onClick={clickSearchACB}>&#128269;</button>
        </div>
        <div className="logOutButton">
            {/*<button className="buttonDesign" onClick={navigateToLoginACB}>Log out</button>*/}
            <LogoutIcon onClick={navigateToLoginACB} fillColor="#ccc" size="48"/>
        </div>
    </div>
    )
    
};

export default SearchFormView;