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