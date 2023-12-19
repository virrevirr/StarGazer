import ProfileView from "../views/profileView.jsx";
import countries from "../countries.jsx";
import { connect } from "./loginPresenter";

export default function Profile(props){
    function clickedLocationACB(input){
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

    function removeCityACB(city){
        props.model.removeFromWantToGo(city)
        props.model.removeFromVisited(city)
    }

    return (<ProfileView
        onLocationClick={clickedLocationACB}
        onConstellationClick = {clickedConstellationACB}
        wantToGoPlaces={props.model.wantToGo || []}
        haveVisitedPlaces={props.model.haveVisited || []}
        deleteCityButton={removeCityACB}
        userName={props.model.user.displayName}
        loginCB ={connect}
        />); 
        /* Funktionalitet: exportera användarens namn/användarnamn till viewn */
}