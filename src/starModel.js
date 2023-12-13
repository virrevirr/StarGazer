import { getConstellationDetails, getMoonDetails, getNewsDetails, getWeatherDetails, searchPlaces } from "./starSource";
import resolvePromise from "./resolvePromise"

export default{
    wantToGo: [], //Kommer behövas för att displaya locations i personal profile
    haveVisited: [],
    currentLocation: null, //Som currentDish, för att lägga till locations
    //ready: false, // set till true när promise from firebase is resolved (model.ready)
    currentLocationPromiseState: {},

    addToWantToGo(locToAdd){
        this.wantToGo = [...this.wantToGo, locToAdd];
    },

    removeFromWantToGo(locToRemove){
        function shouldWeKeepConstCB(location){
            return location !== locToRemove;
        }
        this.wantToGo = this.wantToGo.filter(shouldWeKeepConstCB);
    },

    //We save searchQuery in locToAdd, so just a str that has been inputted. 
    addToVisited(locToAdd){
        this.haveVisited = [...this.haveVisited, locToAdd];
    },

    removeFromVisited(locToRemove){
        function shouldWeKeepLocCB(location){
            return location !== locToRemove;  
        }
        this.haveVisited = this.haveVisited.filter(shouldWeKeepLocCB);
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
            state: "Sample State",
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



    currentConstellation: null,

    setCurrentConstellation(constellation){
        if (constellation === this.currentConstellation || !constellation){
            return;
        }
        this.currentConstellation = constellation
    },

    searchConstellationParams: {},
    searchConstellationPromiseState: {},

    setSearchConstellation(queryText){ // används i searchPresenter för att koppla till 
        this.searchConstellationParams = queryText
    },

    startSearchConstellation(searchConstellationParams){
        resolvePromise(getConstellationDetails(searchConstellationParams), this.searchConstellationPromiseState);
    }
}