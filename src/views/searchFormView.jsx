// "home sidan" där man ska söka på en plats. knapp för profilen och "sök".

function SearchFormView(props){
    
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
    
    <div className="searchContainer">
        {/*Title of the page*/}
        <h1>Search Bar</h1>
        <div className="profileButton">
            <button className="buttonDesign" onClick={navigateToProfileACB}>Profile</button></div>
        
        <input className="input" placeholder={"Please type in min three characters"} onChange={userInputACB}/>
        <button className="buttonDesign" onClick={clickSearchACB}>Search</button>
        
    </div>
    )
    
};

export default SearchFormView;