import React from 'react'
import '../main.css'
import SideBar from '../components/sideBar.jsx'
import Temperature from '../components/temperature.jsx'
import DayForecast from '../components/daysSection.jsx'


function HomePage(){
    return(
        <>
            
            <Temperature backVisible={false} />
            <DayForecast />
            
        </>
    )
}

export default HomePage