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
    
    function renderArrayACB(place){ 
        console.log("want",props.model.wantToGo)
        if (props.wantToGo.length !== 0){
            
            /* Funktionalitet: Lägg till constellation och mappa över en dictionary som i allConstellationsView */
            function onLocationClickACB(event){
                props.onLocationClick(place);
            };
            return (<div>
                        <span onClick={onLocationClickACB} key={place}>{place.city +", "+ place.state +", "+ place.country}</span>
                    </div>);
        }
        else{
            return (<div> Search for locations to add </div>);
        }
    }   
    return (
        <div>
            <div> {/* Lägg till class för att rendera knappen i vänstra hörnet */}
                <button className="buttonDesign" onClick={navigateToSearchACB}>Search city</button>
            </div>

            <div>
                <h1>Profile Name</h1> {/* Funktionalitet: Lägg till den faktiska användarens namn här */}
            </div>
            
            <table> {/* Lägg till class för att rendera kolumnerna bredvid varandra (som grid) */}
                <tbody>
                    <td>
                        <h1>Places I want to go</h1>
                        <ul>
                            {/* Funktionalitet: Fundera över om vi ska ha en borttagningsknapp för städer och constellations*/}
                            {props.wantToGoPlaces.map(renderArrayACB)}
                        </ul>
                    </td>

                    <td></td>

                    <td>
                        <h1>Places I have been</h1>
                        <ul>
                            {/* Funktionalitet: Fundera över om vi ska ha en borttagningsknapp för städer och constellations*/}
                            {props.haveVisitedPlaces.map(renderArrayACB)}
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