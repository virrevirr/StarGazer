//view för profilen, har ska lista på sparade stjärnbilder visas (till att börja med) och namn på personen,
//och en knapp för gå tillbaka till föregående sida (fråga TA hur man kan göra detta)
//går säkert att titta på sidebarView koden för inspo för listan av stjärnbilder då de kommer funka lite likadant.

function ProfileView(props){
    
    function navigateToLoginACB(){
        window.location.hash = '#/'
    };

    function navigateToSearchACB(){
        window.location.hash = '#/search'
    };

    function renderDictACB(object){ 
        /* Funktionalitet: Lägg till constellation och mappa över en dictionary som i allConstellationsView */
        place = object[0]
        constellations = [1]

        function onLocationClickACB(event){
            props.onLocationClick(place);
            window.location.hash = '#/information'
        };

        function renderArrACB(constellation){
            return(<span key={constellation}>
                        {constellation}
                    </span>);
        };

        return (<div>
                    <span onClick={onLocationClickACB} key={place}>
                        {place.city +", "+ place.state +", "+ place.country}
                        {constellations.map(renderArrACB)}
                    </span>
                </div>);
    }   

    function renderArrayACB(place){ 
        /* Funktionalitet: Lägg till constellation och mappa över en dictionary som i allConstellationsView */
        function onLocationClickACB(event){
            props.onLocationClick(place);
            window.location.hash = '#/information'
        };
        return (<div>
                    <span onClick={onLocationClickACB} key={place}>
                        {place.city +", "+ place.state +", "+ place.country}
                    </span>
                </div>);
    } 

    return (
        <div>
            <div> {/* Lägg till class för att rendera knappen i vänstra hörnet */}
                <button className="buttonDesign" onClick={navigateToSearchACB}>Search city</button>
            </div>

            <div>
                <h1>Profile Name</h1> {/* Funktionalitet: Lägg till den faktiska användarens namn här */}
            </div>
            
            <table> {/* Lägg till class för att snygga till kolumnerna (alt. kom på en lösning som är bättre än att ha en table) */}
                <tbody>
                    <td> {/* Lägg till funktion för att kunna skrolla igenom alla städerna */}
                        <h1>Places I want to go</h1>
                        <ul>
                            {/* Funktionalitet: Fundera över om vi ska ha en borttagningsknapp för städer */}
                            {props.wantToGoPlaces.map(renderArrayACB)}
                        </ul>
                    </td>

                    <td></td>

                    <td>
                        <h1>Places I have been</h1>
                        <ul>
                            {/* Funktionalitet: Fundera över om vi ska ha en borttagningsknapp för städer och constellations*/}
                            {Object.entries(props.haveVisitedPlaces).map(renderDictACB)}
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