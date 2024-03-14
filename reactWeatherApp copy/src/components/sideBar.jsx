import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../componentStyles/sideBar.css'
import Settings from './settings';

function SideBar({placement,placementChange}){
    const [show, setShow] = useState(false);

    return(
        <>
            <div>
                <Link to ="/settings">
                <img className= {`settingsIcon ${placement}`} src = "src/assets/settingsIcon.png"></img>
                </Link>
            </div>

            <div className={`sidebarClass ${placement}`}>
                <table id="display">
                    <tbody>
                    <tr>
                        <th>

                            <img src="src/assets/list.svg" alt="list-icon" onMouseOver={() => setShow(true)}>
                                
                            </img>
                        </th>
                    </tr>
                    {show && 
                        <div>
                            <tr>
                                <td>
                                    <Link to ="/login" className='linkStyle'>Login</Link>
                                    </td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                            </tr>                       
                            <tr>
                                <td>*gap here*</td>
                            </tr>
                            <tr>
                                <td>Recommendation</td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to = "/journey" className='linkStyle'>Plan My Journey</Link>
                                    </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to = "/editlocation" className='linkStyle'>Personalisation</Link>
                                    </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to = "/preferences" className='linkStyle'>Preferences</Link>
                                    </td>
                            </tr>
                            </div>
                    }
                    </tbody>
                </table>
        </div>
        </>
    );
}

export default SideBar;
