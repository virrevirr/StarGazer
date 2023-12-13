// this will be a presenter for each constellation
// similar to detailsPresenter but for information for constellation

import ConstellationView from "../views/constellationView.jsx";

//model is starModel
export default function Constellation(props){

    return (
        <ConstellationView
            constellationData={props.model}
        /> 
        );
}