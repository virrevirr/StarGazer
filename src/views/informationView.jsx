import {AccountOutlineIcon, LogoutIcon} from "/src/components.jsx";

function InformationView(props){
    
    function wantToGoACB(event){
        //Adds the chosen location to the array wantToGo in starModel
        return props.addToGo(props.locationData);
    }
    
    function visitedACB(event){
        //Adds the chosen location to the array haveVisited in starModel
        return props.addToVisited(props.locationData);
    }
    
    function navigateToProfileACB(){
        //Sends the user to the profile page
        window.location.hash = '#/profile';
    }
    
    function navigateToLoginACB(){
        //Will log out the user if called on
        props.loginCB();
    }
    
    function navigateToSearchACB(){
        //Sends the user to the search page
        window.location.hash = '#/search';
    }
    
    function navigateToAllConstellationsACB(){
        //Sends the user to allConstellations page
        window.location.hash = '#/allConstellations';
    }
    
    return (
        <div>
            <div className="profileButton">
                {/*Sends user to profile*/}
                <AccountOutlineIcon title="Profile" onClick={navigateToProfileACB} fillColor="#ffffff" size="48"/>
            </div>

            <div className="backToSearchButton">
                {/*Sends user to search page*/}
                <button className="biggerButtonDesign" onClick={navigateToSearchACB}>Back to search</button>
            </div>

            <div className="ParentContainer topInfoContainer">
                {/*Location name, buttons for adding to WantToGo and haveHaveVisited and button to allConstellations page*/}
                <div className="location">{props.locationData.city +", "+ props.locationData.country}</div>
                
                <div className="beenAndWantButtons">
                    <span>
                        <button className="biggerButtonDesign disabled" title="Add to Profile!" onClick={visitedACB} disabled={props.locvisited}>I have been here</button>
                        <button className="biggerButtonDesign disabled" title="Add to Profile!" onClick={wantToGoACB} disabled={props.locgo}>I want to go here</button> {/* Lägg till class för att göra knapparna snygga */}
                    </span>
                </div>

                <div className="constellationsPosition"> 
                    <button className="biggerButtonDesign" onClick={navigateToAllConstellationsACB}>Find constellations</button>
                </div>
            </div>

            <div className="logOutButton">
                {/*The log out button*/}
                <LogoutIcon title="Log Out" onClick={navigateToLoginACB} fillColor="#ffffff" size="48"/>
            </div>
        </div>
    );
}

export default InformationView;