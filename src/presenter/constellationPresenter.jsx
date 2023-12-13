// this will be a presenter for each constellation
// similar to detailsPresenter but for information for constellation
import starConstellations from "../starConstellations.jsx"

import ConstellationView from "../views/constellationView.jsx";

//model is starModel
export default function Constellation(props){

    function promiseData(promiseState){
        if(!promiseState.promise){//if promiseState.promise is false, no data should be returned.
            return "no data"; }  
        else{ // if promise is true, check data and error. 
            if(!promiseState.data){
                if(!promiseState.error){return <img src="https://brfenergi.se/iprog/loading.gif"/>;}
                return promiseState.error.toString(); //if promiseState.error is true and promise.data is false return error 
            }
            return <ConstellationView className="in promise state" 
            constellationData = {promiseState.data}
            constellationUrl = {starConstellations[promiseState.data[0].constellation]}/>;
        }
    }

    return (
        promiseData(props.model.constellationPromiseState)
        );
}