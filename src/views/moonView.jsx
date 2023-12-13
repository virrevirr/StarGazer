
function MoonView(props){
    console.log(props.moonData)
    return (
        <div>
            <h2>Moon</h2> 

            <h3>Moon phase</h3> 
            <p>{props.moonData.moon.phase}</p>

            <img src={props.moonData.moon.img_flat} height={"100"}/>

            <p>{props.moonData.moon.info} </p>
            
        </div>
    );
}

export default MoonView;