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
let PATH= null; // this should be the user

function setPathToUid(model) {
    // Check if a user is signed in
    model.setLoggedIn? PATH = 'users/' +  model.userId: PATH = null;
    console.log("PATH: ", PATH);
    }


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

function loginlogOut(user,model) {
    console.log('user:', user);
    console.log('model:', model);
    if (user) {
        model.setLoggedIn(true);
        model.setUserId(auth.currentUser.uid);
    } else {
        model.setLoggedIn(false);
        model.setUserId(null);
    }

    setPathToUid(model); // Update the path after setting user information
}
function connectToFirebase(model, watchFunction){
    console.log("model from connect: ", model);
    loginlogOut(auth.currentUser,model)
    readFromFirebase(model); 
    onAuthStateChanged(auth, loginlogOut);
    function checkACB(){return [model.wantToGo, model.haveVisited, model.currentLocation];}
    function sideEffectACB(){saveToFirebase(model);}
    return watchFunction(checkACB, sideEffectACB);
}




export {modelToPersistence, persistenceToModel, saveToFirebase,loginlogOut, readFromFirebase,connectToFirebase, auth}
export default connectToFirebase;