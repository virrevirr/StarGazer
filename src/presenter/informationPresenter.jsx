
// similar to detailsPresenter but for information for a city
import InformationView from "../views/informationView.jsx";
import WeatherView from "../views/weatherView.jsx";
import MoonView from "../views/moonView.jsx";
import NewsView from "../views/newsView.jsx";

//model is starModel
export default function Information(props){
    function addToWantToGoACB(){
        props.model.addToWantToGo(props.model.currentLocation);
    }
    function addVisitedACB(){
        props.model.addToVisited(props.model.currentLocation);
    }

    function promiseData(promiseState){
        if(!promiseState.promise) {//if promiseState.promise is false, no data should be returned.
            return "no data";
        }  
        // if promise is true, check data and error. 
        if(!promiseState.data){
            if(!promiseState.error){
                return <img src="https://brfenergi.se/iprog/loading.gif" height = {"50"}/>;
            }
            return promiseState.error.toString(); //if promiseState.error is true and promise.data is false return error 
        }
        if(promiseState.data.moon){
            console.log("moon", promiseState.data);
            return (<MoonView moonData = {promiseState.data}/> );
        }
        if(promiseState.data.forecast){
            console.log("weather", promiseState.data);
            return  (<WeatherView weatherData = {promiseState.data}/>);
        }
        console.log("news", promiseState.data);
        return (<NewsView newsData = {promiseState.data}/> );
    }

    return (
        <div>
        <InformationView 
        locationData={props.model.currentLocation} //current location är objekt
        addToGo ={addToWantToGoACB}
        addToVisited={addVisitedACB} 
        /> 

        {promiseData(props.model.weatherPromiseState)}

        {/* Code with api fetch */}
        {/*promiseData(props.model.moonPromiseState)*/}

        {/* Code without api fetch */}
        <MoonView />

        {promiseData(props.model.newsPromiseState)}

        </div>
        );
}