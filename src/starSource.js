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
    // Using GeoDB Cities API (free tier: 500 requests/day)

    const queryPlace = new URLSearchParams({
        "namePrefix": searchParams,
        "limit": 10,
        "offset": 0,
        "sort": "-population"
    }).toString();
    const source = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?" + queryPlace;

    return fetch(source, {
        method:"GET",
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    }).then(getJsonACB).then(function(response) {
        // GeoDB returns cities in response.data array, need to transform to match your format
        if (response.data && response.data.length > 0) {
            return response.data.map(city => ({
                city: city.name,
                state: city.region || "",
                country: city.country,
                countryCode: city.countryCode
            }));
        }
        return [];
    });
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