import {AccountOutlineIcon, LogoutIcon} from "/src/components.jsx";

import starConstellations from "../starConstellations.jsx"

function ConstellationView(props){

    function navigateToProfileACB(){
        window.location.hash = '#/profile';
    };
    
    function navigateToLoginACB(){
        props.loginCB();
    };

    function navigateToAllConstellationsACB(){
        window.location.hash = '#/allConstellations';
    };

    function haveSeenACB(event){
        return props.haveSeen(props.currentConstellation[0].constellation);
    };

    return (
        <div className="searchContainer"> {/* Lägg till class som är specifik för den här? */}
        
            <div className="backToSearchButton"> {/* Lägg till class för att rendera knappen i vänstra hörnet och gör så att all text får plats */}
                <button className="biggerButtonDesign" onClick={navigateToAllConstellationsACB}>Constellations</button>
            </div>

            <div className="profileButton">
                <AccountOutlineIcon onClick={navigateToProfileACB} fillColor="#ffffff" size="48"/>
            </div>

            <div className="iHaveSeenButton"> {/* Lägg till class för att rendera knappen längst ner till höger och gör så att all text får plats i den */}
                <button className="biggerButtonDesign" onClick={haveSeenACB}>I have seen this in {props.location.city}</button>
            </div>

            <div>
                <h1>{props.currentConstellation[0].constellation}</h1> 
            </div>
            <div className="constellationDetailsContainer">
                <div className="constellationImageContainer"> {/* Lägg till class för att rendera bilden till vänster om stjärnnamnen */}
                <img src = {starConstellations[props.currentConstellation[0].constellation]} height = {"400"} />
                </div>

                <div className="starsIncludedContainer"> {/* Lägg till class för att rendera stjärnorna till höger om bilden */}
                    <h1>Stars included</h1> 
                    <ul>
                    {props.currentConstellation.map(starsInConstellationCB)}
                    </ul>
                </div>
            </div>
            
            <div className="logOutButton">
                <LogoutIcon onClick={navigateToLoginACB} fillColor="#ffffff" size="48"/>
            </div>
        
        </div>
    );
    
    function starsInConstellationCB(star){
        return (
            <span key={star.name}> {/* Lägg till class för att rendera stjärnorna i en grid (som bilderna i labben) alt. på en row */}
                    {star.name}
            </span>
        );}
}

export default ConstellationView;