
function InformationView(props){
    function WantToGoACB(event){
        return props.addToWantToGo(props.locationData.location);}
    
    function VisitedACB(event){
        return props.addToVisited(props.locationData.location);}

    function cancelACB(){/*console.log(window.location.hash="#/search")*/}
    
    return (
        <div>
            <span>
                <h1>{props.locationData.location}</h1>
                <div>
                    <button onClick={WantToGoACB} disabled={props.isLocVisited}>I want to go here</button>
                    <button onClick={VisitedACB}>I have been here</button>
                </div>
                {/*MoonPhase - figure out how to do this*/} 
            </span>
            <div>
                <p>Wow astronomical events, northern light, falling star wooow</p> {/*Astronomical events info*/}
                <a href="#">More information</a> {/*Link to Astronomical events info*/}
            </div>
            <div><p>Sunrise</p></div>
            <div><p>Sunset</p></div>
            <span>
                <button onClick={cancelACB}>Back to Search</button>
            </span>
        </div>
    );

}

export default InformationView;