import AllConstellationsView from "../views/allConstellationsView.jsx";
import starConstellations from "../starConstellations.jsx"
import { connect } from "./loginPresenter";

export default function AllConstellations(props){

    function onConstellationClickACB(constellation){
        props.model.fetchConstellation(constellation);
    }

    return (
        <div>
            <AllConstellationsView
            allConstellations = {starConstellations}
            onConstellationClick= {onConstellationClickACB}
            loginCB ={connect}
            /> 
        </div>
        );
}