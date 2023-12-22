import {AccountOutlineIcon, LogoutIcon} from "/src/components.jsx";

function AllConstellationsView(props){
    // View to render all constellations the user can choose in a grid

    function navigateToProfileACB(){
        // ACB to navigate to profile
        window.location.hash = '#/profile';
    }
    
    function navigateToLoginACB(){
        // ACB to navigate to login
        props.loginCB();
    };

    function navigateToInformationACB(){
        // ACB to navigate to information
        window.location.hash = '#/information';
    };

    return(
    <div>
        <div className="backToSearchButton">
            {/* Button to send user back to search */}
            <button className="biggerButtonDesign" onClick={navigateToInformationACB}>Back to {props.location.city}</button>
        </div>

        <div className="profileButton">
            {/* Button to send user to profile */}
            <AccountOutlineIcon title="Profile" onClick={navigateToProfileACB} fillColor="#ffffff" size="48"/>
        </div>
        
        <div class = "ParentContainer constellationsContainer">
            {/* Container to render all constellations */}
            {Object.entries(props.allConstellations).map(renderResultCB)}
        </div> 

        <div className="logOutButton">
            {/* Button to log out user */}
            <LogoutIcon title="Log Out" onClick={navigateToLoginACB} fillColor="#ffffff" size="48"/>
        </div>

    </div>
    )

    function renderResultCB(constellation){
        // Renders image and text for each constellation
        function onConstellationClickACB(event){
            // Callback to navigate to chosen constellation
            props.onConstellationClick(constellation[0]);
            window.location.hash= "#/constellation";
        };

        return(
            <div className="constellationDisplay">
                {/* Constellation[0] is the name of the constellation, constellation[1] is the url to the image */}
                <span key={constellation[0]} onClick={onConstellationClickACB}> 
                    <img src = {constellation[1]} height = {"100"} />
                    <p>{constellation[0]}</p>
                </span>
            </div>
            
        );}
    }
    export default AllConstellationsView;