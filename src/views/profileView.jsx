
function ProfileView(props){
    console.log("have visited", props.haveVisitedPlaces)
    console.log("want to go", props.wantToGoPlaces)
    
    function deleteCityButton(place){
        props.deleteCityButton(place);
    }
    
    function navigateToLoginACB(){
        window.location.hash = '#/';
    }

    function navigateToSearchACB(){
        window.location.hash = '#/search';
    }

    function renderArrayACB(place){ 
        function onLocationClickACB(event){
            props.onLocationClick(place);
            window.location.hash = '#/information';
        }
        
        function deleteClickACB(event){
            event.stopPropagation(); // Prevent the event from propagating to parent elements
            
            props.deleteCityButton(place);
        };
        return (<div>
                    <span onClick={onLocationClickACB} key={place}>
                        <td>
                            <button onClick={deleteClickACB}>X</button>
                        </td>
                        {place.city +", "+ place.state +", "+ place.country}
                    </span>
                </div>);
    } 

    function renderConstellationsACB(place){
        function renderACB(constellation){
            return constellation+", ";
        }
        return (<div>
            <span key={place}> {/* Lägg till class för att constellations inte ska ta upp så mycket plats alt. fixa en egen ruta åt constellations */}
                {place.city}: {place.constellations.map(renderACB)}
            </span>
        </div>);
    }

    return (
        <div>
            <div> {/* Lägg till class för att rendera knappen i vänstra hörnet och gör så att texten får plats i knappen*/}
                <button className="buttonDesign" onClick={navigateToSearchACB}>Search city</button>
            </div>

            <div>
                <h1>Profile Name</h1> {/* Lägg till en profil-ikon */}
                {/* Funktionalitet: Lägg till den faktiska användarens namn här */}
            </div>
            
            <table> {/* Lägg till class för att snygga till kolumnerna (alt. kom på en lösning som är bättre än att ha en table) */}
                <tbody>
                    <td> {/* Lägg till funktion för att kunna skrolla igenom alla städerna */}
                        <h2>Places I want to go</h2>
                        <ul>
                            {/* Funktionalitet: Fundera över om vi ska ha en borttagningsknapp för städer */}
                            {props.wantToGoPlaces.map(renderArrayACB)}
                        </ul>
                    </td>

                    <td></td>

                    <td> {/* Lägg till funktion för att kunna skrolla igenom alla städerna */}
                        <h2>Places I have been</h2>
                        <ul>
                            {/* Funktionalitet: Fundera över om vi ska ha en borttagningsknapp för städer och constellations*/}
                            {props.haveVisitedPlaces.map(renderArrayACB)}
                        </ul>
                    </td>

                    <td></td>

                    <td> {/* Lägg till funktion för att kunna skrolla igenom constellations */}
                        <h2>Constellations I saw</h2>
                        <ul>
                            {props.haveVisitedPlaces.map(renderConstellationsACB)}
                        </ul>
                    </td>
                </tbody>
            </table>

            <div className="logOutButton">
                <button className="buttonDesign" onClick={navigateToLoginACB}>Log out</button>
            </div>
        </div>
    );
}


export default ProfileView;