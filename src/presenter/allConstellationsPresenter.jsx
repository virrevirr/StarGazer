import AllConstellationsView from "../views/allConstellationsView.jsx";
import starConstellations from "../starConstellations.jsx"
import { connect } from "./loginPresenter";

export default function AllConstellations(props){

    function onConstellationClickACB(constellation){
        /*Fetches the stars included in the chosen constellation*/
        /*props.model.fetchConstellation(props.model.currentConstellation);*/
        props.model.setCurrentConstellation(constellation);
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