import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";
import firebaseConfig from "../firebaseConfig.js";
import {
  getAuth,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";

// Initialise firebase app, database, auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

function modelToPersistence(model) {
  // Writing the necessary properties to firebase
  return {
    placesToGo: model.wantToGo,
    placesHaveGone: model.haveVisited,
    currentPlace: model.currentLocation,
    currentStarImage: model.currentConstellation,
  };
}

function persistenceToModel(data, model) {
  // Reading properties from firebase and fetching every API with them
  model.setCurrentLocation(data?.currentPlace);
  model.setCurrentConstellation(data?.currentStarImage);
  model.setCurrentMoon();

  if (data?.placesToGo) {
    model.wantToGo = data?.placesToGo;
  }

  if (data?.placesHaveGone) {
    model.haveVisited = data?.placesHaveGone;
  }

  if (data?.currentPlace) {
    // We can fetch the weather and news using currentLocation
    model.setCurrentWeatherCity(data?.currentPlace.city);
    model.setCurrentNewsCountry(data?.currentPlace.country);
  }
}

function saveToFirebase(model) {
  // do nothing if model.user falsy
  // otherwise write to the same path as above,
  // depending on model.ready as usual
  console.log("saved to firebase");
  if (model.user) {
    return model.ready
      ? set(ref(db, model.PATH), modelToPersistence(model))
      : false;
  }
}

function readFromFirebase(model) {
  // do nothing if model.user falsy
  // otherwise read from "path/"+model.user.uid
  // manage model.ready as usual
  model.ready = false;
  if (model.user) {
    console.log("trying to read to firebase", model.user.uid, model.PATH);
    const rf = ref(db, model.PATH);
    function modelReadyACB() {
      model.ready = true;
      console.log("model ready in modelReadyACB", model.ready);
    }
    function dataACB(data) {
      return persistenceToModel(data.val(), model);
    }
    return get(rf).then(dataACB).then(modelReadyACB).catch(modelReadyACB);
  }
}

function connectToFirebase(model, watchFunction) {
  // do nothing if model.user falsy if not,
  // if truthy the path is set to user iud and it reads from firebase.
  function loginlogOut(user) {
    console.log("on change");
    model.user = user;
    if (user) {
      setPersistence(auth, browserSessionPersistence);
      model.setPATH();
      readFromFirebase(model);
    }
  }
  //onAuthStateChanged  keeps track of the user's authentication state and provides information about the user until they log out
  onAuthStateChanged(auth, loginlogOut);
  function checkACB() {
    return [model.wantToGo, model.haveVisited, model.currentLocation];
  }
  function sideEffectACB() {
    saveToFirebase(model);
  }
  return watchFunction(checkACB, sideEffectACB);
}

export {
  modelToPersistence,
  persistenceToModel,
  saveToFirebase,
  readFromFirebase,
  connectToFirebase,
  auth,
};
export default connectToFirebase;