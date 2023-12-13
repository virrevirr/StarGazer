// Search presenter för stjärnbilderna, ska likna searchPresenter.jsx
// importera listan från constellations.jsx
// skicka listan till searchConstellationView.jsx

import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";
import starConstellations from "/src/starConstellations.jsx"

export default function Constellation(props){

    function setSearchInputACB(newInput){
        props.model.setSearchConstellations(newInput);
    }

    function searchNowACB(){
        props.model.startSearchConstellation(props.model.searchParams);
    }

    function onLocationClickACB(input){
        props.model.setCurrentConstellation(input);
        props.model.searchConstellation();
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