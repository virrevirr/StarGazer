// Add relevant imports here
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set} from "/src/teacherFirebase.js";
import firebaseConfig from "/src/firebaseConfig.js"; // config from previous step in 3.5
import { searchPlaces } from "./starSource.js";
import { searchPlaces } from "./starSource";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Initialise firebase app, database, ref
const app= initializeApp(firebaseConfig)
const db= getDatabase(app)
const authentication = getAuth(app);

//  PATH is the “root” Firebase path
const PATH="dinnerModel60"; // what is this???


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
    const placeToGoArray = data?.placesToGo || [];
    const PlaceVisitedArray = data?.placesHaveGone || [];

    return searchPlaces(placeToGoArray).then(placeToGoToModelACB) && searchPlaces(PlaceVisitedArray).then(placeVisitedToModelACB);
}

function saveToFirebase(model){
    return model.ready? set(ref(db, PATH), modelToPersistence(model)): false;
}

function readFromFirebase(model){
    model.ready=false;
    const rf=ref(db, PATH);
    function modelReadyACB(){model.ready=true;}
    function dataACB(data){return persistenceToModel(data.val(), model);} //dataACB does not return a promise --> should it?
    
    return get(rf).then(dataACB).then(modelReadyACB);
}

function connectToFirebase(model, watchFunction){
    readFromFirebase(model);
    function checkACB(){return [model.wantToGo, model.haveVisited, model.currentLocation];}
    function sideEffectACB(){saveToFirebase(model);}
    return watchFunction(checkACB, sideEffectACB);
}
function loginlogOut(model,authentication){
         user ? (model.setLoggedIn(true), model.setUserId(user.uid)):
        (model.setLoggedIn(false), model.setUserId(null));
}

export {modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase, authentication}
export default connectToFirebase;