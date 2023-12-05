// search results

function SearchResultsView(props){
    function onLocationClickACB(location){
        return props.onLocationClickACB(location);
    }

    return(
        <div>{props.searchResults.map(showResultCB)}</div>
    );

    function showResultCB(result){
        return <span key={result.query} onClick={() => {onDishClickACB(result)}} >
            {/*render each city with an image and its title*/}
            <div>{result.query}</div>
        </span>
    };
}

export default SearchResultsView;
