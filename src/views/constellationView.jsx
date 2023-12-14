import starConstellations from "../starConstellations.jsx"

function ConstellationView(props){
    console.log("constellation",props.constellationData)

    function navigateToProfileACB(){
        window.location.hash = '#/profile';
    }
    
    function navigateToLoginACB(){
        window.location.hash = '#/'
    };

    function navigateToAllConstellationsACB(){
        window.location.hash = '#/allConstellations'
    };

    return (
        <div className="searchContainer"> {/* Lägg till class som är specifik för den här? */}
            <div> {/* Lägg till class för att rendera knappen i vänstra hörnet och gör så att all text får plats */}
                <button className="buttonDesign" onClick={navigateToAllConstellationsACB}>Constellations</button>
            </div>

            <div className="profileButton">
                <button className="buttonDesign" onClick={navigateToProfileACB}>Profile</button>
            </div>

            <div> {/* Lägg till class för att rendera rubriken högre upp */}
                <h1>{props.constellationData[0].constellation}</h1> 
            </div>

            <div> {/* Lägg till class för att rendera bilden till vänster om stjärnnamnen */}
                <img src = {starConstellations[props.constellationData[0].constellation]} height = {"400"} />
            </div>

            <div > {/* Lägg till class för att rendera stjärnorna till höger om bilden */}
                <h1>Stars included</h1> 
                {props.constellationData.map(starsInConstellationCB)}
            </div>

            <div> {/* Lägg till class för att rendera knappen längst ner till höger och gör så att all text får plats i den */}
                <button className="buttonDesign" onClick={navigateToLoginACB}>Log out</button>
            </div>

            <div className="logOutButton">
                <button className="buttonDesign" onClick={navigateToLoginACB}>Log out</button>
            </div>
        
        </div>
    );
    
    function starsInConstellationCB(star){
        return (
            <span key={star.name}> {/* Lägg till class för att rendera stjärnorna i en grid (som bilderna i labben) alt. på en row */}
                    <h3>{star.name}</h3>
            </span>
        );}
}

export default ConstellationView;