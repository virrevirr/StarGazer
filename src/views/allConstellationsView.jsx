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
                {Object.keys(props.allConstellations).map(renderResultCB)}
        </div> 

    </div>
    )

    function renderResultCB(constellation){
        function onConstellationClickACB(event){
            props.onConstellationClick(constellation);
            window.location.hash= "#/constellation";
        };
        return (
            <span key={constellation} onClick={onConstellationClickACB}>
                    <p>{constellation}</p>
            </span>
        );}
    }
    export default AllConstellationsView;