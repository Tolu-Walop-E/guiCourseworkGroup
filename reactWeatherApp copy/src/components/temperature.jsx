
import '../componentStyles/temperature.css'
import { Link } from 'react-router-dom'
function Temperature({backVisible}){
    return(
        <>
        {backVisible && 
        <h2 id = "backButton">
            <Link to = "/" className='linkStyle'>Back</Link>
            </h2>}
            <div className = "temperatureLocation">
                <h2 id = "city">{localStorage.getItem("location")}</h2>
                <div className='temperatureIcon'>
                    <h1 id ="degrees">{}</h1>
                    
                </div>
            </div>


        </>
    )
}


export default Temperature