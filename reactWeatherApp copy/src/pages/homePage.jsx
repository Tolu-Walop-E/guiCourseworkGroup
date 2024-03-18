import React from 'react'
import '../componentStyles/homepage.css'
import setting from '../assets/settingsIcon.png'
import list from '../assets/list.png'
import cday from '../assets/clear_day.png'



function HomePage(){
    return(
        <>
                    <div>
                            <a id = "settings" href = "settings.html"><img src ={setting} id='setting'/></a>
                            <a href="sidebar.html"><img src = {list} id = "sidebar"/></a>
                      
                    </div>

                

                    <div id="today">
                        <p class="today" id="city">London</p>
                        <p class="today" id="temp">18°</p>
                    </div>


                    <table id = "weekly">
                        <tbody>
                            <tr className = "days">
                                <td className = "day">Monday</td>
                                <td className = "icon"><img src = {cday}/></td>
                                <td className = "unit">20°</td>
                            </tr>
                            <tr className = "days">
                                    <td className = "day">Tuesday</td>
                                    <td className = "icon"><img src = {cday}/></td>
                                    <td className = "unit">18°</td>
                            </tr>
                            <tr className = "days">
                                <td className = "day">Wednesday</td>
                                <td className = "icon"><img src = {cday}/></td>
                                <td className = "unit">20°</td>
                            </tr>
                            <tr className = "days">
                                    <td className = "day">Thursday</td>
                                    <td className = "icon"><img src = {cday}/></td>
                                    <td className = "unit">19°</td>
                            </tr>
                            <tr className = "days">
                                    <td className = "day">Friday</td>
                                    <td className = "icon"><img src = {cday}/></td>
                                    <td className = "unit">22°</td>
                            </tr>
                            <tr className = "days">
                                <td className = "day">Saturday</td>
                                <td className = "icon"><img src = {cday}/></td>
                                <td className = "unit">23°</td>
                            </tr>
                        </tbody>
                        
                    </table>
         
        </>
    )
}

export default HomePage