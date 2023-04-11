import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';



export const Home = () => {
  const [journey, setJourney] = useState('');

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  }

  return(
  <main>
    <JourneyPicker onJourneyChange={handleJourneyChange}/>
    {journey.journeyId ? 'Nalezeno spojení s Id' + journey.journeyId : ''}
  </main>
  )
  
};
