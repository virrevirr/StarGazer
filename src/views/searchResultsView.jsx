// search results

function SearchResultsView(props){
    function onLocationClickACB(location){
        return props.onLocationClickACB(location);
    }

    return(
        <div>{props.searchResults.map(showResultCB)}</div>
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
