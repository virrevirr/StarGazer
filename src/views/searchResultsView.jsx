// search results

function SearchResultsView(props){
    console.log("props", props);

    {/* Test code without api fetch */}
    /*const searchResult = {
        city: "Paris",
        state: "Sample State",
        country: "France"
    
    function onLocationClickACB(event){
        console.log(window.location.hash= "#/information");
        props.onLocationClick(searchResult);
    };*/


    return(
       <div>
            {/* Code with api fetch */}
            {props.searchResult.map(renderResultCB)}
            
            {/* Test code without api fetch */}
            {/*<span key={searchResult} onClick={onLocationClickACB}>
                {/*render each city with an image and its title*/}
                {/* result.query ska vara samma som result.id, query = namnet som staden enligt API?*/}
                {/*<div>
                    <p>{searchResult.city + ", " + searchResult.state +", "+ searchResult.country}</p>
                </div>
            </span>*/}



       </div> 
    );

    function renderResultCB(result){
        function onLocationClickACB(event){
            window.location.hash= "#/information";
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
