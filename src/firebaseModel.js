// Add relevant imports here
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set} from "/src/teacherFirebase.js";
import firebaseConfig from "/src/firebaseConfig.js"; // config from previous step in 3.5
import { getMenuDetails } from "./dishSource";

// Initialise firebase app, database, ref
const app= initializeApp(firebaseConfig)
const db= getDatabase(app)

//  PATH is the “root” Firebase path
const PATH="dinnerModel60";


function modelToPersistence(model){
    function dishToIdCB(dish){
        return dish.id;
    }

    return {guests: model.numberOfGuests, dishIds: model.dishes.map(dishToIdCB).sort(),
            dish: model.currentDish};
}

function persistenceToModel(data, model){
    function dishToModelACB(dish){model.dishes=dish;}

    model.numberOfGuests = data?.guests || 2;
    model.setCurrentDish(data?.dish);
    const idArray = data?.dishIds || [];

    return getMenuDetails(idArray).then(dishToModelACB);
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
    function checkACB(){return [model.numberOfGuests, model.currentDish, model.dishes];}
    function sideEffectACB(){saveToFirebase(model);}
    return watchFunction(checkACB, sideEffectACB);
}


export {modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase}
export default connectToFirebase;