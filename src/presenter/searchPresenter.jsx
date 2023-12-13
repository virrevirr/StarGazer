// ACBer som krävs för sökningen på plats namn, samt promiseState funktion för ladd gif etc. Ska vi displaya alla
// relevanta stjärnbilder också (psv i labben med dishes för att göra det enklare?)

import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";
import countries from "/src/countries.jsx"

export default function Search(props){
    function setSearchInputACB(newInput){
        props.model.setSearch(newInput);
    }

    function searchNowACB(){
        props.model.startSearch(props.model.searchParams);
    }

    function onLocationClickACB(input){
        props.model.setCurrentLocation(input);

        // gör även i profile on location click
        props.model.searchWeatherByCity(input.city);
        props.model.getMoon();

        const countryToCode = countries[input.country].alpha2;
        const languageToCode = countries[input.country].iso6391;
        console.log("Country code", countryToCode);
        console.log("Language code", languageToCode);
        props.model.searchNewsByCountry(languageToCode, countryToCode);
        //props.model.searchConstellation();
    }

    function promiseData(promiseState){

        {/* Code with api fetch */}
        if(!promiseState.promise){//if promiseState.promise is false, no data should be returned.
            return "no data";
        }  
        else{ // if promise is true, check data and error. 
            if(!promiseState.data){
                if(!promiseState.error){return <img src="https://brfenergi.se/iprog/loading.gif"/>;}
                return promiseState.error.toString(); //if promiseState.error is true and promise.data is false return error 
            }
            return <SearchResultsView className="in promise state" searchResult = {props.model.searchResultsPromiseState.data}
            onLocationClick = {onLocationClickACB}/>;
        }

        {/* Test code without api fetch */}
        /*return <SearchResultsView
            onLocationClick = {onLocationClickACB}
             />;*/
    }

    return (
        <div>
            <SearchFormView
            text = {props.model.searchParams}
            userInput= {setSearchInputACB} //setSearch from model
            clickSearch= {searchNowACB} //startSearch from model (makes a promise) 
/> {promiseData(props.model.searchResultsPromiseState)}
            
        </div>
        );
}