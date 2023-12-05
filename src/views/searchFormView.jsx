// "home sidan" där man ska söka på en plats. knapp för profilen och "sök".

function SearchFormView(props){
    
    function userInputACB(event){
        return props.userInputACB(event.target.value);
    }

    function clickProfileACB(){
        return clickProfileACB();
    }

    function clickSearchACB(){
        return clickSearchACB();
    }

    return(
    <div>
        <input>value={props.text} onChange={userInputACB} </input>
        <button onClick={clickSearchACB}>Search</button>
        <button onClick={clickProfileACB}>Profile</button>
    </div>
    )
    
};