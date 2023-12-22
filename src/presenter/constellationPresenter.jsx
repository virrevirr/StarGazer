import ConstellationView from "../views/constellationView.jsx";
import { connect } from "./loginPresenter";
export default function Constellation(props) {
  function haveSeenACB(constellation) {
    // Add to seen
    props.model.addToSeen(props.model.currentLocation, constellation);
  }

  function promiseData(promiseState) {
    // Function to handle promiseState
    if (!promiseState.promise) {
      return <p>no data</p>;
    }
    if (!promiseState.data) {
      if (!promiseState.error) {
        return (
          <img src="https://brfenergi.se/iprog/loading.gif" height={"50"} />
        );
      }
      return <p>{promiseState.error.toString()}</p>;
    }
    return (
      <ConstellationView
        currentConstellation={promiseState.data}
        haveSeen={haveSeenACB}
        loginCB={connect}
        location={props.model.currentLocation}
      />
    );
  }

  return promiseData(props.model.constellationPromiseState);
}
