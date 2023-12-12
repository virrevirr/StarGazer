
function InformationView(props){

    console.log("props.weatherData", props.weatherData)
    console.log("props.locationData", props.locationData)

    function WantToGoACB(event){
        return props.addToGo(props.locationData);}
    
    function VisitedACB(event){
        return props.addToVisited(props.locationData);}

    function cancelACB(){console.log(window.location.hash="#/search");}


    return (
        <div className="mainContainer">
            <span>
                <h1>{props.locationData.city +", "+ props.locationData.country}</h1> 
                <div>
                    <button onClick={WantToGoACB} disabled={props.isLocVisited}>I want to go here</button>
                    <button onClick={VisitedACB}>I have been here</button>
                </div>
                {/*MoonPhase - figure out how to do this*/} 
            </span>

            <span>
                <button onClick={cancelACB}>Back to Search</button>
            </span>
        </div>
    );
}

export default InformationView;