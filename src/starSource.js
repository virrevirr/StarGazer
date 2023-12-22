// Importing API keys for the APIs
import {API_KEY} from "./apiConfig.js";
import {API_KEY_MOON} from "./apiConfig.js";


function getJsonACB(resp){
    // Checking if the fetch worked 
    // Returning either the json property of the response or throwing the error
    if(!resp.ok){
        throw new Error("Something went wrong with the fetch"+ resp.status);
    }
    return resp.json();
}

function keepArrayACB(searchInput){ 
    // Keeping the array
    console.log("searchInput: ", searchInput);
    return searchInput;
}

export function searchPlaces(searchParams){
    // Fetch API for cities with user input

    /* Code with api fetch */
    /*const queryPlace = new URLSearchParams({"query":searchParams, "searchby":"city"}).toString();
    const source = "https://andruxnet-world-cities-v1.p.rapidapi.com/?" + queryPlace;
    
    return fetch(source, {
        method:"GET", 
        headers: {'X-Mashape-Key': API_KEY}
    }).then(getJsonACB).then(keepArrayACB);*/
}


export function getWeatherDetails(location){
    // Fetch API for weather forecast with the city location
    // Gives us a 3 day weather forecast
    const queryPlace = new URLSearchParams({"q":location, "days":"3"}).toString();
    const source = "https://weatherapi-com.p.rapidapi.com/forecast.json?" + queryPlace;
    
    return fetch(source, {
        method:"GET", 
        headers: {'X-Mashape-Key': API_KEY}
    }).then(getJsonACB).then(keepArrayACB);
}


export function getNewsDetails(astronomy, languageCode, countryCode){
    // Fetch API for google news with astronomy, language code and country code
    // Gives us news in the local langugage
    const queryPlace = new URLSearchParams({keyword: astronomy, lr: languageCode+'-'+countryCode}).toString();
    const source = 'https://google-news13.p.rapidapi.com/search?' + queryPlace;
    
    return fetch(source, {
        method:"GET", 
        headers: {'X-Mashape-Key': API_KEY}
    }).then(getJsonACB).then(keepArrayACB);
}

export function getMoonDetails(){
    // Fetch API for moon phase with budapest as a default because the moon phase is the same all over the world
    const queryPlace = new URLSearchParams({city:"budapest"}).toString();
    const source = 'https://moon-phase1.p.rapidapi.com/?' + queryPlace;
    
    return fetch(source, {
        method:"GET", 
        headers: {'X-Mashape-Key': API_KEY_MOON}
    }).then(getJsonACB).then(keepArrayACB);
}


export function getConstellationDetails(chosenConstellation){
    // Fetch API for stars with constellation
    // Gives us all the stars that are included in the constellation we have chosen
    const queryPlace = new URLSearchParams({constellation:chosenConstellation}).toString();
    const source = 'https://stars-by-api-ninjas.p.rapidapi.com/v1/stars?' + queryPlace;
    
    return fetch(source, {
        method:"GET", 
        headers: {'X-Mashape-Key': API_KEY},
    }).then(getJsonACB).then(keepArrayACB);
}