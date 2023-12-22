import ProfileView from "../views/profileView.jsx";
import { connect } from "./loginPresenter";

export default function Profile(props){
    
    function clickedLocationACB(input){
        props.model.setCurrentLocation(input); //location object that we save
        
        props.model.setCurrentWeatherCity(input.city);
        
        props.model.setCurrentMoon();

        props.model.setCurrentNewsCountry(input.country);
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