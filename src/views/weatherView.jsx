function WeatherView(props){

    function weatherByDay() {
        const weatherDays = [];
        for (let i = 0; i < 3; i++) {
            weatherDays.push(
                <div key={i}>
                    <h3>{props.weatherData.forecast.forecastday[i].date}</h3>
                    <p>{props.weatherData.forecast.forecastday[i].day.condition.text}</p>
                    <img src={props.weatherData.forecast.forecastday[i].day.condition.icon} alt={`Weather icon for ${props.weatherData.forecast.forecastday[i].date}`} />

                    <td>
                        <h3>Sunrise</h3>
                        <p>{props.weatherData.forecast.forecastday[i].astro.sunrise}</p>

                        <h3>Moonrise</h3>
                        <p>{props.weatherData.forecast.forecastday[i].astro.moonrise}</p>
                    </td>

                    <td>
                        <h3>Sunset</h3>
                        <p>{props.weatherData.forecast.forecastday[i].astro.sunset}</p>

                        <h3>Moonset</h3>
                        <p>{props.weatherData.forecast.forecastday[i].astro.moonset}</p>
                    </td>
                </div>
            );
        }
    return weatherDays;
}

    return (
        <table className="bigWeatherContainer"> {/* Lägg till class för att rendera weather som prototypen ELLER utplacerad där det ser bra ut på skärmen */}
            <tbody>
                <h2> Weather forecast </h2>
                <div className="weatherContainer">   {/* Lägg till class för att rendera dom 3 dagarna bredvid varandra i kolumner (typ som grid) */}
                    {weatherByDay()}
                </div>
            </tbody>
        </table>
    );
}

export default WeatherView;