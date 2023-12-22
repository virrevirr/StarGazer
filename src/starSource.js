
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
export function getNewsDetails(astronomy, languageCode, countryCode){
    /*keyword: astronomy, lr: languageCode+'-'+countryCode*/
    const queryPlace = new URLSearchParams({keyword: astronomy, lr: languageCode+'-'+countryCode}).toString();
    const source = 'https://google-news13.p.rapidapi.com/search?' + queryPlace;
    
    return fetch(source, {
        method:"GET", 
        headers: {'X-Mashape-Key': API_KEY}
    }).then(getJsonACB).then(keepArrayACB);
}

//API moon
export function getMoonDetails(){
    // using budapest as a default because the moon phase is the same all over the world
    const queryPlace = new URLSearchParams({city:"budapest"}).toString();
    const source = 'https://moon-phase1.p.rapidapi.com/?' + queryPlace;
    
    return fetch(source, {
        method:"GET", 
        headers: {'X-Mashape-Key': API_KEY_MOON}
    }).then(getJsonACB).then(keepArrayACB);
}

//API constellation
export function getConstellationDetails(chosenConstellation){
    /*gives us all the stars that are included in the constellation we have chosen*/
    const queryPlace = new URLSearchParams({constellation:chosenConstellation}).toString();
    const source = 'https://stars-by-api-ninjas.p.rapidapi.com/v1/stars?' + queryPlace;
    
    return fetch(source, {
        method:"GET", 
        headers: {'X-Mashape-Key': API_KEY},
    }).then(getJsonACB).then(keepArrayACB);
}