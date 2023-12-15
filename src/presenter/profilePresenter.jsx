import ProfileView from "../views/profileView.jsx";
import countries from "../countries.jsx";

export default function Profile(props){
    function clickedLocationACB(input){
        console.log("input in profilePresenter", input)
        props.model.setCurrentLocation(input);
        props.model.searchWeatherByCity(input.city);
        //props.model.getMoon();

        const countryToCode = countries[input.country].alpha2;
        const languageToCode = countries[input.country].iso6391;
        const astronomyTranslated = countries[input.country].astronomy;
        props.model.searchNewsByCountry(languageToCode, countryToCode, astronomyTranslated);
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