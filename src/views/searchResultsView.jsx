// search results

function SearchResultsView(props){
    return(
       <div>
            {props.searchResult.map(renderResultCB)}
       </div> 
    );

    function renderResultCB(result){
        function onLocationClickACB(event){
            console.log(window.location.hash= "#/information");
            props.onLocationClick(result);
        };

        return (
            <span key={result} onClick={onLocationClickACB}>
                {/*render each city with an image and its title*/}
                {/* result.query ska vara samma som result.id, query = namnet som staden enligt API?*/}
                <div>
                    <p>{result.city + ", " + result.state + ", " + result.country}</p>
                </div>
            </span>
        );
    };
}

export default SearchResultsView;
