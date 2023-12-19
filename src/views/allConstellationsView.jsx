import {AccountOutlineIcon, LogoutIcon} from "/src/components.jsx";

function AllConstellationsView(props){
    console.log("all constellations", props.allConstellations)

    function navigateToProfileACB(){
        window.location.hash = '#/profile';
    }
    
    function navigateToLoginACB(){
        props.loginCB();;
    };

    function navigateToSearchACB(){
        window.location.hash = '#/search';
    };

    return(
    <div>
        <div className="backToSearchButton"> {/* Lägg till class för att rendera knappen i vänstra hörnet */}
            <button className="biggerButtonDesign" onClick={navigateToSearchACB}>Back to search</button>
        </div>

        <div className="profileButton">
            {/*<button className="buttonDesign" onClick={navigateToProfileACB}>Profile</button>*/}
            <AccountOutlineIcon onClick={navigateToProfileACB} fillColor="#ccc" size="48"/>
        </div>
        
        <div class = "constellationsContainer"> {/* Lägg till grid-class för sökresultat som i labben (kör 3 rader, 14 kolumner) */}
            {Object.entries(props.allConstellations).map(renderResultCB)}
        </div> 

        <div className="logOutButton">
            {/*<button className="buttonDesign" onClick={navigateToLoginACB}>Log out</button>*/}
            <LogoutIcon onClick={navigateToLoginACB} fillColor="#ccc" size="48"/>
        </div>

    </div>
    )

    function renderResultCB(constellation){
        // Renderar bild och text på varje constellation
        function onConstellationClickACB(event){
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