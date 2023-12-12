// search results

function SearchResultsView(props){

    {/* KOMMENTERA UT */}
    const searchResult = {
        city: "Paris",
        state: "Sample State",
        country: "United States"
    }

    {/* KOMMENTERA UT 
    function onLocationClickACB(event){
        console.log(window.location.hash= "#/information");
        props.onLocationClick(searchResult);
    };*/}


    return(
       <div>
            {/* KOMMENTERA TILLBAKA */}
            {props.searchResult.map(renderResultCB)}
            
            {/* KOMMENTERA UT */}
            {/*<span key={searchResult} onClick={onLocationClickACB}>
                {/*render each city with an image and its title*/}
                {/* result.query ska vara samma som result.id, query = namnet som staden enligt API?*/}
                {/*<div>
                    <p>{searchResult.city + ", " + searchResult.country}</p>
                </div>
            </span>*/}



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
                    <p>{result.city + ", " + result.state +", " + result.country}</p>
                </div>
            </span>
        );
    };
}

export default SearchResultsView;
