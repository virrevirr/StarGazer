//view för profilen, har ska lista på sparade stjärnbilder visas (till att börja med) och namn på personen,
//och en knapp för gå tillbaka till föregående sida (fråga TA hur man kan göra detta)
//går säkert att titta på sidebarView koden för inspo för listan av stjärnbilder då de kommer funka lite likadant.

function ProfileView(props){
    function cancelACB(event){console.log(window.location.hash="#/search")}
    function logOutACB(event){console.log(window.location.hash="#/")}
    
    function renderArrayACB(place){
        function onLocationClickACB(event){
            console.log(window.location.hash= "#/information");
            props.onLocationClick(place);
        };
        
        return (<div>
                    <span onClick={onLocationClickACB} key={place}>{place.city +", "+ place.state +", "+ place.country}</span>
                </div>);
    }   
    return (
        <div className="mainContainer">
            <span>
                <p>Profile Name</p>
                <button onClick={logOutACB}>Log out</button>
            </span>
            <div>
                <h>Places I want to go</h>
                <ul>
                    {props.wantToGoPlaces.map(renderArrayACB)}
                </ul>
            </div>
            <div>
                <h>Places I have been</h>
                    <ul>
                        {props.haveVisitedPlaces.map(renderArrayACB)}
                    </ul>
            </div>
            <button onClick={cancelACB}>Back to search</button>
        </div>

    );
}


export default ProfileView;