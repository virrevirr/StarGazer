// Add relevant imports here

import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set} from "firebase/database";
import firebaseConfig from "../firebaseConfig.js"; // config from previous step in 3.5
import { getAuth, onAuthStateChanged,setPersistence, browserSessionPersistence } from "firebase/auth";
import {  } from "firebase/auth";

// Set persistence to SESSION

// Initialise firebase app, database, ref
const app= initializeApp(firebaseConfig)

const auth = getAuth(app);

const db= getDatabase(app)
//  PATH is the “root” Firebase path
// this should be the user



function modelToPersistence(model){
    //borde vi ha någon .sort funktion på platserna som vi har i labbarna?
    return {placesToGo: model.wantToGo, placesHaveGone: model.haveVisited, 
        currentPlace: model.currentLocation, 
        currentStarImage: model.currentConstellation,
        currentWeatherInformation: model.currentWeather,
        currentMoonInformation: model.currentMoon,
        currentNewsInformation: model.currentNews}
}

function persistenceToModel(data, model){
    
    function placeToGoToModelACB(places){
        model.wantToGo=places;
    }
    function placeVisitedToModelACB(places){
        model.haveVisited=places;
    }

    model.setCurrentLocation(data?.currentPlace);
    model.setCurrentConstellation(data?.currentStarImage);
    model.setCurrentMoon(data?.currentMoonInformation);
    model.setCurrentWeather(data?.currentWeatherInformation);
    model.setCurrentNews(data?.currentNewsInformation);

    /*const weatherInfo = data?.currentWeatherInformation
    const newsInfo = data?.currentNewsInformation
    if (weatherInfo){model.setCurrentWeather(data?.currentWeatherInformation);}
    if(newsInfo){model.setCurrentNews(data?.currentNewsInformation);}*/

    const placeToGoArray = data?.placesToGo;
    const placeVisitedArray = data?.placesHaveGone;
    
    console.log("data?.currentNewsInformation from firebaseModel", data?.currentNewsInformation)


    if (placeToGoArray && placeVisitedArray){
        placeToGoToModelACB(placeToGoArray);
        placeVisitedToModelACB(placeVisitedArray);
    }

    else if (placeToGoArray){
        return placeToGoToModelACB(placeToGoArray);
    }

    else if (placeVisitedArray){
        return placeVisitedToModelACB(placeVisitedArray);
    }
}

function saveToFirebase(model){
        // saveToFirebase: 
    // -----------------
    // do nothing if model.user falsy
    // otherwise write to the same path as above, 
    // depending on model.ready as usual

    console.log("saved to firebase")
    if(model.user){
    return model.ready ? set(ref(db, model.PATH), modelToPersistence(model)): false;}

}

function readFromFirebase(model){
    // readFromFirebase: 
    // -----------------
    // do nothing if model.user falsy (maybe wipe the model data)
    // otherwise read from "path/"+model.user.uid
    // manage model.ready as usual
    console.log("before trying to read to firebase");
    model.ready=false;
    if(model.user){
    console.log("trying to read to firebase", model.user.uid, model.PATH);
    const rf=ref(db, model.PATH);
    function modelReadyACB(){model.ready=true; console.log("model ready in modelReadyACB", model.ready);}
    function dataACB(data){return persistenceToModel(data.val(), model);} //dataACB does not return a promise --> should it?
    return get(rf).then(dataACB).then(modelReadyACB);}
    
}


function connectToFirebase(model, watchFunction){

    function loginlogOut(user) {   
       console.log("on change")
        model.user = user;
        if (user) {
            setPersistence(auth, browserSessionPersistence);
           
            model.setPATH();
            readFromFirebase(model);
            
            
                // Add any other user-related data you need
            }
    
        
    }
    console.log("connect to firebase befor onAuth")
    onAuthStateChanged(auth,loginlogOut);
    console.log("connect to firebase befor onAuth")
    function checkACB(){return [model.wantToGo, model.haveVisited, model.currentLocation];}
    function sideEffectACB(){saveToFirebase(model);}
    return watchFunction(checkACB, sideEffectACB);
}




export {modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase, connectToFirebase, auth}
export default connectToFirebase;