// search results

function SearchResultsView(props){

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


    return( // Rendering the search results.
       <div className="searchResultsContainer">
            {/* Code with api fetch */}
            {/*props.searchResult.map(renderResultCB)*/}

            {/* Code without api fetch */}
            {searchResult.map(renderResultCB)}
        </div>
    );

    function renderResultCB(result){
        // We render the search results with its title. We are able to click on it,
        // for it to lead to the city's information page. 
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
