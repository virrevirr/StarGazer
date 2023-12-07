//view för profilen, har ska lista på sparade stjärnbilder visas (till att börja med) och namn på personen,
//och en knapp för gå tillbaka till föregående sida (fråga TA hur man kan göra detta)
//går säkert att titta på sidebarView koden för inspo för listan av stjärnbilder då de kommer funka lite likadant.

function ProfileView(props){
    function cancelACB(event){console.log(window.location.hash="#/search")}
    function renderArrayACB(city){
        return (
            <li href="#">{city}</li>
        );
    }   
    return (
        <div className="mainContainer">
            <span>
                <p>Profile Name</p>
                <button onClick={cancelACB}>Back to search</button>
            </span>
            <div>
                <h>Places I want to go</h>
                <ul>
                    {/*props.model.wantToGo.map(renderArrayACB)*/}
                    <li href="#">Stockholm</li>
                </ul>
            </div>
            <div>
                <h>Places I have been</h>
                    <ul>
                        {/*props.model.haveVisited.map(renderArrayACB)*/}
                        <li href="#">Singapore</li>
                    </ul>
            </div>
        </div>

    );
}


export default ProfileView;