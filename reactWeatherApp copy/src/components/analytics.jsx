import "../componentStyles/analytics.css"
function Analytics() {
    

    // Use the preferences to calculate and display analytics
    // Example: document.getElementById('analyticsElement').innerText = `The temperature is ${temperaturePreference}°C, x°C higher than your preference`;


// Call loadPreferencesForAnalytics when the page loads

    const temperaturePreference = localStorage.getItem('prefTemp');
    const humidityPreference = localStorage.getItem('prefHum');
    const visibilityPreference = localStorage.getItem('prefVis');
    const precipitationPreference = localStorage.getItem('prefPrec');
    const windSpeedPreference = localStorage.getItem('prefWind');

   


    return(
        <div className="mainContainer">
        <h1 className="title">
            User Preferences
        </h1>

        <div className="analytics" id="temperature">
            <hgroup>
                <h5>
                    Temperature
                    
                </h5>
                
            </hgroup>
            <p>The temperature is {temperaturePreference}°C, x°C higher than your preference</p>
        </div>

        <div className="analytics" id="humidity">
            <hgroup>
                <h5>
                    Humidity
                </h5>
                
            </hgroup>
            
            <p>The humidity is {humidityPreference}%, x% higher than your preference</p>
        </div>

        <div className="analytics" id="visibility">
            <hgroup>
                <h5>
                    Humidity
                </h5>
            </hgroup>
           
            <p>The visibility is {visibilityPreference}%, x% higher than your preference</p>
        </div>


        <div className="analytics" id="precipitation">
            <hgroup>
                <h5>
                    Precipitation
                </h5>
            </hgroup>
            
            <p>The precipitation is {precipitationPreference}%, x% higher than your preference</p>
        </div>


        <div className="analytics" id="wind-speed">
            <hgroup>
                <h5>
                    Wind Speed
                </h5>
                
            </hgroup>
            
            <p>The wind speed is {windSpeedPreference}knots, xknots higher than your preference</p>
        </div>
        </div>
    
    )
}
export default Analytics