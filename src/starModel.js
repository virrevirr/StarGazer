import { getConstellationDetails, getMoonDetails, getNewsDetails, getWeatherDetails, searchPlaces } from "./starSource";
import resolvePromise from "./resolvePromise"
export default{ 
    wantToGo: [], //Kommer behövas för att displaya locations i personal profile
    haveVisited: [],
    currentLocation: null, //Som currentDish, för att lägga till locations
        ready: true, // set till true när promise from firebase is resolved (model.ready)
    currentLocationPromiseState: {},
    PATH: null, //used to see if user is logged in or not
    user: null, // initiallized to null, set to auth.currentUser.uid when user is logged in


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
console.log("foundObject", foundObject)
        function filterCB(item){
            // Remove "No constellations" if we have a constellation
            item !== "No constellations";
        }

        // Adding the constellation to the city object and removing duplicates
        foundObject && (foundObject["constellations"] = foundObject["constellations"].includes("No constellations")
        ? [...new Set([...foundObject["constellations"].filter(filterCB), constellationToAdd])]
        : [...new Set([...foundObject["constellations"], constellationToAdd])]);

        // Spreading the array for firebase to regognize and save the changes
        this.haveVisited = [...this.haveVisited]
    },

    removeFromVisited(locToRemove){
        function shouldWeKeepLocCB(location){
            return location !== locToRemove;  
        }
        this.haveVisited = [...this.haveVisited].filter(shouldWeKeepLocCB);    
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

    setCurrentConstellation(constellation){
        if (constellation === this.currentConstellation || !constellation){
            return;
        }
        this.currentConstellation = constellation
    }, 

    weatherPromiseState: {},

    searchWeatherByCity(city){
        resolvePromise(getWeatherDetails(city), this.weatherPromiseState);
    },
    
    moonPromiseState: {},

    getMoon(){
        resolvePromise(getMoonDetails(), this.moonPromiseState);
    },

    newsPromiseState: {},

    searchNewsByCountry(languageCode, countryCode, astronomyTranslated){
        resolvePromise(getNewsDetails(languageCode, countryCode, astronomyTranslated), this.newsPromiseState);
        console.log("newsPromiseState from starModel", newsPromiseState)
        console.log("promise from starModel", getNewsDetails(languageCode, countryCode, astronomyTranslated))
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


    setPATH(){
       
        this.PATH = 'users/' +  this.user.uid;} ,//used to see if user is logged in or not


    setUser(user){ 
            this.user = user
            console.log("User ID in StarModel: ", this.user.uid);
            console.log("Display Name in StarModel: ", this.user.displayName);
            // Access other properties as needed
    },

}