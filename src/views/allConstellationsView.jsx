function AllConstellationsView(props){

    function navigateToProfileACB(){
        console.log("navigate to profile");
        window.location.hash = '#/profile';
    };

    return(
    <div>
        <div className="moveButtonRight">
            <button className="align_right" onClick={navigateToProfileACB}>Profile</button>
        </div>
        
        <div className="searchResultsContainer">
                {props.searchResult.map(renderResultCB)}
        </div> 

    </div>
    )

    function renderResultCB(constellation){
        function onConstellationClickACB(event){
            
            window.location.hash= "#/constellation";
            props.onClick(constellation);
        };

        return (
            <span key={constellation} onClick={onConstellationClickACB}>
                    <p>{constellation}</p>
            </span>
        );
    }
    }