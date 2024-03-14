import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LoginPage from "./pages/loginPage.jsx";
import PlanJourney from "./pages/planJourney.jsx";
import HomePage from "./pages/homePage.jsx";
import EditLocation from "./pages/editLocation.jsx";
import Weather from "./components/weather.jsx";
import SettingPage from "./pages/settingsPage.jsx";
import AnalyticsPage from "./pages/analyticsPage.jsx";
import Preferences from "./components/preferences.jsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route path="/journey" element={<PlanJourney />} />
                <Route path="/editlocation" element={<EditLocation />} />
                <Route path="/settings" element={<SettingPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/preferences" element={<Preferences />} />

            </Routes>
        </Router>
    );
}
 
export default App;