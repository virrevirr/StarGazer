// "home sidan" där man ska söka på en plats. knapp för profilen och "sök".

function SearchFormView(props){
    
    function userInputACB(event){
        return props.userInputACB(event.target.value);
    }

    function clickSearchACB(){
        return clickSearchACB();
    }

    function navigateToProfileACB(){
        window.location.hash = '#/profile';
    };

    return(
    <div>
        {/*Title of the page*/}
        <h2>Search Bar</h2>
        <div className="moveButtonRight"><button className="align_right" onClick={navigateToProfileACB}>Profile</button></div>
        <input placeholder="Please type in min three characters"></input>
        <input>value={props.text} onChange={userInputACB} </input>
        <button onClick={clickSearchACB}>Search</button>
        
    </div>
    )
    
};

export default SearchFormView;