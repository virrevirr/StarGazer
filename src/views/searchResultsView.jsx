// search results

function SearchResultsView(props){
    function onLocationClickACB(location){
        //console.log("clicked on location", location);
        console.log(window.location.hash="#/information");

        return props.onLocationClickACB(location);
    };
    
    console.log("props!",props)
    return(
       <div>
            {props.searchResult.map(showResultCB)}
            <span onClick={onLocationClickACB}>Stockholm</span> {/*temporär för layout*/}
       </div> 
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
