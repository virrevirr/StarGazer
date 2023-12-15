
function InformationView(props){
    console.log("location data", props.locationData)

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
        window.location.hash = '#/';
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
                <button className="buttonDesign" onClick={navigateToProfileACB}>Profile</button>
            </div>

            <div> {/* Lägg till class för att rendera knappen i vänstra hörnet */}
                <button className="biggerButtonDesign" onClick={navigateToSearchACB}>Search city</button>
            </div>
            
            <span> {/* Lägg till class för att rendera knapparna längst ner i högra hörnet*/}
                <button className="biggerButtonDesign" onClick={visitedACB}>
                    I have been here</button>
                <button className="biggerButtonDesign" onClick={wantToGoACB}>
                    I want to go here</button> {/* Lägg till class för att göra knapparna snygga */}
            </span>

            <h1> {props.locationData.city +", "+ props.locationData.country} </h1> 
            
            <div>  {/* Lägg till class för att rendera constellation-länken som prototypen */}
                <h2>Find constellations you have seen here</h2>
                <button className="biggerButtonDesign" onClick={navigateToAllConstellationsACB}>Constellations</button>
            </div>

            <div className="logOutButton">
                <button className="buttonDesign" onClick={navigateToLoginACB}>Log out</button>
            </div>
        </div>
    );
}

export default InformationView;