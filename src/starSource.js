//funkar som dishSource.js

import {API_KEY} from "./apiConfig.js";

//API search for places
export function searchPlaces(searchParams){

    {/* KOMMENTERA TILLBAKA */}
    const queryPlace = new URLSearchParams({"query":searchParams, "searchby":"city"}).toString(); //blir rätt format nu
    const source = "https://andruxnet-world-cities-v1.p.rapidapi.com/?" + queryPlace;
    
    return fetch(source, {
        method:"GET", 
        headers: {'X-Mashape-Key': API_KEY}
    }).then(getJsonACB).then(keepArrayACB);
}

function getJsonACB(resp){
    if(!resp.ok){
        throw new Error("Something went wrong with the fetch"+ resp.status);
    }
    return resp.json();
}
function keepArrayACB(searchInput){ // kanske måste göra så att resultatet kommer på ett format som
    return searchInput;
}



//API weather
export function getWeatherDetails(location){
    const queryPlace = new URLSearchParams({"q":location, "days":"3"}).toString();
    const source = "https://weatherapi-com.p.rapidapi.com/forecast.json?" + queryPlace;
    
    return fetch(source, {
        method:"GET", 
        headers: {'X-Mashape-Key': API_KEY}
    }).then(getJsonACB).then(keepArrayACB);
}


//API news
export function getNewsDetails(countryCode){
    const queryPlace = new URLSearchParams({keyword: 'astronomy', lr: 'sv-'+countryCode}).toString();
    const source = 'https://google-news13.p.rapidapi.com/search?' + queryPlace;
    
    return fetch(source, {
        method:"GET", 
        headers: {'X-Mashape-Key': API_KEY}
    }).then(getJsonACB).then(keepArrayACB);
}

//API moon
export function getMoonDetails(){
    const queryPlace = new URLSearchParams({city:"budapest"}).toString();
    const source = 'https://moon-phase1.p.rapidapi.com/?' + queryPlace;
    
    return fetch(source, {
        method:"GET", 
        headers: {'X-Mashape-Key': API_KEY}
    }).then(getJsonACB).then(keepArrayACB);
}

//API constellation
export function getConstellationDetails(){
    /*
    Försök på stjärnbilder som inte gick så bra

    const source = 'https://astronomy.p.rapidapi.com/api/v2/studio/star-chart'
    
    return fetch(source, {
        method:"POST", 
        headers: {'X-Mashape-Key': API_KEY},
        body: {
        observer: {date: '2019-12-20', latitude: 33.775867, longitude: -84.39733},
        style: 'inverted',
        view: {parameters: {constellation: 'ori'}, type: 'constellation'}
            }
    }).then(getJsonACB).then(keepArrayACB);*/
}