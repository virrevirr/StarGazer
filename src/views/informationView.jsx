import {AccountOutlineIcon, LogoutIcon} from "/src/components.jsx";

function InformationView(props){
    
    function wantToGoACB(event){
        return props.addToGo(props.locationData);
    }
    function visitedACB(event){
        return props.addToVisited(props.locationData);
    }
    function navigateToProfileACB(){
        window.location.hash = '#/profile';
    }
    function navigateToLoginACB(){
        props.loginCB();
    }
    function navigateToSearchACB(){
        window.location.hash = '#/search';
    }
    function navigateToAllConstellationsACB(){
        window.location.hash = '#/allConstellations';
    }
    return (
        <div>
            <div className="profileButton">
                {/*<button className="buttonDesign" onClick={navigateToProfileACB}>Profile</button>*/}
                <AccountOutlineIcon title="Profile" onClick={navigateToProfileACB} fillColor="#ffffff" size="48"/>
            </div>

            <div className="backToSearchButton"> {/* Lägg till class för att rendera knappen i vänstra hörnet */}
                <button className="biggerButtonDesign" onClick={navigateToSearchACB}>Back to search</button>
            </div>
            
            <div className="ParentContainer topInfoContainer">

                <div className="location">{props.locationData.city +", "+ props.locationData.country}</div>
                <div className="beenAndWantButtons">
                    <span> {/* Lägg till class för att rendera knapparna längst ner i högra hörnet*/}
                        <button className="biggerButtonDesign" title="Add to Profile!" onClick={visitedACB}>I have been here</button>
                        <button className="biggerButtonDesign" title="Add to Profile!" onClick={wantToGoACB} disabled={props.locVisited}>I want to go here</button> {/* Lägg till class för att göra knapparna snygga */}
                    </span>
                </div>

                <div className="constellationsPosition">  {/* Lägg till class för att rendera constellation-länken som prototypen */}
                    <button className="biggerButtonDesign" onClick={navigateToAllConstellationsACB}>Find constellations</button>
                </div>
            
            </div>

            

            <div className="logOutButton">
                {/*<button className="buttonDesign" onClick={navigateToLoginACB}>Log out</button>*/}
                <LogoutIcon title="Log Out" onClick={navigateToLoginACB} fillColor="#ffffff" size="48"/>
            </div>
            
        </div>
    );
}

export default InformationView;