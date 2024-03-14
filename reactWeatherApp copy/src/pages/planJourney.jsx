import React from 'react'
import '../main.css'
import Temperature from '../components/temperature.jsx'

import MapJourney from '../components/mapJourney.jsx'
import MapDirection from '../components/mapDirection.jsx';




const PlanJourney = () => {
    return (
      <>
        <Temperature backVisible={true} />
        <MapJourney />
        <MapDirection />
      </>
    );
  };

export default PlanJourney