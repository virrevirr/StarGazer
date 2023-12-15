
function MoonView(props){
    console.log(props.moonData)
    return (
        <div className="moonContainer"> {/* Lägg till class för att rendera moon som prototypen */}
            <h2>Moon phase</h2> 
            <h3>{props.moonData.moon.phase}</h3>
            <img src={props.moonData.moon.img_flat} height={"100"}/>
            <div className="moonInformation">
                <p>{props.moonData.moon.info}</p>   {/* Fixa så att infon inte tar upp så mycket plats */}
            </div>
        </div>
    );
}

export default MoonView;