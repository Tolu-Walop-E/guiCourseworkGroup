import { useState } from 'react';
import '../componentStyles/preferences.css'

function storeFunction(temperature, humidity, visibility, precipitation, windSpeed) {
    localStorage.setItem("prefTemp", temperature);
    localStorage.setItem("prefHum", humidity);
    localStorage.setItem("prefVis", visibility);
    localStorage.setItem("prefPrec", precipitation);
    localStorage.setItem("prefWind", windSpeed);
}

function DisplayStuff() {
    const temperaturePreference = localStorage.getItem('prefTemp');
    const humidityPreference = localStorage.getItem('prefHum');
    const visibilityPreference = localStorage.getItem('prefVis');
    const precipitationPreference = localStorage.getItem('prefPrec');
    const windSpeedPreference = localStorage.getItem('prefWind');

    return (
        <>
            <h1>{temperaturePreference}</h1>
            <h1>{humidityPreference}</h1>
            <h1>{visibilityPreference}</h1>
            <h1>{precipitationPreference}</h1>
            <h1>{windSpeedPreference}</h1>
        </>
    );
}

function Preferences() {
    const [temperature, setTemperature] = useState(20);
    const [humidity, setHumidity] = useState(50);
    const [visibility, setVisibility] = useState(2.5);
    const [precipitation, setPrecipitation] = useState(50);
    const [windSpeed, setWindSpeed] = useState(15);
    const [displayValues, setDisplayValues] = useState(false);

    const handleSavePreferences = () => {
        storeFunction(temperature, humidity, visibility, precipitation, windSpeed);
        setDisplayValues(true);
    };

    return (
        <div className="container">
            <h1 className="page-title">User Preferences</h1>
            <a href="#" className="back-button">Back</a>
            <p>
                <button className="save-button" onClick={handleSavePreferences}>Save/Edit Preferences</button>
            </p>

            {displayValues && <DisplayStuff />}

            <h2 className="title">Preferred Temperature: <span className="slider-value">{temperature}°C</span></h2>
            <div className="slider-container">
                <input
                    type="range"
                    min="0"
                    max="40"
                    value={temperature}
                    className="slider"
                    id="temperatureValue"
                    onChange={(e) => setTemperature(e.target.value)}
                />
            </div>

            <h2 className="title">Preferred Humidity: <span className="slider-value">{humidity}%</span></h2>
            <div className="slider-container">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={humidity}
                    className="slider"
                    id="humidityValue"
                    onChange={(e) => setHumidity(e.target.value)}
                />
            </div>

            <h2 className="title">Preferred Visibility: <span className="slider-value">{visibility}%</span></h2>
            <div className="slider-container">
                <input
                    type="range"
                    min="0"
                    max="5"
                    value={visibility}
                    className="slider"
                    id="visibilityValue"
                    onChange={(e) => setVisibility(e.target.value)}
                />
            </div>

            <h2 className="title">Preferred Precipitation: <span className="slider-value">{precipitation}%</span></h2>
            <div className="slider-container">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={precipitation}
                    className="slider"
                    id="precipitationValue"
                    onChange={(e) => setPrecipitation(e.target.value)}
                />
            </div>

            <h2 className="title">Preferred Wind Speed: <span className="slider-value">{windSpeed}%</span></h2>
            <div className="slider-container">
                <input
                    type="range"
                    min="0"
                    max="30"
                    value={windSpeed}
                    className="slider"
                    id="windSpeedValue"
                    onChange={(e) => setWindSpeed(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Preferences;
