// search results

function SearchResultsView(props) {
    return (
      // Rendering the search results.
      <div className="searchResultsContainer">
        {props.searchResult.map(renderResultCB)}
      </div>
    );
  
    function renderResultCB(result) {
      // We render the search results with its title. We are able to click on it,
      // for it to lead to the city's information page.
      function onLocationClickACB(event) {
        props.onLocationClick(result);
      }
  
      return (
        <span key={result} onClick={onLocationClickACB}>
          {/*render each city with its title*/}
          <a href="#/information">
            <p>{result.city + ", " + result.state + ", " + result.country}</p>
          </a>
        </span>
      );
    }
  }
  
  export default SearchResultsView;