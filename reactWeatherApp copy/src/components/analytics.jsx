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

    let intTemp = parseInt(localStorage.getItem("tempToday"))
    let intTempPref = parseInt(temperaturePreference)
    let higherTemp =  intTemp - intTempPref
    let higherLowerTemp = "higher"
    if (higherTemp < 0 ){
        higherLowerTemp = "lower"
        higherTemp = higherTemp * -1
    }


    let intHumi = parseInt(localStorage.getItem("humToday"))
    let intHumPref = parseInt(humidityPreference)
    let higherHum =  intHumi - intHumPref
    let higherLowerHum = "higher"
    if (higherHum < 0 ){
        higherLowerHum = "lower"
        higherHum = higherHum * -1
    }


    let intVisi = parseInt(localStorage.getItem("visToday"))
    let intVisPref = parseInt(visibilityPreference)
    let higherVis =  intVisi - intVisPref
    let higherLowerVis = "higher"
    if (higherVis < 0 ){
        higherLowerVis = "lower"
        higherVis = higherVis * -1
    }


    let intPrec = parseInt(localStorage.getItem("precToday"))
    let intPrecPref = parseInt(precipitationPreference)
    let higherPrec =  intPrec - intPrecPref
    let higherLowerPrec = "higher"
    if (higherPrec < 0 ){
        higherLowerPrec = "lower"
        higherPrec = higherPrec * -1
    }

    let intWind = parseInt(localStorage.getItem("windToday"))
    let intWindPref = parseInt(windSpeedPreference)
    let higherWind =  intWind - intWindPref
    let higherLowerWind = "higher"
    if (higherWind < 0 ){
        higherLowerWind = "lower"
        higherWind = higherWind * -1
    }




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
            <p>The temperature is {intTemp}°C, <span style={{ color: 'yellow' }}>{higherTemp}°C {higherLowerTemp}</span>than your preference</p>
        </div>

        <div className="analytics" id="humidity">
            <hgroup>
                <h5>
                    Humidity
                </h5>
                
            </hgroup>
            
            <p>The Humidity is {intHumi}%, <span style={{ color: 'yellow' }}>{higherHum}% {higherLowerHum} </span>than your preference</p>
        </div>

        <div className="analytics" id="visibility">
            <hgroup>
                <h5>
                    Humidity
                </h5>
            </hgroup>
           
            <p>The Visibility is {intVisi/1000}km, <span style={{ color: 'yellow' }}>{higherVis/1000}km {higherLowerVis}</span> than your preference</p>
        </div>


        <div className="analytics" id="precipitation">
            <hgroup>
                <h5>
                    Precipitation
                </h5>
            </hgroup>
            <p>The Precipitation is {intPrec}%, <span style={{ color: 'yellow' }}>{higherPrec}% {higherLowerPrec} </span>than your preference</p>
            
            
        </div>


        <div className="analytics" id="wind-speed">
            <hgroup>
                <h5>
                    Wind Speed
                </h5>
                
            </hgroup>
            <p>The Wind Speed is {intWind}knots, <span style={{ color: 'yellow' }}>{higherWind}knots {higherLowerWind} </span> than your preference</p>
        </div>
        </div>
    
    )
}
export default Analytics