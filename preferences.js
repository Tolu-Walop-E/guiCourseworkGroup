const temperatureSlider = document.getElementById('temperatureSlider');
const temperatureValue = document.getElementById('temperatureValue');
temperatureSlider.addEventListener('input', function() {
    const value = this.value + '°C';
    temperatureValue.innerText = value;
});

const humiditySlider = document.getElementById('humiditySlider');
const humidityValue = document.getElementById('humidityValue');
humiditySlider.addEventListener('input', function() {
    const value = this.value + '%';
    humidityValue.innerText = value;
});

const visibilitySlider = document.getElementById('visibilitySlider');
const visibilityValue = document.getElementById('visibilityValue');
visibilitySlider.addEventListener('input', function() {
    const value = this.value + 'km';
    visibilityValue.innerText = value;
});

const precipitationSlider = document.getElementById('precipitationSlider');
const precipitationValue = document.getElementById('precipitationValue');
precipitationSlider.addEventListener('input', function() {
    const value = this.value + '%';
    precipitationValue.innerText = value;
});

const windSpeedSlider = document.getElementById('windSpeedSlider');
const windSpeedValue = document.getElementById('windSpeedValue');
windSpeedSlider.addEventListener('input', function() {
    const value = this.value + ' knots';
    windSpeedValue.innerText = value;
});

// Save user preferences to localStorage
function savePreferences() {
    localStorage.setItem('temperaturePreference', temperatureSlider.value);
    localStorage.setItem('humidityPreference', humiditySlider.value);
    localStorage.setItem('visibilityPreference', visibilitySlider.value);
    localStorage.setItem('precipitationPreference', precipitationSlider.value);
    localStorage.setItem('windSpeedPreference', windSpeedSlider.value);
}

// Load user preferences from localStorage
function loadPreferences() {
    temperatureSlider.value = localStorage.getItem('temperaturePreference') || 20;
    humiditySlider.value = localStorage.getItem('humidityPreference') || 50;
    visibilitySlider.value = localStorage.getItem('visibilityPreference') || 2.5;
    precipitationSlider.value = localStorage.getItem('precipitationPreference') || 50;
    windSpeedSlider.value = localStorage.getItem('windSpeedPreference') || 15;
}

// Event listener for slider changes
temperatureSlider.addEventListener('input', function() {
    savePreferences();
    // Update display or perform any other necessary actions
});

humiditySlider.addEventListener('input', function() {
    savePreferences();
    // Update display or perform any other necessary actions
});

visibilitySlider.addEventListener('input', function() {
    savePreferences();
    // Update display or perform any other necessary actions
});

precipitationSlider.addEventListener('input', function() {
    savePreferences();
    // Update display or perform any other necessary actions
});

windSpeedSlider.addEventListener('input', function() {
    savePreferences();
    // Update display or perform any other necessary actions
});

// Call loadPreferences when the page loads
window.addEventListener('load', function() {
    loadPreferences();
});

// Retrieve the saved preferred temperature from local storage
const savedTemperature = localStorage.getItem('preferredTemperature');

// Check if the saved temperature exists
if (savedTemperature !== null) {
    // Update the temperature value span with the saved value
    document.getElementById('temperatureValue').innerText = savedTemperature + '°C';
} else {
    // If the saved temperature doesn't exist, set a default value
    document.getElementById('temperatureValue').innerText = '20°C';
}
