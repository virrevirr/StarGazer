// search results

function SearchResultsView(props){
    function onLocationClickACB(location){
        //console.log("clicked on location", location);
        //return props.onLocationClickACB(location);
        console.log(window.location.hash="#/information");
    }

    return(
       /*<div>{props.searchResults.map(showResultCB)}</div>*/
       <span onClick={onLocationClickACB}>Stockholm</span>
    );

    function showResultCB(result){
        return <span key={result.query} onClick={() => {onLocationClickACB(result)}} >
            {/*render each city with an image and its title*/}
            {/* result.query ska vara samma som result.id, query = namnet som staden enligt API?*/}
            <div>{result.query}</div>
        </span>
    };
}

export default SearchResultsView;
