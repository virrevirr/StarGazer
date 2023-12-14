import AllConstellationsView from "../views/allConstellationsView.jsx";
import starConstellations from "../starConstellations.jsx"

export default function AllConstellations(props){

    function onConstellationClickACB(constellation){
        console.log("Constellation clicked:", constellation)
        props.model.fetchConstellation(constellation);
    }

    return (
        <div>
            <AllConstellationsView
            allConstellations = {starConstellations}
            onConstellationClick= {onConstellationClickACB} //startSearch from model (makes a promise) 
            /> 
        </div>
        );
}