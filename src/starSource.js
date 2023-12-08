//funkar som dishSource.js

import { API_KEY} from "./apiConfig.js";

//API search for places
export function searchPlaces(searchParams){
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
    console.log(resp);
    return resp.text();
}
function keepArrayACB(searchInput){ 
    console.log(searchInput);
    return searchInput.results;
}
