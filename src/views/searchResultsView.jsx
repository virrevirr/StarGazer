// search results

function SearchResultsView(props){
    console.log("search results", props.searchResult);
    
    /* Test code without api fetch */
    const searchResult = [{
        city: "Paris",
        state: "Sample State",
        country: "France"
    },
    {
        city: "London",
        state: "Sample State",
        country: "United Kingdom"
    },
    {
        city: "Stockholm",
        state: "Sample State",
        country: "Sweden"
    }
    ]


    return(
       <div className="searchResultsContainer">
            {/* Code with api fetch */}
            {/*props.searchResult.map(renderResultCB)*/}

            {/* Code without api fetch */}
            {searchResult.map(renderResultCB)}
        </div>
    );

    function renderResultCB(result){
        function onLocationClickACB(event){
            props.onLocationClick(result);
        };

        return (
            <span key={result} onClick={onLocationClickACB}>
                {/*render each city with its title*/}
                <a href="#/information"><p>{result.city + ", " + result.state +", " + result.country}</p></a>
                
            </span>
        );
    };
}

export default SearchResultsView;
