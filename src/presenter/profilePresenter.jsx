import ProfileView from "../views/profileView.jsx";
import countries from "../countries.jsx";
import { connect } from "./loginPresenter";

export default function Profile(props){
    function clickedLocationACB(input){
        props.model.setCurrentLocation(input); //location object that we save
        
        props.model.setCurrentWeather(input.city);
        
        props.model.setCurrentMoon();

        /*const countryToCode = countries[input.country].alpha2;
        const languageToCode = countries[input.country].iso6391;
        const astronomyTranslated = countries[input.country].astronomy;
        props.model.setCurrentNews(languageToCode, countryToCode, astronomyTranslated);*/
        props.model.setCurrentNews(countries[input.country]);
    }

    function removeCityACB(city){
        props.model.removeFromWantToGo(city)
        props.model.removeFromVisited(city)
    }

    return (<ProfileView
        onLocationClick={clickedLocationACB}
        wantToGoPlaces={props.model.wantToGo || []}
        haveVisitedPlaces={props.model.haveVisited || []}
        deleteCityButton={removeCityACB}
        userName={props.model.user.displayName}
        loginCB ={connect}
        />); 
}