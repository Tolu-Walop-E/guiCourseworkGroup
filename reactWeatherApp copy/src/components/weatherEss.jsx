import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import "../componentStyles/Essentials.css"
import { Link } from 'react-router-dom'
const WeatherEss = () => {
    const [weatherData, setWeatherData] = useState(null);
    const fetchData = async () => { //fetches data from API
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${localStorage.getItem("lat")}&lon=${localStorage.getItem("lng")}&appid=7924099ca9b82c9a4fc854b7593c65f4`)
            setWeatherData(response.data);
            console.log(response.data); //You can see all the weather data in console log
    } 
        catch (error) { 
            console.error(error);
    }
    };

    useEffect(() => {fetchData(); }, []);


    let temp = 'tempurature(';
    let hum = 'humidity(';
    let vis = 'visibility(';
    let rain = 'precipitation(';
    let win = 'wind speed(';
    let cityname = '';

    if(weatherData !== null){ //ensures that the following code only works when the data is not null 
        cityname = weatherData.city.name;
        if (weatherData.list[0].main.temp > (localStorage.getItem("prefTemp")+ 7)) { //if the tempurature is 7 degrees above preferred temp a recommendation is given
            temp = temp + weatherData.list[0].main.temp + ' °C)' + 'is hot: wear clothing of minimal layers and bring water.';
        }
        else if (weatherData.list[0].main.temp < (localStorage.getItem("prefTemp")- 7)){//if the tempurature is 7 degrees below preferred temp a recommendation is given
            temp = temp + weatherData.list[0].main.temp + ' °C)' + "is cold: wear extra layers of clothing.";
        }
        else{//anywhere in between is fine
            temp = temp+ weatherData.list[0].main.temp + ' °C)' + "is fine.";
        }
    
        if (weatherData.list[0].main.humidity > 50) {//if the humidity is above 50% a recommendation is given
            hum = hum +  weatherData.list[0].main.humidity + '%)'+ ' is high: bring water on your cycling trip!';
        }
        else{
            hum = hum + weatherData.list[0].main.humidity + '%)' + " is fine.";
        }
    
        if (weatherData.list[0].visibility < 1000) {//if the visibility is below 1000km then a recommendation is given
            vis = vis +  weatherData.list[0].visibility + ' m)'+'is low: Applying headlights to your bicycle will help.';
        }
        else{
            vis = vis + weatherData.list[0].visibility + ' m)'+ "is fine.";
        }

        if ((weatherData.list[0].pop * 100) > ((localStorage.getItem("prefPrec") + 7))) { //compares the probabilty of precipitation value with the preferred precipitation + 7
            rain = rain  + (weatherData.list[0].pop * 100) + '%)'+ 'is high: bring an umbrella, ride with extreme caution/take a different mode of transport';
        }
        else{
            rain  = rain  + (weatherData.list[0].pop * 100) + '%)' + "is low.";
        }
    
        if (weatherData.list[0].wind.speed > ((localStorage.getItem("prefWind") + 7))) {//if wind speed is 7 above the preferred wind speed a recommendation is given
            win = win + weatherData.list[0].wind.speed + 'meter/sec)'+ 'is high: ride with caution';
        }
        else{
            win = win + weatherData.list[0].wind.speed + 'meter/sec)' + "is fine.";
        }
    }


    return ( //button #got should link to homepage
        <section id = "recom">
            <p>Essentials for {cityname}</p>
            <ul>
                <li>{temp}</li>
                <li>{hum}</li>
                <li>{vis}</li>
                <li>{rain}</li>
                <li>{win}</li>
            </ul>

            <Link to "/"><button id = "got">Got it</button> </Link>
        </section>
    );
};

export default WeatherEss; 
