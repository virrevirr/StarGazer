// "home sidan" där man ska söka på en constellation. knapp för profilen och "sök".

function SearchConstellationView(props){
    
    function userInputACB(event){
        console.log("search for ", event.target.value);
        return props.userInput(event.target.value);
    }

    function clickSearchACB(){
        console.log("click search");
        return props.clickSearch();
    }

    function navigateToProfileACB(){
        console.log("navigate to profile");
        window.location.hash = '#/profile';
    };

    return(
    <div>
        <div className="moveButtonRight">
            <button className="align_right" onClick={navigateToProfileACB}>Profile</button>
        </div>
        
        <input placeholder={"Search for constellation"} onChange={userInputACB}/>

        <button onClick={clickSearchACB}>Search</button>
    </div>
    )
};

export default SearchConstellationView;