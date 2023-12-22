import { LogoutIcon } from "/src/components.jsx";

function ProfileView(props) {
  function navigateToLoginACB() {
    //Will log out the user if user presses log out button
    props.loginCB();
  }

  function navigateToSearchACB() {
    //Returns the user to the search page
    window.location.hash = "#/search";
  }

  function renderArrayACB(place) {
    //Renders the locations that have been added by the user to
    //the arrays haveVisited and WantToGo (in starModel)

    function onLocationClickACB(event) {
      //Returns the user to the information page and calls the function
      //onLocationClick that makes the API calls neccesary for the Information page
      props.onLocationClick(place);
      window.location.hash = "#/information";
    }

    function deleteClickACB(event) {
      //Will remove the chosen location form either haveVisited or WantToGo
      event.stopPropagation(); // Prevent the event from propagating to parent elements
      props.deleteCityButton(place);
    }

    return (
      <div>
        <tr key={place}>
          <td>
            <button className="xButton" onClick={deleteClickACB}>
              X
            </button>
          </td>
          <td onClick={onLocationClickACB}>
            <a href="#/information">{place.city + ", " + place.country}</a>
          </td>
        </tr>
      </div>
    );
  }

  function renderConstellationsACB(place) {
    //Renders the constellations that the users have saved, spaced with "|"
    //and padding to even out the results

    function renderACB(constellation) {
      //Renders the constellation name and "|"
      return constellation + " | ";
    }
    return (
      <div className="padding">
        <tr key={place}>
          <td>
            {place.city}: {place.constellations.map(renderACB)}
          </td>
        </tr>
      </div>
    );
  }

  return (
    <div>
      <div className="backToSearchButton">
        <button className="biggerButtonDesign" onClick={navigateToSearchACB}>
          Back to search
        </button>
      </div>

      <div>
        {/*Add the name of the user*/}
        <h1>{props.userName}</h1>
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
        <LogoutIcon
          title="Log Out"
          onClick={navigateToLoginACB}
          fillColor="#ffffff"
          size="48"
        />
      </div>
    </div>
  );
}

export default ProfileView;