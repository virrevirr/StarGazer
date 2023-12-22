import {AccountOutlineIcon, LogoutIcon} from "/src/components.jsx";

function AllConstellationsView(props){
    /*console.log("all constellations", props.allConstellations)*/

    function navigateToProfileACB(){
        window.location.hash = '#/profile';
    }
    
    function navigateToLoginACB(){
        props.loginCB();
    };

    function navigateToInformationACB(){
        window.location.hash = '#/information';
    };

    return(
    <div>
        <div className="backToSearchButton">
            <button className="biggerButtonDesign" onClick={navigateToInformationACB}>Back to {props.location.city}</button>
        </div>

        <div className="profileButton">
            <AccountOutlineIcon title="Profile" onClick={navigateToProfileACB} fillColor="#ffffff" size="48"/>
        </div>
        
        <div class = "ParentContainer constellationsContainer">
            {Object.entries(props.allConstellations).map(renderResultCB)}
        </div> 

        <div className="logOutButton">
            <LogoutIcon title="Log Out" onClick={navigateToLoginACB} fillColor="#ffffff" size="48"/>
        </div>

    </div>
    )

    function renderResultCB(constellation){
        // Renderar bild och text på varje constellation
        function onConstellationClickACB(event){
            /*contellation[0] is the name of the constellation*/
            props.onConstellationClick(constellation[0]);
            window.location.hash= "#/constellation";
        };

        return(
            <div className="constellationDisplay">
                <span key={constellation[0]} onClick={onConstellationClickACB}> 
                    <img src = {constellation[1]} height = {"100"} />
                    <p>{constellation[0]}</p>
                </span>
            </div>
            
        );}
    }
    export default AllConstellationsView;