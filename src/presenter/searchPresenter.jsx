// ACBer som krävs för sökningen på plats namn, samt promiseState funktion för ladd gif etc. Ska vi displaya alla
// relevanta stjärnbilder också (psv i labben med dishes för att göra det enklare?)

import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";
import countries from "/src/countries.jsx"
import { connect } from "./loginPresenter";

export default function Search(props){
    function setSearchInputACB(newInput){
        props.model.setSearch(newInput);
    }

    function searchNowACB(){
        props.model.startSearch(props.model.searchParams);
    }

    function onLocationClickACB(input){
        props.model.setCurrentLocation(input);

        props.model.setCurrentWeather(input.city);
        
        props.model.setCurrentMoon();

        /*const countryToCode = countries[input.country].alpha2;
        const languageToCode = countries[input.country].iso6391;
        const astronomyTranslated = countries[input.country].astronomy;
        props.model.setCurrentNews(languageToCode, countryToCode, astronomyTranslated);*/
        props.model.setCurrentNews(countries[input.country]);

    }

    function promiseData(promiseState){
        if(!promiseState.promise){//if promiseState.promise is false, no data should be returned.
            return <p>no data</p>;
        }  
        // if promise is true, check data and error. 
        if(!promiseState.data){
            if(!promiseState.error){
                return <img src="https://brfenergi.se/iprog/loading.gif" height = {"50"}/>;
            }
            return <p>{promiseState.error.toString()}</p>; //if promiseState.error is true and promise.data is false return error 
        }
        return <SearchResultsView className="in promise state" searchResult = {props.model.searchResultsPromiseState.data}
        onLocationClick = {onLocationClickACB}/>;
    }

    return (
        <div>
            <SearchFormView
            text = {props.model.searchParams}
            userInput= {setSearchInputACB} //setSearch from model
            clickSearch= {searchNowACB} //startSearch from model (makes a promise) 
            loginCB ={connect}/> 
            
            {/*Code with api fetch*/}
            {/*promiseData(props.model.searchResultsPromiseState)*/}
            
            {/* Test code without api fetch */}
            {<SearchResultsView onLocationClick = {onLocationClickACB}/>}
            
        </div>
        );
}