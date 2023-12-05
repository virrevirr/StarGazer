import InformationView from "informationView.jsx";

//model is starModel
export default function Information(props){
    function visitedCB(location){return location === props.model.currentLocation;}
    function addToWantToGoACB(){props.model.addToMenu(props.model.currentLocationPromiseState.data);}
    function addVisitedACB(){props.model.addToMenu(props.model.currentLocationPromiseState.data);}

    function promiseNoData(promiseState){
        if(!promiseState.promise){//if promiseState.promise is false, no data should be returned.
            return "no data";
        }  
        else{ // if promise is true, check data and error. 
            if(!promiseState.data){
                if(!promiseState.error){return <img src="https://brfenergi.se/iprog/loading.gif"/>;}
                return promiseState.error.toString(); //if promiseState.error is true and promise.data is false return error 
            }
            return false; //if promiseState.data is true (and promiseState.promise is true) return view
        }
    }

    return (promiseNoData(props.model.currentLocationPromiseState) || 
    (<InformationView 
        locationData={props.model.currentLocationPromiseState.data} 
        isLocVisited={props.model.haveVisited.find(visitedCB)} //isLocVisited expected to be falsy with empty menu
        WantToGoACB={addToWantToGoACB}
        VisitedACB={addVisitedACB}/>) //add astroEvents, moonphase 
        );
}