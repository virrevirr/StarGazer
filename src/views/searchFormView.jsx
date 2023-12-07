// "home sidan" där man ska söka på en plats. knapp för profilen och "sök".

function SearchFormView(props){
    
    function userInputACB(event){
        console.log("search for ",event.target.value);
        //return props.userInputACB(event.target.value);
    }

    function clickSearchACB(){
        console.log("click search");
        //return clickSearchACB();
    }

    function navigateToProfileACB(){
        console.log("navigate to profile");
        window.location.hash = '#/profile';
    };

    return(
    <div>
        {/*Title of the page*/}
        <h2>Search Bar</h2>
        <div className="moveButtonRight">
            <button className="align_right" onClick={navigateToProfileACB}>Profile</button></div>
        
        <input placeholder={"Please type in min three characters"} onChange={userInputACB}/>
        <button onClick={clickSearchACB}>Search</button>
        
    </div>
    )
    
};

export default SearchFormView;