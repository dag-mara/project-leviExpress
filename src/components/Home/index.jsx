import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JourneyPicker } from '../JourneyPicker';
import JourneyDetail from '../JourneyDetail';
import './style.css';
import SeatPicker from '../SeatPicker';


export const Home = () => {
  const [journey, setJourney] = useState(''); 
  const [userSeat, setUserSeat] = useState('');
  
  const handleJourneyChange = (journey) => {
    setJourney(journey);
  }
  const navigate = useNavigate();

  const handleBuy = () => {
     fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          seat: userSeat,
          journeyId: journey.journeyId,
        }),
      })
      .then(response => response.json())
      .then(data => 
        navigate(`/reservation/${data?.results.reservationId}`)
      )
  }

  return(
  <main>
    <JourneyPicker onJourneyChange={handleJourneyChange}/>
    {journey? 
    <>
      <JourneyDetail journey={journey}/> 
      <SeatPicker journeyId={journey.journeyId} seats={journey.seats} selectedSeat={userSeat} onSeatSelected={setUserSeat}/>
      <div className="controls container">
        <button className="btn btn--big" type="button" onClick={handleBuy}>Rezervovat</button>
      </div>
    </>
    : ''}

  </main>
  )
  
};
