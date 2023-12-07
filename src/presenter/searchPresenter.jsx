// ACBer som krävs för sökningen på plats namn, samt promiseState funktion för ladd gif etc. Ska vi displaya alla
// relevanta stjärnbilder också (psv i labben med dishes för att göra det enklare?)

import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";

export default function Search(props){
    function setSearchInputACB(newInput){
        props.model.setSearch(newInput);
    }

    function searchNowACB(){
        props.model.startSearch(props.model.searchParams)
    }

    function handleCurrentLocationACB(input){
        props.model.setCurrentLocation(input.query)
    }


    function searchResult(searchResultPromiseState){
        if (searchResultPromiseState){
            return(
                <SearchResultsView
                searchResult = {searchResultPromiseState.data}
                onLocationClickACB = {handleCurrentLocationACB}
                />
            );
        }

        if (searchResultPromiseState.promise && !searchResultPromiseState.error && !searchResultPromiseState.data) {
            // if a promise has been made we show a loading image before the data is loaded and if there are no errors
            return <img src="https://brfenergi.se/iprog/loading.gif"/>;}
        
        if (searchResultPromiseState.error) {
            // if there was an error we return it as a string
            return <div>{String(searchResultPromiseState.error)}</div>;}
    
        if (!searchResultPromiseState.promise)
            // if no search has been made, i.e. no promise has been made, we show no data
            {return "No data";} 
        
    }

    return(
        <div>
            <SearchFormView
            text = {props.model.searchParams}

            userInputACB= {setSearchInputACB}
            clickSearchACB= {searchNowACB}
            />
        {
        searchResult(props.model.searchResultsPromiseState)
    } 
        </div>

        
    )

}