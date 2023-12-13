// this will be a presenter for each constellation
// similar to detailsPresenter but for information for constellation

import ConstellationView from "../views/constellationView.jsx";

//model is starModel
export default function Constellation(props){

    function promiseConstellationData(promiseState){
        {/* Gör om */}
        if(!promiseState.promise){//if promiseState.promise is false, no data should be returned.
            return "no data";
        }  
        else{ // if promise is true, check data and error. 
            if(!promiseState.data){
                if(!promiseState.error){return <img src="https://brfenergi.se/iprog/loading.gif"/>;}
                return promiseState.error.toString(); //if promiseState.error is true and promise.data is false return error 
            }
            else{
            return (<ConstellationView constellationData = {promiseState.data}/> );}
        }
    }

    return (
        <div>

        {promiseConstellationData(props.model.constellationPromiseState)}

        </div>
        );
}