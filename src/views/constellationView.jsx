// försök på stjärnbilder som inte funkat så bra

function ConstellationView(props){
    console.log("stars",props.constellationData)

    function starsInConstellation(){
        for (let i = 0; i < props.constellationData.length; i++) {
            return props.constellationData.constellation[i]
        }
    }

    return (
        <div className="mainContainer">
            <h1>{props.constellationData.constellation}</h1> 

            <div>
                <img src = {"https://en.wikipedia.org/wiki/"+props.constellationData[0].constellation+
                "_(constellation)#/media/File:"+props.constellationData.constellation[0]+"_IAU.svg"} height = {"200"} />
            </div>

            <div>
                <h3>Stars included</h3> 
                <p>{starsInConstellation}</p> 
            </div>
        
        </div>
    );
}

export default ConstellationView;