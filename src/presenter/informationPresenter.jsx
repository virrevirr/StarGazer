import InformationView from "../views/informationView.jsx";
import WeatherView from "../views/weatherView.jsx";
import MoonView from "../views/moonView.jsx";
import NewsView from "../views/newsView.jsx";
import StarView from "../views/starView.jsx";

//model is starModel
export default function Information(props){
    function visitedCB(location){return location === props.model.currentLocation;}
    function addToWantToGoACB(){props.model.addToWantToGo(props.model.currentLocation);}
    function addVisitedACB(){props.model.addToVisited(props.model.currentLocation);}


    function promiseWeatherData(promiseState){
        if(!promiseState.promise){//if promiseState.promise is false, no data should be returned.
            return "no data";
        }  
        else{ // if promise is true, check data and error. 
            if(!promiseState.data){
                if(!promiseState.error){return <img src="https://brfenergi.se/iprog/loading.gif"/>;}
                return promiseState.error.toString(); //if promiseState.error is true and promise.data is false return error 
            }
            return  (<WeatherView weatherData = {promiseState.data}/>);
        }
    }

    function promiseMoonData(promiseState){
        if(!promiseState.promise){//if promiseState.promise is false, no data should be returned.
            return "no data";
        }  
        else{ // if promise is true, check data and error. 
            if(!promiseState.data){
                if(!promiseState.error){return <img src="https://brfenergi.se/iprog/loading.gif"/>;}
                return promiseState.error.toString(); //if promiseState.error is true and promise.data is false return error 
            }
            return (<MoonView moonData = {promiseState.data}/> );
        }
    }

    function promiseNewsData(promiseState){
        if(!promiseState.promise){//if promiseState.promise is false, no data should be returned.
            return "no data";
        }  
        else{ // if promise is true, check data and error. 
            if(!promiseState.data){
                if(!promiseState.error){return <img src="https://brfenergi.se/iprog/loading.gif"/>;}
                return promiseState.error.toString(); //if promiseState.error is true and promise.data is false return error 
            }
            return (<NewsView newsData = {promiseState.data}/> );
        }
    }

    function promiseStarData(promiseState){
        {/* Gör om */}
        if(!promiseState.promise){//if promiseState.promise is false, no data should be returned.
            return "no data";
        }  
        else{ // if promise is true, check data and error. 
            if(!promiseState.data){
                if(!promiseState.error){return <img src="https://brfenergi.se/iprog/loading.gif"/>;}
                return promiseState.error.toString(); //if promiseState.error is true and promise.data is false return error 
            }
            return (<StarView starData = {promiseState.data}/> );
        }
    }

    return (
        <div>
        <InformationView 
        locationData={props.model.currentLocation} //current location är objekt
        isLocVisited ={props.model.haveVisited.find(visitedCB)} //isLocVisited expected to be falsy with empty menu
        addToGo ={addToWantToGoACB}
        addToVisited={addVisitedACB} 
        //add astroEvents, moonphase 
        /> 

        {promiseWeatherData(props.model.weatherPromiseState)}
        
        {promiseMoonData(props.model.moonPromiseState)}

        {promiseNewsData(props.model.newsPromiseState)}

        {/*promiseStarData(props.model.starPromiseState)*/}

        </div>
        );
}