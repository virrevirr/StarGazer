import { getConstellationDetails, getMoonDetails, getNewsDetails, getWeatherDetails, searchPlaces } from "./starSource";
import resolvePromise from "./resolvePromise"

export default{
    wantToGo: [], //Kommer behövas för att displaya locations i personal profile
    haveVisited: [],
    currentLocation: null, //Som currentDish, för att lägga till locations
    //ready: false, // set till true när promise from firebase is resolved (model.ready)
    currentLocationPromiseState: {},

    addToWantToGo(locToAdd){
        // Use an arrow function to preserve the 'this' context
    function isCityInList(cityToCheck) {
        return this.wantToGo.some(obj => obj.city === cityToCheck);
    };

    // Check if locToAdd is already a value for the "city" parameter
    if (!isCityInList(locToAdd.city)) {
        this.wantToGo = [...this.wantToGo, locToAdd];
        console.log('Location added:', this.wantToGo);
    }
    },

    //We save searchQuery in locToAdd, so just a str that has been inputted. 
    addToVisited(locToAdd){
        // Add city to haveVisited
        function isObjectMatch(obj, city, targetCity) {
            return obj[city] === targetCity;
        }

        function isObjectInList(list, city, targetCity) {
            // Checking if the city is already in the haveVisited list
            const foundObject = list.find(obj => isObjectMatch(obj, city, targetCity));
            
            if (foundObject) {
                // Adding the city to the list if it is not already there
                if (!foundObject){
                    
                }
            }
        }

        function isCityInList(cityToCheck) {
            return this.wantToGo.some(obj => obj.city === cityToCheck);
        }

        // Check if locToAdd is already a value for the "city" parameter
        if (!isCityInList(locToAdd.city)) {
            this.wantToGo = [...this.wantToGo, locToAdd];
            console.log('Location added:', this.wantToGo);
        }
        isObjectInList(this.haveVisited, "city", this.currentLocation.city)
    },

    addToSeen(constellationToAdd){
        // Add constellation to a specific city in haveVisited
        function isObjectMatch(obj, city, targetCity) {
            return obj[city] === targetCity;
        }

        function isObjectInList(list, city, targetCity, newParameter, newValue) {
            // Checking if the city is in the haveVisited list
            const foundObject = list.find(obj => isObjectMatch(obj, city, targetCity));
            
            if (foundObject) {
                // Adding the constellation to the city object
                if (foundObject[newParameter]){
                    foundObject[newParameter].push(newValue);
                }
                else{
                foundObject[newParameter] = [newValue]}
            }
        }
        isObjectInList(this.haveVisited, "city", this.currentLocation.city, "constellations", constellationToAdd)
        console.log("this.haveVisited", this.haveVisited)
    },

    removeFromVisited(locToRemove){
        function shouldWeKeepLocCB(location){
            return location !== locToRemove;  
        }
        this.haveVisited = this.haveVisited.filter(shouldWeKeepLocCB);
    },

    removeFromWantToGo(locToRemove){
        function shouldWeKeepConstCB(location){
            return location !== locToRemove;
        }
        this.wantToGo = this.wantToGo.filter(shouldWeKeepConstCB);
    },

    setCurrentLocation(location){

        {/* Code with api fetch */}
        if (location === this.currentLocation || !location){
            return;
        }
        this.currentLocation = location

        {/* Test code without api fetch */}
        /*this.currentLocation = {
            city: "Paris",
            state: "Paris",
            country: "France",
          };*/
    },  


    weatherPromiseState: {},

    searchWeatherByCity(city){
        // liknande startSearch
        resolvePromise(getWeatherDetails(city), this.weatherPromiseState);
    },

    
    moonPromiseState: {},

    getMoon(){
        // liknande startSearch
        resolvePromise(getMoonDetails(), this.moonPromiseState);
    },

    newsPromiseState: {},

    searchNewsByCountry(languageCode, countryCode){
        // liknande startSearch
        resolvePromise(getNewsDetails(languageCode, countryCode), this.newsPromiseState);
    },


    searchParams: {},
    searchResultsPromiseState: {},

    setSearch(queryText){ // används i searchPresenter för att koppla till 
        this.searchParams = queryText
    },

    startSearch(searchParams){

        {/* Code with api fetch */}
       resolvePromise(searchPlaces(searchParams), this.searchResultsPromiseState);
    },



    constellationPromiseState: {},

    fetchConstellation(constellation){
        resolvePromise(getConstellationDetails(constellation), this.constellationPromiseState);
    },
}