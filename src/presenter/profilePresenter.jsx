// måste ge profile view props, starModel baserad på api för stjärnbilderna. 
//(Fråga till TA: kan man använda flera models och skicka in props?, följdfråga är annars om 
// man kan göra en model som använder flera api:er? funderar då vi måste "koppla ihop" den med platskoordinater
// och koordinater för stjärnbilderna)

import ProfileView from "../views/profileView.jsx";

export default function Profile(props){
    function clickedLocationACB(input){
        props.model.setCurrentLocation(input);
    }
    return (<ProfileView 
        onLocationClick={clickedLocationACB}
        wantToGoPlaces={props.model.wantToGo || []}
        haveVisitedPlaces={props.model.haveVisited || []}/>); 
}