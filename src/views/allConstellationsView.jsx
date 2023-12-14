
function AllConstellationsView(props){

    function navigateToProfileACB(){
        console.log("navigate to profile");
        window.location.hash = '#/profile';
    }
    
    function navigateToLoginACB(){
        console.log("navigate to login")
        window.location.hash = '#/'
    };

    function navigateToSearchACB(){
        console.log("navigate to search")
        window.location.hash = '#/search'
    };

    return(
    <div>
        <div> {/* Lägg till class för att rendera knappen i vänstra hörnet */}
            <button className="buttonDesign" onClick={navigateToSearchACB}>Search city</button>
        </div>

        <div className="profileButton">
            <button className="buttonDesign" onClick={navigateToProfileACB}>Profile</button>
        </div>
        
        <div class = "grid"> {/* Lägg till grid-class för sökresultat som i labben */}
            {Object.entries(props.allConstellations).map(renderResultCB)}
        </div> 

        <div className="logOutButton">
            <button className="buttonDesign" onClick={navigateToLoginACB}>Log out</button>
        </div>

    </div>
    )

    function renderResultCB(constellation){
        // Renderar bild och text på varje constellation
        
        function onConstellationClickACB(event){
            props.onConstellationClick(constellation);
            window.location.hash= "#/constellation";
        };

        return(
            <span key={constellation[0]} onClick={onConstellationClickACB}> 
                <img src = {constellation[1]} height = {"100"} />
                <p>{constellation[0]}</p>
            </span>
        );}
    }
    export default AllConstellationsView;