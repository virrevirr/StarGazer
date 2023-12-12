// försök på stjärnbilder som inte funkat så bra

function StarView(props){
    console.log("stars",props.starData[0].constellation)

    function starsInConstellation(){
        for (let i = 0; i < props.starData.length; i++) {
            return props.starData.constellation[i]
        }
    }

    return (
        <div className="mainContainer">
            <h1>{props.starData.constellation}</h1> 

            <div>
                <img src = {"https://en.wikipedia.org/wiki/"+props.starData[0].constellation+
                "_(constellation)#/media/File:"+props.starData.constellation[0]+"_IAU.svg"} height = {"200"} />
            </div>
            
            <div>
                <h3>Stars included</h3> 
                <p>{starsInConstellation}</p> 
            </div>
        
        </div>
    );
}

export default StarView;