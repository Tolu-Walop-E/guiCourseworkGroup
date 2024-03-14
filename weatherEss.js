import React, { useEffect, useState } from 'react'; import axios from 'axios';
const WeatherEss = () => {
    const [city, setCity] = useState('london');
    const [weatherData, setWeatherData] = useState(null);
    const fetchData = async () => { 
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7924099ca9b82c9a4fc854b7593c65f4`);
            setWeatherData(response.data);
            console.log(response.data); //You can see all the weather data in console log
    } 
        catch (error) { 
            console.error(error);
    }
    };

    useEffect(() => {fetchData(); }, []);

    const handleInputChange = (e) => {
        setCity(e.target.value);
        };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
        };
    let temp = 'tempurature(' + weatherData.main.temp + ')';
    if (weatherData.main.temp > 35) {
        temp = temp + 'is hot: wear clothing of minimal layers and bring water.';
    }
    else if (weatherData.main.temp < 15){
        temp = temp + "is cold: wear extra layers of clothing.";
    }
    else{
        temp = temp + "is fine.";
    }

    let hum = 'humidity(' + weatherData.main.humidity + ')';
    if (weatherData.main.humidity > 50) {
        hum = hum + ' is high: bring water on your cycling trip!';
    }
    else{
        hum = hum + " is fine.";
    }

    let vis = 'visibility(' + weatherData.visibility + ' m)';
    if (weatherData.visibility < 1000) {
        vis = vis + 'is low: Applying headlights to your bicycle will help.';
    }
    else{
        vis = vis + "is fine.";
    }

    let rain = 'precipitation(' + weatherData.rain + ')';
    if (weatherData.rain > 0.28) {
        rain = rain + 'is high: bring an umbrella, ride with extreme caution/take a different mode of transport';
    }
    else{
        rain  = rain + "is low.";
    }

    let win = 'wind speed(' + weatherData.wind.speed + 'meter/sec)';
    if (weatherData.wind.speed > 20) {
        win = win + 'is high: ride with caution';
    }
    else{
        win = win + "is fine.";
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
        </section>
    );
};
export default WeatherEss;       
