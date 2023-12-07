
//import "/src/teacherFetch.js"; // protection against fetch() in infinite re-render

import {makeRouter} from "./root.jsx"; 
//import "/src/firebaseModel.js";
//import connectToFirebase from "../firebaseModel.js";
import model from "/src/starModel.js";


import { reactive, watch, createApp, h } from "vue";

const reactiveModel= reactive(model);
window.React= {createElement:h};

import VueRoot from "./root.jsx";
const app= createApp(<VueRoot model={reactiveModel}/>);

app.use(makeRouter(reactiveModel));
app.mount('#root'); 


//reactiveModel.doSearch({});
//connectToFirebase(reactiveModel, watch);
window.myModel= reactiveModel; 


/*import Login from "./presenter/loginPresenter.jsx";


function App(){ return <div><Login/></div>; };
const app= createApp(App);
app.mount("#root");*/


/*import Profile from "./presenter/profilePresenter.jsx";

function App(){ return <div><Profile/></div>; };
const app= createApp(App);
app.mount("#root");*/


