// search results

function ResultsConstellationView(props){
    console.log("props", props);

    return(
       <div className="searchResultsContainer">
            {props.searchResult.map(renderResultCB)}
       </div> 
    );

    function renderResultCB(result){
        function onConstellationClickACB(event){
            window.location.hash= "#/constellation";
            props.onConstellationClick(result);
        };

        return (
            <span key={result} onClick={onConstellationClickACB}>
                    <p>{result.constellation}</p>
            </span>
        );
    };
}

export default ResultsConstellationView;
