import React, { useState } from 'react';
import "../componentStyles/editLocation.css";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { fromAddress } from "react-geocode";
import { Link } from 'react-router-dom';


const API_KEY = "AIzaSyBpy6xuAn2y5B1eO3J1kfqg6yHDvzxufsU";
const DEFAULT_CENTER = { lat: 22.54992, lng: 0 };

function EditLocationComponent({ onLocationChange }) {
    const [address, setAddress] = useState('');
    const [mapCenter, setMapCenter] = useState(DEFAULT_CENTER);

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
        localStorage.setItem("location",event.target.value)
    };

    const handleSetLocation = () => {
        // Perform address validation here
        if (address.trim() === '') {
            console.error('Please enter a valid address');
            return;
        }
    
        fromAddress(address, API_KEY)
        .then(({ results }) => {
            const { lat, lng } = results[0].geometry.location;
            localStorage.setItem("lat", JSON.stringify(lat)); // Corrected line
            localStorage.setItem("lng", JSON.stringify(lng)); // Corrected line
            setMapCenter({ lat, lng });
            onLocationChange({ lat, lng });
            localStorage.setItem("location", address);
        })
        .catch(error => console.error('Error geocoding address:', error));
    }

    return (
        <section>
            
            <div>
                <Link to = "/">
            <p className='backButton'>Back</p>
            </Link>
                <APIProvider apiKey={API_KEY}>
                    <Map className='map'
                        center={mapCenter}
                        defaultZoom={20}
                        gestureHandling={'greedy'}
                        disableDefaultUI={true}
                    />
                </APIProvider>
            </div>

            <div id="d2">
                <p id="location">Location</p>
                <input type="text" id="b1" value={address} onChange={handleAddressChange} />
                <button id="b3" type="submit" onClick={handleSetLocation}>Set Location</button>
            </div>
        </section>
    );
}

export default EditLocationComponent;
