
function MoonView(props){
    return (
        <div className="ParentContainer moonContainer">
            <h2>Moon phase</h2> 
            <div className="boarderAndStackable moonInformation">
            {/*Displays the moon phase, image and information with a boarder around it*/}
                <h3>{props.moonData.moon.phase}</h3>
                <img src={props.moonData.moon.img_flat} height={"100"}/>
                <p>{props.moonData.moon.info}</p> 
            </div>
        </div>
    );
}

export default MoonView;