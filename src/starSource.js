//funkar som dishSource.js

import {API_LOCATION_KEY} from "./apiConfig.js";
import {API_WEATHER_KEY} from "./apiConfig.js";

//API search for places
export function searchPlaces(searchParams){
    const queryPlace = new URLSearchParams({"query":searchParams, "searchby":"city"}).toString(); //blir rätt format nu
    const source = "https://andruxnet-world-cities-v1.p.rapidapi.com/?" + queryPlace;
    
    return fetch(source, {
        method:"GET", 
        headers: {'X-Mashape-Key': API_LOCATION_KEY}
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

export function getPlaceDetails(location){
    return location;
}

console.log()



//API weather
export function getWeatherDetails(searchParams){
    const queryPlace = new URLSearchParams({"query":searchParams, "searchby":"city"}).toString(); //blir rätt format nu
    const source = "https://andruxnet-world-cities-v1.p.rapidapi.com/?" + queryPlace;
    
    return fetch(source, {
        method:"GET", 
        headers: {'X-Mashape-Key': API_WEATHER_KEY}
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

export function getPlaceDetails(location){
    return location;
}

console.log()