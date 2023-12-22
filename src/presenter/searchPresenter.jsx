// ACBer som krävs för sökningen på plats namn, samt promiseState funktion för ladd gif etc. Ska vi displaya alla
// relevanta stjärnbilder också (psv i labben med dishes för att göra det enklare?)

import SearchFormView from "../views/searchFormView";
import SearchResultsView from "../views/searchResultsView";
import { connect } from "./loginPresenter";

export default function Search(props) {
  function setSearchInputACB(newInput) {
    // Asyncronous callback to handle the user input
    props.model.setSearch(newInput);
  }

  function searchNowACB() {
    // Asyncronous callback to handle the search
    props.model.startSearch(props.model.searchParams);
  }

  function onLocationClickACB(input) {
    // Asyncronous callback to set the location and the news, weather and moon phase in that country
    props.model.setCurrentLocation(input);

    props.model.setCurrentWeatherCity(input.city);

    props.model.setCurrentMoon();

    props.model.setCurrentNewsCountry(input.country);
  }

  function promiseData(promiseState) {
    // If promiseState.promise is false, no data should be returned.
    if (!promiseState.promise) {
      return <p>no data</p>;
    }
    // If promise is true, check data and error.
    if (!promiseState.data) {
      if (!promiseState.error) {
        return (
          <img src="https://brfenergi.se/iprog/loading.gif" height={"50"} />
        );
      }
      return <p>{promiseState.error.toString()}</p>; //if promiseState.error is true and promise.data is false return error
    }
    // Presenting search result if a search has been made
    return (
      <SearchResultsView
        searchResult={props.model.searchResultsPromiseState.data}
        onLocationClick={onLocationClickACB}
      />
    );
  }

  return (
    <div>
      {/* First we render the search view */}
      <SearchFormView
        // The user input
        text={props.model.searchParams}
        // Events defined in SearchFormView
        userInput={setSearchInputACB} // setSearch from starModel
        clickSearch={searchNowACB} // startSearch from starModel (makes a promise)
        loginCB={connect}
      />
      {promiseData(props.model.searchResultsPromiseState)}
    </div>
  );
}