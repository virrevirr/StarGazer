import AllConstellationsView from "../views/allConstellationsView.jsx";
import starConstellations from "../starConstellations.jsx" // Importing constellation dictionary
import { connect } from "./loginPresenter";

export default function AllConstellations(props){
    function onConstellationClickACB(constellation){
        // Fetches the stars included in the clicked constellation
        props.model.setCurrentConstellation(constellation);
    }

    return (
        <div>
            <AllConstellationsView
            location = {props.model.currentLocation}
            allConstellations = {starConstellations}
            onConstellationClick= {onConstellationClickACB}
            loginCB ={connect}
            /> 
        </div>
        );
}