import React, { useEffect, useState } from 'react'; 
import axios from 'axios';

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");


b1.addEventListener("click", temp);
b2.addEventListener("click", humi);
b3.addEventListener("click", visi);
b4.addEventListener("click", prec);
b5.addEventListener("click", wind);

mainnum = document.getElementById("temp");


function temp(e){
    e.preventDefault();

    const [weatherData, setWeatherData] = useState(null);


    const fetchData = async () => { 
        try {
            const response = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5173f9626f9dfc5c68c17ce08da989cb`
            );

            setWeatherData(response.data);
            console.log(response.data); //You can see all the weather data in console log
        } 

        catch (error) { 
            console.error(error);
        }
    };

    useEffect(() => {fetchData(); }, []);

    mainnum = weatherData.main.temp

}