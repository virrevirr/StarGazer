import { makeRouter } from "./root.jsx";

// Application state (model)
import "/src/firebaseModel.js";
import connectToFirebase from "./firebaseModel.js";
import model from "/src/starModel.js";

// Make the app update when the model changes, and mounting
// the root component in the browser page.
import { reactive, watch, createApp, h } from "vue";

const reactiveModel = reactive(model);
window.React = { createElement: h };

import VueRoot from "./root.jsx";
const app = createApp(<VueRoot model={reactiveModel} />);

app.use(makeRouter(reactiveModel));
app.mount("#root");

// Connecting the model to Firebase
connectToFirebase(reactiveModel, watch);
window.myModel = reactiveModel;

// Shows some initial cities
reactiveModel.startSearch("stockholm");
