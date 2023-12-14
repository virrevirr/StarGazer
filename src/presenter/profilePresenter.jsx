import ProfileView from "../views/profileView.jsx";
import countries from "../countries.jsx";

export default function Profile(props){
    function clickedLocationACB(input){
        props.model.setCurrentLocation(input);
        props.model.searchWeatherByCity(input.city);
        props.model.getMoon();

        const countryToCode = countries[input.country].alpha2;
        const languageToCode = countries[input.country].iso6391;
        console.log("Country code", countryToCode);
        console.log("Language code", languageToCode);
        props.model.searchNewsByCountry(languageToCode, countryToCode);
    }

    function clickedConstellationACB(input){
        props.model.fetchConstellation(constellation);
    }

    return (<ProfileView
        onLocationClick={clickedLocationACB}
        onConstellationClick = {clickedConstellationACB}
        wantToGoPlaces={props.model.wantToGo || []}
        haveVisitedPlaces={props.model.haveVisited || []}
        />); 
        /* Funktionalitet: exportera användarens namn/användarnamn till viewn */
}