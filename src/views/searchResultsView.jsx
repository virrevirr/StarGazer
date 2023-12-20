// search results

function SearchResultsView(props){
    //console.log("search results", props.searchResult);
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
       <div className="searchResultsContainer"> {/* Gör resultaten skrollbara istället och gör diven mindre så att sökrutan och resultaten är samma storlek */}
            {/* Code with api fetch */}
            {/*props.searchResult.map(renderResultCB)*/}

            {!searchResult && defaultCities()} {/* try with api fetch, to render default cities*/}
            {/* Code without api fetch */}
            {searchResult && searchResult.map(renderResultCB)}
        </div>
    );

    function defaultCities(){
        const defaultCities = searchResult.slice(0, 10);
        return defaultCities.map(renderResultCB)
    }

    function renderResultCB(result){
        function onLocationClickACB(event){
            window.location.hash= "#/information";
            props.onLocationClick(result);
        };

        return (
            <span key={result} onClick={onLocationClickACB}>
                {/*render each city with its title*/}
                <p>{result.city + ", " + result.state +", " + result.country}</p>
                
            </span>
        );
    };
}

export default SearchResultsView;
