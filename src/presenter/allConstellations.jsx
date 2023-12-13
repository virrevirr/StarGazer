
import AllConstellationsView from "../views/allConstellationsView";
import starConstellations from "../starConstellations.jsx"

export default function AllConstellations(props){

    function onConstellationClickACB(input){
        props.model.setCurrentConstellation(input);
    }

    return (
        <div>
            <AllConstellationsView
            allConstellations = {starConstellations}
            onClick= {onConstellationClickACB} //startSearch from model (makes a promise) 
            /> 
            {promiseData(props.model.searchConstellationPromiseState)}
            
        </div>
        );
}