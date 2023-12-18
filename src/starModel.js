import { getConstellationDetails, getMoonDetails, getNewsDetails, getWeatherDetails, searchPlaces } from "./starSource";
import resolvePromise from "./resolvePromise"

export default{
    wantToGo: [], //Kommer behövas för att displaya locations i personal profile
    haveVisited: [],
    currentLocation: null, //Som currentDish, för att lägga till locations
    //ready: false, // set till true när promise from firebase is resolved (model.ready)
    currentLocationPromiseState: {},

    doesObjectMatch(obj, targetLocation) {
        // Checking if the city is already in the list
        return obj["city"] === targetLocation.city && obj["state"] === targetLocation.state
                 && obj["country"] === targetLocation.country;
    },

    addToWantToGo(locToAdd){
        // Add city to haveVisited
        const foundObject = this.wantToGo.find(obj => this.doesObjectMatch(obj, locToAdd));
        // Adding the city to the list if it is not already there
        foundObject || (this.wantToGo = [...this.wantToGo, locToAdd]);
    },

    addToVisited(locToAdd){
        // Add city to haveVisited
        const foundObject = this.haveVisited.find(obj => this.doesObjectMatch(obj, locToAdd));
        // Adding the city to the list if it is not already there
        foundObject || (this.haveVisited = [...this.haveVisited, { ...locToAdd, constellations: ["No constellations"] }]);
    },

    addToSeen(location, constellationToAdd){
        // Add constellation to a specific city in haveVisited
        const foundObject = this.haveVisited.find(obj => this.doesObjectMatch(obj, location));

        function filterCB(item, index, array){
            // remove "No constellations" if we have a constellation
            item !== "No constellations";
        }
        // Adding the constellation to the city object and removing duplicates
        foundObject && (foundObject["constellations"] = foundObject["constellations"].includes("No constellations")
        ? [...new Set([...foundObject["constellations"].filter(filterCB), constellationToAdd])]
        : [...new Set([...foundObject["constellations"], constellationToAdd])]);
    },

    removeFromVisited(locToRemove){
        function shouldWeKeepLocCB(location){
            return location !== locToRemove;  
        }
        this.haveVisited = [...this.haveVisited].filter(obj => obj.location !== locToRemove);    
    },

    removeFromWantToGo(locToRemove){
        function shouldWeKeepConstCB(location){
            return location !== locToRemove;
        }
        this.wantToGo = this.wantToGo.filter(shouldWeKeepConstCB);
    },

    setCurrentLocation(location){
        if (location === this.currentLocation || !location){
            return;
        }
        this.currentLocation = location
    }, 

    weatherPromiseState: {},

    searchWeatherByCity(city){
        resolvePromise(getWeatherDetails(city), this.weatherPromiseState);
    },
    
    moonPromiseState: {},

    getMoon(){

        {/* Code with api fetch */}
        //resolvePromise(getMoonDetails(), this.moonPromiseState);
    },

    newsPromiseState: {},

    searchNewsByCountry(languageCode, countryCode, astronomyTranslated){
        resolvePromise(getNewsDetails(languageCode, countryCode, astronomyTranslated), this.newsPromiseState);
    },

    searchParams: {},
    searchResultsPromiseState: {},

    setSearch(queryText){ // används i searchPresenter för att koppla till 
        this.searchParams = queryText
    },

    startSearch(searchParams){

        {/* Code with api fetch */}
        //resolvePromise(searchPlaces(searchParams), this.searchResultsPromiseState);
    },

    constellationPromiseState: {},

    fetchConstellation(constellation){
        resolvePromise(getConstellationDetails(constellation), this.constellationPromiseState);
    },
}