import {LogoutIcon} from "/src/components.jsx";

function ProfileView(props){
    console.log("have visited", props.haveVisitedPlaces)
    console.log("want to go", props.wantToGoPlaces)
       
    function navigateToLoginACB(){props.loginCB();}

    function navigateToSearchACB(){window.location.hash = '#/search';}

    function renderArrayACB(place){ 

        function onLocationClickACB(event){
            props.onLocationClick(place);
            window.location.hash = '#/information';
        }
        
        function deleteClickACB(event){
            event.stopPropagation(); // Prevent the event from propagating to parent elements
            
            props.deleteCityButton(place);
        };
        return <div>
                    <tr key={place}>
                        <td><button className="xButton" onClick={deleteClickACB}>X</button></td>
                        <td href="#/information" onClick={onLocationClickACB}>
                            {place.city +", "+ place.country}
                        </td>
                    </tr>
                </div>;
    } 

    function renderConstellationsACB(place){
        function renderACB(constellation){
            return constellation+", ";
        }
        return <div>
                    <tr key={place}> {/* Lägg till class för att constellations inte ska ta upp så mycket plats alt. fixa en egen ruta åt constellations */}
                        <td>{place.city}: {place.constellations.map(renderACB)}</td>
                        <td></td>
                    </tr>
                    <td></td>
                </div>;

    }

    return (
        <div>
            <div className="backToSearchButton"> {/* Lägg till class för att rendera knappen i vänstra hörnet och gör så att texten får plats i knappen*/}
                <button className="biggerButtonDesign" onClick={navigateToSearchACB}>Back to search</button>
            </div>

            <div>
                <h1>{props.userName}</h1> {/* Lägg till en profil-ikon */}
                
            </div>

            <div className="profileContainerParent">
                <div>
                    <h2>Places I want to go</h2>
                    <td className="profileContainer">
                        {props.wantToGoPlaces.map(renderArrayACB)}
                    </td>
                </div>

                <div>
                    <h2>Places I have been</h2>
                    <td className="profileContainer">
                        {props.haveVisitedPlaces.map(renderArrayACB)}
                    </td>
                </div>

                <div>
                    <h2>Constellations I saw</h2>
                    <td className="profileContainer">
                        {props.haveVisitedPlaces.map(renderConstellationsACB)}
                    </td>
                </div>
            </div>

            <div className="logOutButton">
                {/*<button className="buttonDesign" onClick={navigateToLoginACB}>Log out</button>*/}
                <LogoutIcon onClick={navigateToLoginACB} fillColor="#ffffff" size="48"/>
            </div>
        </div>
    );
}


export default ProfileView;