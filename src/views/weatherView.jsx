function WeatherView(props){

    function weatherByDayCB() {
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
        <div className="ParentContainer bigWeatherContainer">
            <table>
                <tbody>
                    <h2> Weather forecast </h2>
                    <div className="boarderAndStackable weatherContainer">
                        {weatherByDayCB()}
                    </div>
                </tbody>
            </table>
        </div>

    );
}

export default WeatherView;