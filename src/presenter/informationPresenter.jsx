//Neccesary imports
import InformationView from "../views/informationView.jsx";
import WeatherView from "../views/weatherView.jsx";
import MoonView from "../views/moonView.jsx";
import NewsView from "../views/newsView.jsx";
import { connect } from "./loginPresenter";

export default function Information(props) {
  function addToWantToGoACB() {
    /*Adds chosen location to wantToGo arry in starModel*/
    props.model.addToWantToGo(props.model.currentLocation);
  }
  function addVisitedACB() {
    /*Adds chosen location to haveVisited arry in starModel*/
    props.model.addToVisited(props.model.currentLocation);
  }

  function inVisitedCB(location) {
    /*Checks if the current location is already saved in an array by comparison*/
    return location.city === props.model.currentLocation.city;
  }

  function promiseData(promiseState) {
    /*Will check the promisteState of several promises and only render the views if data is available*/
    if (!promiseState.promise) {
      //if promiseState.promise is false, no data should be returned.
      return <p>no data</p>;
    }
    // if promise is true, check data and error.
    if (!promiseState.data) {
      if (!promiseState.error) {
        return (
          <img src="https://brfenergi.se/iprog/loading.gif" height={"50"} />
        );
      }
      return <p>{promiseState.error.toString()}</p>; //if promiseState.error is true and promise.data is false return error
    }
    if (promiseState.data.moon) {
      return <MoonView moonData={promiseState.data} />;
    }

    if (promiseState.data.forecast) {
      return <WeatherView weatherData={promiseState.data} />;
    }

    return <NewsView newsData={promiseState.data} />;
  }

  return (
    <div>
      <InformationView
        locationData={props.model.currentLocation}
        addToGo={addToWantToGoACB}
        addToVisited={addVisitedACB}
        locvisited={props.model.haveVisited.some(inVisitedCB)}
        locgo={props.model.wantToGo.some(inVisitedCB)}
        loginCB={connect}
      />
      <div className="ParentContainer">
        {/*The below will be rendered alongside eachother*/}
        {promiseData(props.model.weatherPromiseState)}
        {promiseData(props.model.moonPromiseState)}
        {promiseData(props.model.newsPromiseState)}
      </div>
    </div>
  );
}
