import {
    getConstellationDetails,
    getMoonDetails,
    getNewsDetails,
    getWeatherDetails,
    searchPlaces,
  } from "./starSource";
  import countries from "./countries.jsx";
  import resolvePromise from "./resolvePromise";
  
  export default {
    wantToGo: [], // Array with all location objects that the user want to visit
    haveVisited: [], // Array with all location objects that the user has visited
    currentLocation: null, // Keeping track of the most currently clicked location
    ready: true, // Set till true när promise from firebase is resolved (model.ready)
    currentLocationPromiseState: {},
    PATH: null, // Used to see if user is logged in or not
    user: null, // Initiallized to null, set to auth.currentUser.uid when user is logged in
    currentConstellation: null, // Keeping track of the most currently clicked constellation
    constellationPromiseState: {},
    weatherPromiseState: {},
    moonPromiseState: {},
    newsPromiseState: {},
    searchParams: null, // Keeping track of most recent search input from user
    searchResultsPromiseState: {},
  
    doesObjectMatch(obj, targetLocation) {
      // Function to check if targetLocation and object is a match
      // Checking if the city is already in the list
      return (
        obj["city"] === targetLocation.city &&
        obj["state"] === targetLocation.state &&
        obj["country"] === targetLocation.country
      );
    },
  
    addToWantToGo(locToAdd) {
      // Adding city to wantToGo
      const foundObject = this.wantToGo.find((obj) =>
        this.doesObjectMatch(obj, locToAdd),
      );
      // Adding the city to the list if it is not already there
      foundObject || (this.wantToGo = [...this.wantToGo, locToAdd]);
    },
  
    addToVisited(locToAdd) {
      // Adding city to haveVisited
      const foundObject = this.haveVisited.find((obj) =>
        this.doesObjectMatch(obj, locToAdd),
      );
      // Adding the city to the list if it is not already there and adding a property; constellations
      foundObject ||
        (this.haveVisited = [
          ...this.haveVisited,
          { ...locToAdd, constellations: ["No constellations"] },
        ]);
    },
  
    addToSeen(location, constellationToAdd) {
      // Adding constellation to a specific location object in haveVisited
      const foundObject = this.haveVisited.find((obj) =>
        this.doesObjectMatch(obj, location),
      );
      function filterCB(item) {
        // Remove "No constellations" if we have a constellation
        item !== "No constellations";
      }
  
      // Adding the constellation to the city object and removing duplicates
      foundObject &&
        (foundObject["constellations"] = foundObject["constellations"].includes(
          "No constellations",
        )
          ? [
              ...new Set([
                ...foundObject["constellations"].filter(filterCB),
                constellationToAdd,
              ]),
            ]
          : [...new Set([...foundObject["constellations"], constellationToAdd])]);
  
      // Spreading the array for firebase to recognize and save the changes
      this.haveVisited = [...this.haveVisited];
    },
  
    removeFromVisited(locToRemove) {
      // Removing a city from haveVisited
      function shouldWeKeepLocCB(location) {
        return location !== locToRemove;
      }
      this.haveVisited = [...this.haveVisited].filter(shouldWeKeepLocCB);
    },
  
    removeFromWantToGo(locToRemove) {
      // Removing a city from wantToGo
      function shouldWeKeepConstCB(location) {
        return location !== locToRemove;
      }
      this.wantToGo = this.wantToGo.filter(shouldWeKeepConstCB);
    },
  
    setCurrentLocation(location) {
      // Setting the most currently clicked location
      if (location === this.currentLocation || !location) {
        return;
      }
      this.currentLocation = location;
    },
  
    setCurrentConstellation(constellation) {
      // Setting the most currently clicked constellation and fetching the astronomy API with the constellation
      if (constellation === this.currentConstellation || !constellation) {
        return;
      }
      resolvePromise(
        getConstellationDetails(constellation),
        this.constellationPromiseState,
      );
      this.currentConstellation = constellation;
    },
  
    setCurrentWeatherCity(city) {
      // Fetching the weather API based on the current city
      resolvePromise(getWeatherDetails(city), this.weatherPromiseState);
    },
  
    setCurrentMoon() {
      // Fetching the moon phase API
      resolvePromise(getMoonDetails(), this.moonPromiseState);
    },
  
    setCurrentNewsCountry(country) {
      // Fetching the news API based on the current country
      // Getting the codes and translated astronomy from the countries dictionary
      const countryToCode = countries[country].alpha2;
      const languageToCode = countries[country].iso6391;
      const astronomyTranslated = countries[country].astronomy;
      resolvePromise(
        getNewsDetails(astronomyTranslated, languageToCode, countryToCode),
        this.newsPromiseState,
      );
    },
  
    setSearch(queryText) {
      // Setting the search parameters to the users input
      this.searchParams = queryText;
    },
  
    startSearch(searchParams) {
      // Doing the search for cities by fetching the city API with the user input
      resolvePromise(searchPlaces(searchParams), this.searchResultsPromiseState);
    },
  
    setPATH() {
      // Setting the path based on the authenticated user
      // Used to see if user is logged in or not
      this.PATH = "users/" + this.user.uid;
    },
  
    setUser(user) {
      // Setting the user in the model
      this.user = user;
      console.log("User ID in StarModel: ", this.user.uid);
      console.log("Display Name in StarModel: ", this.user.displayName);
    },
  };