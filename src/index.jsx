
//import "/src/teacherFetch.js"; // protection against fetch() in infinite re-render

//import {makeRouter,Root} from "./root.jsx"; 
//import "/src/firebaseModel.js";
//import connectToFirebase from "../firebaseModel.js";
//import model from "/src/starModel.js";


import { reactive, watch, createApp, h } from "vue";

/*const reactiveModel= reactive(model);

window.React= {createElement:h};
const app= createApp(<Root model={reactiveModel}/>);

app.use(makeRouter(reactiveModel));
app.mount('#root'); 


reactiveModel.doSearch({});
connectToFirebase(reactiveModel, watch);

window.myModel= reactiveModel;  */


/*import Login from "./presenter/loginPresenter.jsx";


function App(){ return <div><Login/></div>; };
const app= createApp(App);
app.mount("#root");*/


import Information from "./presenter/informationPresenter.jsx";

function App(){ return <div><Information/></div>; };
const app= createApp(App);
app.mount("#root");


