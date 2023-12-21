// Add relevant imports here

import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set} from "firebase/database";
import firebaseConfig from "../firebaseConfig.js"; // config from previous step in 3.5
import { searchPlaces } from "./starSource.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Initialise firebase app, database, ref
const app= initializeApp(firebaseConfig)
const db= getDatabase(app)
const auth = getAuth(app);


//  PATH is the “root” Firebase path
// this should be the user



function modelToPersistence(model){
    //borde vi ha någon .sort funktion på platserna som vi har i labbarna?
    return {placesToGo: model.wantToGo, placesHaveGone: model.haveVisited, place: model.currentLocation}
}

function persistenceToModel(data, model){
    function placeToGoToModelACB(place){
        model.wantToGo=place;
    }
    function placeVisitedToModelACB(place){
        model.haveVisited=place;
    }

    model.setCurrentLocation(data?.place);
    const placeToGoArray = data?.placesToGo; //Detta gör att alla lägs till i listorna 
    const placeVisitedArray = data?.placesHaveGone;

    return placeToGoArray && placeVisitedArray? 
        (searchPlaces(placeToGoArray).then(placeToGoToModelACB) && searchPlaces(placeVisitedArray).then(placeVisitedToModelACB))
    : placeToGoArray? 
        searchPlaces(placeToGoArray).then(placeToGoToModelACB) 
    : placeVisitedArray? 
        searchPlaces(placeVisitedArray).then(placeVisitedToModelACB) 
    : false;
}

function saveToFirebase(model){
        // saveToFirebase: 
    // -----------------
    // do nothing if model.user falsy
    // otherwise write to the same path as above, 
    // depending on model.ready as usual

    if (model.user) {
        console.log("saved to firebase")
        return model.ready? set(ref(db, model.PATH), modelToPersistence(model)): false;
    }
}

function readFromFirebase(model){
    // readFromFirebase: 
    // -----------------
    // do nothing if model.user falsy (maybe wipe the model data)
    // otherwise read from "path/"+model.user.uid
    // manage model.ready as usual

    if (model.user){
        console.log("read from firebase")
        model.ready=false;
        const rf=ref(db, model.PATH);
        function modelReadyACB(){model.ready=true; console.log("model ready in modelReadyACB", model.ready);}
        function dataACB(data){return persistenceToModel(data.val(), model);} //dataACB does not return a promise --> should it?
        return get(rf).then(dataACB).then(modelReadyACB);
    }
}


function connectToFirebase(model, watchFunction){
    async function loginlogOut(user) {   
        if (user) {
            model.setUser(user);
            model.setPATH();
            
                // Add any other user-related data you need
            }
        else {
            model.setUser(null);
        }
        await readFromFirebase(model);
     
    }

    onAuthStateChanged(auth, loginlogOut);
    function checkACB(){return [model.wantToGo, model.haveVisited, model.currentLocation];}
    function sideEffectACB(){saveToFirebase(model);}
    return watchFunction(checkACB, sideEffectACB);
}




export {modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase, connectToFirebase, auth}
export default connectToFirebase;