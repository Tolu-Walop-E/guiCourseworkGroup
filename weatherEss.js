import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
const WeatherEss = () => {
    const [city, setCity] = useState('london');
    const [weatherData, setWeatherData] = useState(null);
    const fetchData = async () => { //fetches data from API
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=7924099ca9b82c9a4fc854b7593c65f4`)
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
    let b;
    let x;

    if(weatherData){ //ensures that the following code only works when the data is not null 
        if (weatherData.list[0].main.temp > 35) { //if the tempurature is above 35 degrees celsius a recommendation is given
            temp = temp + weatherData.list[0].main.temp + ')' + 'is hot: wear clothing of minimal layers and bring water.';
        }
        else if (weatherData.list[0].main.temp < 15){//if the tempurature is above 35 degrees celsius a recommendation is given
            temp = temp + weatherData.list[0].main.temp + ')' + "is cold: wear extra layers of clothing.";
        }
        else{//anywhere in between is fine
            temp = temp+ weatherData.list[0].main.temp + ')' + "is fine.";
        }
    
        if (weatherData.list[0].main.humidity > 50) {//if the humidity is above 50% a recommendation is given
            hum = hum +  weatherData.list[0].main.humidity + ')'+ ' is high: bring water on your cycling trip!';
        }
        else{
            hum = hum + weatherData.list[0].main.humidity + ')' + " is fine.";
        }
    
        if (weatherData.list[0].visibility < 1000) {//if the visibility is below 1000km then a recommendation is given
            vis = vis +  weatherData.list[0].visibility + ' m)'+'is low: Applying headlights to your bicycle will help.';
        }
        else{
            vis = vis + weatherData.list[0].visibility + ' m)'+ "is fine.";
        }
        x = weatherData.list[0].rain; //takes the rain object, the value 3h cant be called directly as it starts with a number
        b = Object.values(x);//takes all the object values into an array, the value in '3h' is index[0]
        if (b[0] > 0.7) { //compares the 3h value with a relative high value for mm rainfall/3h
            rain = rain  + b[0] + ' mm rainfall/3h)'+ 'is high: bring an umbrella, ride with extreme caution/take a different mode of transport';
        }
        else{
            rain  = rain  + b[0] + ' mm rainfall/3h)' + "is low.";
        }
    
        if (weatherData.list[0].wind.speed > 20) {//if wind speed is above 20 m/s a recommendation is given
            win = win + weatherData.list[0].wind.speed + 'meter/sec)'+ 'is high: ride with caution';
        }
        else{
            win = win + weatherData.list[0].wind.speed + 'meter/sec)' + "is fine.";
        }
    }


    return ( //button #got should link to homepage
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
