//Neccesary imports
import Login from "./presenter/loginPresenter.jsx";
import Profile from "./presenter/profilePresenter.jsx";
import Search from "./presenter/searchPresenter.jsx";
import Information from "./presenter/informationPresenter.jsx";
import Constellation from "./presenter/constellationPresenter.jsx";
import AllConstellations from "./presenter/allConstellationsPresenter.jsx";
import { createRouter, createWebHashHistory, RouterView } from "vue-router";

export default function VueRoot(props) {
  function modelReady() {
    //Will check if model is ready, and only render RouterView if it is, otherwise suspense.
    return props.model.ready ? (
      false
    ) : (
      <img src="https://brfenergi.se/iprog/loading.gif" />
    );
  }
  return (
    modelReady() || (
      <div className="flexParent">
        <div className="mainContent">
          <RouterView />
        </div>
      </div>
    )
  );
}

export function makeRouter(model) {
  //Creates the routes in RouterView and sets the model for each presenter to starModel.
  return createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: "/",
        component: <Login model={model} />,
      },
      {
        path: "/profile",
        component: <Profile model={model} />,
      },
      {
        path: "/search",
        component: <Search model={model} />,
      },
      {
        path: "/information",
        component: <Information model={model} />,
      },
      {
        path: "/constellation",
        component: <Constellation model={model} />,
      },
      {
        path: "/allConstellations",
        component: <AllConstellations model={model} />,
      },
    ],
  });
}