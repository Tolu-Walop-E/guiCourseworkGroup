import "../componentStyles/settings.css"
import { Link } from 'react-router-dom'
function Settings(){

    const handleLeftButtonClick = () => {
        localStorage.setItem("sideBarLocation","left");
    };

    const handleRightButtonClick = () => {
        localStorage.setItem("sideBarLocation","right");
    };

    return (
        <div className="container">
            <div className="back-button"> <Link to = "/">Back</Link></div>
            <h2 className="heading">Brightness</h2>
            <input type="range" min="0" max="100" value="50" className="brightness-slider"></input>
            <h2 className="heading">Sidebar Placement</h2>
            <div className="sidebar-buttons">
                <Link to = "/">
               
                    <button className="sidebar-button" onClick={handleLeftButtonClick}>Left</button>
                    
                    <button className="sidebar-button" onClick={handleRightButtonClick}>Right</button>
                </Link> 
            </div>
            <Link to = "/editlocation">
            <button className="edit-location-button">
                
                Edit Location
               
                </button>
                </Link>
            <button className="logout-button">Logout</button>
        </div>
    );
}

export default Settings;
