
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
        window.location.hash = '#/'
    };

    function navigateToSearchACB(){
        window.location.hash = '#/search'
    };


    return (
        <div>
            <div className="profileButton">
                <button className="buttonDesign" onClick={navigateToProfileACB}>Profile</button>
            </div>

            <div> {/* Lägg till class för att rendera knappen i vänstra hörnet */}
                <button className="buttonDesign" onClick={navigateToSearchACB}>Search city</button>
            </div>
            
            <span> {/* Lägg till class för att rendera knapparna längst ner i högra hörnet*/}
                <button onClick={wantToGoACB} disabled={props.isLocVisited}>I want to go here</button> {/* Lägg till class för att göra knapparna snygga */}
                <button onClick={visitedACB} disabled={props.isLocVisited}>I have been here</button>
            </span>

            <h1> {props.locationData.city +", "+ props.locationData.country} </h1> 
            
            <div>  {/* Lägg till class för att rendera moon som prototypen ELLER kanske någon annans position där det ser bra ut)*/}
                <h2>Constellations</h2>
                <h3>Do you want to find constellations you have seen here?</h3>
                <a href="#/allConstellation">Link to constellations</a> {/*Link to constellations*/}
            </div>

            <div className="logOutButton">
                <button className="buttonDesign" onClick={navigateToLoginACB}>Log out</button>
            </div>
        </div>
    );
}

export default InformationView;