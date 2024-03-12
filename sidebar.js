import list from "./images/list.png"
import settings from "./images/settings.png"
import clearday from "./images/clear_day.png"
function App() {

return (
    <>
     <table id="sidebar-table">
      <tbody>
        <tr>
          <td id="sidebar-back">
            <img src={list} />
          </td>
        </tr>
        <tr>
          <td className="un"> Log in</td>{" "}
        </tr>
        <tr>
          <td className="chosen"><Buttonn type = "Tempurature"></Buttonn></td>
        </tr>
        <tr>
          <td className="un"><Buttonn type = "Humidity"></Buttonn></td>
        </tr>
        <tr>
          <td className="un"><Buttonn type = "Visibility"></Buttonn></td>
        </tr>
        <tr>
          <td className="un"><Buttonn type = "Precipitation"></Buttonn></td>
        </tr>
        <tr>
          <td className="un"><Buttonn type = "Wind Speed"></Buttonn></td>
        </tr>
        <tr id="sidebar-spacer" />
        <tr>
          <td className="un"><Buttonn type = "Recommendation"></Buttonn>n</td>
        </tr>
        <tr>
          <td className="un"><Buttonn type = "Plan my journey"></Buttonn></td>
        </tr>
        <tr>
          <td className="un"><Buttonn type = "Personalisations"></Buttonn></td>
        </tr>
      </tbody>
    </table>

    <a id="settings" href="settings.html">
      <img src={settings} />
    </a>


    <div id="today">
      <h2>London</h2>
      <h3>18°</h3>
    </div>


    <table id="weekly-sidebar">
      <tbody>
        <tr className="days">
          <td className="day">Monday</td>
          <td className="icon">
            <img src={clearday} />
          </td>
          <td className="unit">20°</td>
        </tr>
        <tr className="spacer" />
        <tr className="days">
          <td className="day">Tuesday</td>
          <td className="icon">
            <img src={clearday} />
          </td>
          <td className="unit">18°</td>
        </tr>
        <tr className="spacer" />
        <tr className="days">
          <td className="day">Wednesday</td>
          <td className="icon">
            <img src={clearday} />
          </td>
          <td className="unit">20°</td>
        </tr>
        <tr className="spacer" />
        <tr className="days">
          <td className="day">Thursday</td>
          <td className="icon">
            <img src={clearday} />
          </td>
          <td className="unit">19°</td>
        </tr>
        <tr className="spacer" />
        <tr className="days">
          <td className="day">Friday</td>
          <td className="icon">
            <img src={clearday} />
          </td>
          <td className="unit">22°</td>
        </tr>
        <tr className="spacer" />
        <tr className="days">
          <td className="day">Saturday</td>
          <td className="icon">
            <img src={clearday} />
          </td>
          <td className="unit">23°</td>
        </tr>
      </tbody>
    </table>
    </>
  );
}

function Buttonn({type}){
  return(
    <>
    <button>{type}</button>
    </>
  );
}

export default App;
