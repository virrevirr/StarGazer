import Login from "./presenter/loginPresenter.jsx";
import Profile from "./presenter/profilePresenter.jsx";
import Search from "./presenter/searchPresenter.jsx";
import Information from "./presenter/informationPresenter.jsx";
import Constellation from "./presenter/constellationPresenter.jsx";
import AllConstellations from "./presenter/allConstellationsPresenter.jsx";
import { createRouter, createWebHashHistory, RouterView} from "vue-router";


export default function VueRoot(props){
    /*function modelReady(){
        return props.model.ready? false : <img src="https://brfenergi.se/iprog/loading.gif"/>;
    }
    return (modelReady() || (<div className="flexParent">
                            <div className="login"><Login model={props.model}/></div>
                            <div className="mainContent"><RouterView/></div>
                            </div>)
            );*/

    return (<div className="flexParent">
            <div className="mainContent"><RouterView/></div>
            </div>);
}

export function makeRouter(model){
    return createRouter({
        history: createWebHashHistory(),
        routes: [
        {
            path: "/",
            component:  <Login model={model}/>, 
        },
        {
            path: "/profile",
            component:  <Profile model={model}/>, 
        },
        {
            path: "/search", 
            component:  <Search model={model}/>, 
        },
        {
            path: "/information", 
            component:  <Information model={model}/>, 
        },
        {
            path: "/constellation", 
            component:  <Constellation model={model}/>, 
        },
        {
            path: "/searchConstellation", 
            component:  <AllConstellations model={model}/>, 
        }
    ]});
}
