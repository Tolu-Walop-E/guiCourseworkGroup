



import { useEffect, useState } from 'react';
import '../componentStyles/daySection.css';
import SideBar from './sideBar';
let weatherImageArray = ["src/assets/sunnyIcon.png", "src/assets/rainCloudIcon.png", "src/assets/thunderStormIcon.png","src/assets/snowIcon.png"];
let temp5Days = []
let weather5Days = []
function DayForecast() {
    const [sidebarPlacement, setSidebarPlacement] = useState('left');
    const [weather,setWeatherData] = useState('')

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${localStorage.getItem("lat")}&lon=${localStorage.getItem("lng")}&units=metric&appid=676c8f55887ff53de91526c6cb291563`);
            const data = await response.json();
            setWeatherData(data);
            for (let i=0;i<5;i++){
                temp5Days[i] = Number(Math.round(data.list[i].main.temp_min))
                weather5Days[i] = String(data.list[i].weather[0].main)
            }
            
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const getWeatherIcon = (iconCode) => {
        return `http://openweathermap.org/img/wn/${iconCode}.png`;
    };

    
    return (
        <>
            <SideBar placement={localStorage.getItem("sideBarLocation")} />
            <table id="weekly">
                <tbody>
                    {weather && weather.list && (
                        <>
                        <tr className="days">
                            <td className="day">Monday</td>
                            <td className="icon">
                                <img src={getWeatherIcon(weather.list[0].weather[0].icon)} alt="Weather Icon" />
                            </td>
                            <td className="unit">{temp5Days[0]}°</td>
                        </tr>

                        <tr className="days">
                            <td className="day">Tuesday</td>
                            <td className="icon">
                                <img src={getWeatherIcon(weather.list[1].weather[0].icon)} alt="Weather Icon" />
                            </td>
                            <td className="unit">{temp5Days[1]}°</td>
                        </tr>

                        <tr className="days">
                            <td className="day">Wednesday</td>
                            <td className="icon">
                                <img src={getWeatherIcon(weather.list[2].weather[0].icon)} alt="Weather Icon" />
                            </td>
                            <td className="unit">{temp5Days[2]}°</td>
                        </tr>

                        <tr className="days">
                            <td className="day">Thursday</td>
                            <td className="icon">
                                <img src={getWeatherIcon(weather.list[3].weather[0].icon)} alt="Weather Icon" />
                            </td>
                            <td className="unit">{temp5Days[3]}°</td>
                        </tr>

                        <tr className="days">
                            <td className="day">Friday</td>
                            <td className="icon">
                                <img src={getWeatherIcon(weather.list[4].weather[0].icon)} alt="Weather Icon" />
                            </td>
                            <td className="unit">{temp5Days[4]}°</td>
                        </tr>
                    </>
                        
                    )}
                </tbody>
            </table>
        </>
    );
                    }    
export default DayForecast;

