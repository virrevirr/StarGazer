import {AccountOutlineIcon, LogoutIcon} from "/src/components.jsx";

import starConstellations from "../starConstellations.jsx"

function ConstellationView(props){

    function navigateToProfileACB(){
        // ACB to navigate to profile
        window.location.hash = '#/profile';
    };
    
    function navigateToLoginACB(){
        // ACB to navigate to login
        props.loginCB();
    };

    function navigateToAllConstellationsACB(){
        // ACB to navigate to allConstellations
        window.location.hash = '#/allConstellations';
    };

    function haveSeenACB(event){
        // Add to seen
        return props.haveSeen(props.currentConstellation[0].constellation);
    };

    return (
        <div className="searchContainer">
        
            <div className="backToSearchButton"> 
                {/* Button to navigate to search */}
                <button className="biggerButtonDesign" onClick={navigateToAllConstellationsACB}>Constellations</button>
            </div>

            <div className="profileButton">
                {/* 3rd party component to navigate to profile */}
                <AccountOutlineIcon title="Profile" onClick={navigateToProfileACB} fillColor="#ffffff" size="48"/>
            </div>

            <div className="iHaveSeenButton">
                {/* Button to add to seen */}
                <button className="biggerButtonDesign" title="Add to Profile" onClick={haveSeenACB}>I have seen this in {props.location.city}</button>
            </div>

            <div>
                <h1>{props.currentConstellation[0].constellation}</h1> 
            </div>
            <div className="constellationDetailsContainer">
                {/* Render all information about the constellation */}
                <div className="constellationImageContainer">
                <img src = {starConstellations[props.currentConstellation[0].constellation]} height = {"400"} />
                </div>

                <div className="starsIncludedContainer">
                    <h1>Stars included</h1> 
                    <ul>
                    {props.currentConstellation.map(starsInConstellationCB)}
                    </ul>
                </div>
            </div>
            
            <div className="logOutButton">
                <LogoutIcon title="Log Out" onClick={navigateToLoginACB} fillColor="#ffffff" size="48"/>
            </div>
        
        </div>
    );
    
    function starsInConstellationCB(star){
        // Render each star in the constellation
        return (
            <span key={star.name}>
                    {star.name}
            </span>
        );}
}

export default ConstellationView;