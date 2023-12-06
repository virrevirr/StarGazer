import { searchPlaces } from "./starSource";
import { resolvePromise } from "./resolvePromise"

export default{
    wantToGo: [], //Kommer behövas för att displaya locations i personal profile
    haveVisited: [],
    currentLocation: null, //Som currentDish, för att lägga till locations
    ready: false, // set till true när promise from firebase is resolved (model.ready)
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

    setCurrentLocation(id){
        if (id === this.currentLocation || !id){
            return;
        }
        this.currentLocation = id;
        //resolvePromise(getDishDetails(id), this.currentDishPromiseState);
    },

    searchParams: {},
    searchResultsPromiseState: {},

    setSearch(queryText){
        this.searchParams.text = queryText;
    },

    startSearch(searchParams){
        resolvePromise(searchPlaces(searchParams), this.searchResultsPromiseState)
    }
}