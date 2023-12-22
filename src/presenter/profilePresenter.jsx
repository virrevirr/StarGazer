import ProfileView from "../views/profileView.jsx";
import { connect } from "./loginPresenter";

export default function Profile(props){
    
    function clickedLocationACB(input){
        //API calls to neccesary APIs for the information that will 
        //be displayed in information view

        //input is the currentLocation object
        props.model.setCurrentLocation(input); 
        
        //Fetch is made using name of City
        props.model.setCurrentWeatherCity(input.city); 
        
        //moon phase is the same everywhare, no extra parameter needed.
        props.model.setCurrentMoon(); 
    
        //Fetch is made using the name of the Country
        props.model.setCurrentNewsCountry(input.country);
    }

    function removeCityACB(city){
        //Removes the chosen saved location
        props.model.removeFromWantToGo(city)
        props.model.removeFromVisited(city)
    }

    return (<ProfileView
        onLocationClick={clickedLocationACB}
        wantToGoPlaces={props.model.wantToGo || []} //An empty array is not saved in model
        haveVisitedPlaces={props.model.haveVisited || []}
        deleteCityButton={removeCityACB}
        userName={props.model.user.displayName}
        loginCB ={connect}
        />); 
}