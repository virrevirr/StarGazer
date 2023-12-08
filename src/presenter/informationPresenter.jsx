import InformationView from "../views/informationView.jsx";

//model is starModel
export default function Information(props){
    function visitedCB(location){return location === props.model.currentLocation;}
    function addToWantToGoACB(){props.model.addToWantToGo(props.model.currentLocation);}
    function addVisitedACB(){props.model.addToVisited(props.model.currentLocation);}


    return (<InformationView 
        locationData={props.model.currentLocation} //current location är objekt
        isLocVisited ={props.model.haveVisited.find(visitedCB)} //isLocVisited expected to be falsy with empty menu
        addToGo ={addToWantToGoACB}
        addToVisited={addVisitedACB} 
        weatherData={props.model.weatherData} //add astroEvents, moonphase 
        /> );
}