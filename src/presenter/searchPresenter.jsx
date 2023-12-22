// ACBer som krävs för sökningen på plats namn, samt promiseState funktion för ladd gif etc. Ska vi displaya alla
// relevanta stjärnbilder också (psv i labben med dishes för att göra det enklare?)

import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";
import { connect } from "./loginPresenter";

export default function Search(props){
    function setSearchInputACB(newInput){
        // asyncronous callback to handle the user input
        props.model.setSearch(newInput);
    }

    function searchNowACB(){
        // asyncronous callback to handle the search
        props.model.startSearch(props.model.searchParams);
    }

    function onLocationClickACB(input){
        // asyncronous callback to set the location and the news, weather and moon phase in that country
        props.model.setCurrentLocation(input);

        props.model.setCurrentWeatherCity(input.city);
        
        props.model.setCurrentMoon();

        /*const countryToCode = countries[input.country].alpha2;
        const languageToCode = countries[input.country].iso6391;
        const astronomyTranslated = countries[input.country].astronomy;*/
        props.model.setCurrentNewsCountry(input.country);
    }


    function promiseData(promiseState){
        //if promiseState.promise is false, no data should be returned.
        if(!promiseState.promise){
            return <p>no data</p>;
        }  
        // if promise is true, check data and error. 
        if(!promiseState.data){
            if(!promiseState.error){
                return <img src="https://brfenergi.se/iprog/loading.gif" height = {"50"}/>;
            }
            return <p>{promiseState.error.toString()}</p>; //if promiseState.error is true and promise.data is false return error 
        }
        // presenting search result if a search has been made
        return <SearchResultsView 
        searchResult = {props.model.searchResultsPromiseState.data}
        onLocationClick = {onLocationClickACB}/>;
    }

    return (
        <div>
            {/* first we render the search view */}
            <SearchFormView
            
            //the user input
            text = {props.model.searchParams}

            userInput= {setSearchInputACB} //setSearch from model
            clickSearch= {searchNowACB} //startSearch from model (makes a promise) 
            loginCB ={connect}/> 
            
            {/*Code with api fetch*/}
            {/*promiseData(props.model.searchResultsPromiseState)*/}
            
            {/* then we render the results view */}
            {/* Test code without api fetch */}
            {<SearchResultsView onLocationClick = {onLocationClickACB}/>}
            
        </div>
        );
}