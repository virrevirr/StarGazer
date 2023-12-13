// försök på stjärnbilder som inte funkat så bra

function ConstellationView(props){
    console.log("constellation",props.constellationData)
    function starsInConstellationCB(star){
        console.log("star", star)
        return (
            <span key={star.name}>
                    <p>{star.name}</p>
            </span>
        );}

        console.log("url", props.constellationUrl)

    return (
        <div className="mainContainer">
            <h1>{props.constellationData[0].constellation}</h1> 

            <div>
                <img src = {props.constellationUrl}
                height = {"500"} />
            </div>

            <div>
                <h1>Stars included</h1> 
                {props.constellationData.map(starsInConstellationCB)}
            </div>
        
        </div>
    );
}

export default ConstellationView;