import InformationView from "../views/informationView.jsx";

//model is starModel
export default function Information(props){
    function visitedCB(location){return location === props.model.currentLocation;}
    function addToWantToGoACB(){props.model.addToMenu();}
    function addVisitedACB(){props.model.addToMenu();}

    return (<InformationView 
        locationData={props.model} 
        isLocVisited={props.model.haveVisited.find(visitedCB)} //isLocVisited expected to be falsy with empty menu
        WantToGoACB={addToWantToGoACB}
        VisitedACB={addVisitedACB}/>); //add astroEvents, moonphase 
}