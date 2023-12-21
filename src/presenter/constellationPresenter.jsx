// this will be a presenter for each constellation
// similar to detailsPresenter but for information for constellation
import ConstellationView from "../views/constellationView.jsx";
import { connect } from "./loginPresenter";
//model is starModel

export default function Constellation(props){
    
    function haveSeenACB(constellation){
        /*props.model.currentConstellation ist? */
        props.model.addToSeen(props.model.currentLocation, constellation);
    }

    function promiseData(promiseState){
        if(!promiseState.promise){//if promiseState.promise is false, no data should be returned.
            return <p>no data</p>; 
        }  
        // if promise is true, check data and error. 
        if(!promiseState.data){
            if(!promiseState.error){
                return <img src="https://brfenergi.se/iprog/loading.gif" height = {"50"}/>;
            }
            return <p>{promiseState.error.toString()}</p>; //if promiseState.error is true and promise.data is false return error 
        }
        return <ConstellationView 
        currentConstellation = {promiseState.data}
        haveSeen = {haveSeenACB} 
        loginCB ={connect}/>;
    }

    return (promiseData(props.model.constellationPromiseState));
}