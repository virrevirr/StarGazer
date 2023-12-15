
function MoonView(props){
    //console.log("moon data", props.moonData)
    {/* Code without api fetch (change back to props.moondata after)*/}
    let moonData = {
        moon : {
        phase : "Warning Crescent",
        img_flat : "src/moon.png",
        info : "This phase occurs between the new Moon and first quarter phases. At the beginning of this stage, we see a thin, crescent-shape Moon, which, in the Northern Hemisphere, appears on the right side. The lit area slowly widens each day, covering more and more of the right side of the Moon’s surface until the first quarter phase, when the Moons entire right side is illuminated. (In the Southern Hemisphere, the same thing happens, only on the left side.) Some lunar and lunisolar calendars, such as the Islamic (or Hijri) calendar, define the start of a month as when the Moon first becomes visible, which is usually a day or so after the new Moon, during its waxing crescent stage."
        }
    }

    return (
        <div className="moonContainer"> {/* Lägg till class för att rendera moon som prototypen */}
            <h2>Moon phase</h2> 
            <h3>{moonData.moon.phase}</h3>
            <img src={moonData.moon.img_flat} height={"100"}/>
            <div className="moonInformation">
                <p>{moonData.moon.info}</p>   {/* Fixa så att infon inte tar upp så mycket plats */}
            </div>
        </div>
    );
}

export default MoonView;