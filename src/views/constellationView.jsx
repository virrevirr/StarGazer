// försök på stjärnbilder som inte funkat så bra

function ConstellationView(props){
    console.log("stars",props.constellationData)

    function starsInConstellation(data){
        for (let i = 0; i < data.length; i++) {
            return data[i].name;
        }
    }

    return (
        <div className="mainContainer">
            <h1>{props.constellationData[0].constellation}</h1> 

            <div>
                <img src = {"https://en.wikipedia.org/wiki/"+props.constellationData[0].constellation+
                "_(constellation)#/media/File:"+props.constellationData[0].constellation+"_IAU.svg"} height = {"200"} />
            </div>

            <div>
                <h3>Stars included</h3> 
                <p>{starsInConstellation(props.constellationData)}</p> 
            </div>
        
        </div>
    );
}

export default ConstellationView;