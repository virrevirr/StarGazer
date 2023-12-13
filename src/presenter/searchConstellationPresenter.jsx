// Search presenter för stjärnbilderna, ska likna searchPresenter.jsx
// importera listan från constellations.jsx
// skicka listan till searchConstellationView.jsx

import ResultsConstellationView from "../views/resultsConstellationView";
import SearchConstellationView from "../views/searchConstellationView";
import starConstellations from "/src/starConstellations.jsx"

export default function SearchConstellation(props){

    function setSearchInputACB(newInput){
        props.model.setSearchConstellation(newInput);
    }

    function searchNowACB(){
        props.model.startSearchConstellation(props.model.searchParams);
    }

    function onConstellationClickACB(input){
        props.model.setCurrentConstellation(input);
    }

    function promiseData(promiseState){
        if(!promiseState.promise){//if promiseState.promise is false, no data should be returned.
            return "no data"; }  
        else{ // if promise is true, check data and error. 
            if(!promiseState.data){
                if(!promiseState.error){return <img src="https://brfenergi.se/iprog/loading.gif"/>;}
                return promiseState.error.toString(); //if promiseState.error is true and promise.data is false return error 
            }
            return <ResultsConstellationView className="in promise state" 
            searchResult = {props.model.searchConstellationPromiseState.data}
            onConstellationClick = {onConstellationClickACB}/>;
        }
    }

    return (
        <div>
            <SearchConstellationView
            text = {props.model.searchConstellationParams}
            userInput= {setSearchInputACB} //setSearch from model
            clickSearch= {searchNowACB} //startSearch from model (makes a promise) 
            /> {promiseData(props.model.searchConstellationPromiseState)}
            
        </div>
        );
}