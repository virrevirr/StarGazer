import {LogoutIcon} from "/src/components.jsx";

function ProfileView(props){
    console.log("haveVisitedPlaces from profileView", props.haveVisitedPlaces)
    console.log("wantToGoPlaces from profileView", props.wantToGoPlaces)
       
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
                        <td onClick={onLocationClickACB}>
                            <a href="#/information">{place.city +", "+ place.country}</a>
                        </td>
                    </tr>
                </div>;
    } 

    function renderConstellationsACB(place){
        function renderACB(constellation){
            return constellation+" | ";
        }
        return <div className="padding">
                    <tr key={place}> {/* Lägg till class för att constellations inte ska ta upp så mycket plats alt. fixa en egen ruta åt constellations */}
                        <td>{place.city}: {place.constellations.map(renderACB)}</td>
                    </tr>
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

            <div className="ParentContainer profileContainerParent">
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
                <LogoutIcon title="Log Out" onClick={navigateToLoginACB} fillColor="#ffffff" size="48"/>
            </div>
        </div>
    );
}


export default ProfileView;