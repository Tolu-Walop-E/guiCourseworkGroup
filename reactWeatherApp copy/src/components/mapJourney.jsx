import '../componentStyles/mapJourney.css'


function MapJourney(){
    return(
        <>
        <div className="buttonFields">
            <div className = "fromButton">
                <input type='text'></input>
            </div>

            <h2>to</h2>

            <div className = "toButton">
                <input type='text'></input>
            </div>

        </div>

        </>
    )
}


export default MapJourney