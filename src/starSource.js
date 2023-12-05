//funkar som dishSource.js

import {BASE_URL, API_KEY} from "./apiConfig.js";

//API search for places
export function searchPlaces(searchParams){
    const queryPlace = new URLSearchParams(searchParams).toString();
    const source = BASE_URL +"recipes/complexSearch?"+ queryPlace;
    
    return fetch(source, {
        method:"GET", 
        headers: {'X-Mashape-Key': API_KEY},
        params: {searchby: "city"}, //då vi bara vill titta på städer.
    }).then(getJsonACB).then(keepArrayACB);
}

function getJsonACB(resp){
    if(!resp.ok){
        throw new Error("Something went wrong with the fetch"+ resp.status);
    }
    return resp.json();
}

function keepArrayACB(searchInput){ 
    return searchInput.results;
}
