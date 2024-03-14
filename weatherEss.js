import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
const WeatherEss = () => {
    const [city, setCity] = useState('london');
    const [weatherData, setWeatherData] = useState(null);
    const fetchData = async () => { 
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7924099ca9b82c9a4fc854b7593c65f4`)
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

    if(weatherData){
        if (weatherData.main.temp > 35) {
            temp = temp + weatherData.main.temp + ')' + 'is hot: wear clothing of minimal layers and bring water.';
        }
        else if (weatherData.main.temp < 15){
            temp = temp + weatherData.main.temp + ')' + "is cold: wear extra layers of clothing.";
        }
        else{
            temp = temp+ weatherData.main.temp + ')' + "is fine.";
        }
    
        if (weatherData.main.humidity > 50) {
            hum = hum +  weatherData.main.humidity + ')'+ ' is high: bring water on your cycling trip!';
        }
        else{
            hum = hum + weatherData.main.humidity + ')' + " is fine.";
        }
    
        if (weatherData.visibility < 1000) {
            vis = vis +  weatherData.visibility + ' m)'+'is low: Applying headlights to your bicycle will help.';
        }
        else{
            vis = vis + weatherData.visibility + ' m)'+ "is fine.";
        }
    
        if (weatherData.rain > 0.28) {
            rain = rain  + weatherData.rain + ')'+ 'is high: bring an umbrella, ride with extreme caution/take a different mode of transport';
        }
        else{
            rain  = rain  + weatherData.rain + ')' + "is low.";
        }
    
        if (weatherData.wind.speed > 20) {
            win = win + weatherData.wind.speed + 'meter/sec)'+ 'is high: ride with caution';
        }
        else{
            win = win + weatherData.wind.speed + 'meter/sec)' + "is fine.";
        }
    }


    return ( 
        <section id = "recom">
            <p>Essentials</p>
            <ul>
                <li>{temp}</li>
                <li>{hum}</li>
                <li>{vis}</li>
                <li>{rain}</li>
                <li>{win}</li>
            </ul>

            <button id = "got">Got it</button>
        </section>
    );
};

export default WeatherEss; 
