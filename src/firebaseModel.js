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
    const placeToGoArray = data?.placesToGo || "sto";
    const PlaceVisitedArray = data?.placesHaveGone || "sto";

    return searchPlaces(placeToGoArray).then(placeToGoToModelACB) && searchPlaces(PlaceVisitedArray).then(placeVisitedToModelACB);
}

function saveToFirebase(model){
        // saveToFirebase: 
    // -----------------
    // do nothing if model.user falsy
    // otherwise write to the same path as above, 
    // depending on model.ready as usual

    if (model.user) {
        console.log("model from save: ", model.ready);
        return model.ready? set(ref(db, PATH), modelToPersistence(model)): false;
    }
}

function readFromFirebase(model){
    // readFromFirebase: 
    // -----------------
    // do nothing if model.user falsy (maybe wipe the model data)
    // otherwise read from "path/"+model.user.uid
    // manage model.ready as usual

    if (model.user){
        const PATH = 'users/' +  model.user.uid;
        model.ready=false;
        const rf=ref(db, PATH);
        function modelReadyACB(){model.ready=true; console.log("model ready in modelReadyACB", model.ready);}
        function dataACB(data){return persistenceToModel(data.val(), model);} //dataACB does not return a promise --> should it?
        return get(rf).then(dataACB).then(modelReadyACB);
    }
}


function connectToFirebase(model, watchFunction){
    function loginlogOut(user) {   
        if (user) {
            model.setLoggedIn(true);
            model.setUser(auth.currentUser);
            
        } else {
            model.setLoggedIn(false);
            model.setUser(null);
        }
        readFromFirebase(model);
    }
    onAuthStateChanged(auth, loginlogOut);
   
    function checkACB(){return [model.wantToGo, model.haveVisited, model.currentLocation];}
    function sideEffectACB(){saveToFirebase(model);}
    return watchFunction(checkACB, sideEffectACB);
}




export {modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase, connectToFirebase, auth}
export default connectToFirebase;