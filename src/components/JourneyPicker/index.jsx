import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import './style.css';


const CityOptions = ({cities}) => (
    <>
    <option value="">Vyberte</option>
    {cities.map((city => 
        <option value={city.code} key={city.code}>{city.name}</option>
    ))}
    </>
  )

const DatesOptions = ({dates}) => {
  return(
    <>
    <option value="">Vyberte</option>
    {dates.map((date => 
      <option value={date.dateBasic} key={date.dateBasic}>{date.dateCs}</option>
      ))}
    </>
  )
}

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [data, setData] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([])

  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
    .then(response => response.json())
    .then(data => setCities(data.results))

    fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates')
    .then(response => response.json())
    .then(data => setDates(data.results))
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${data}`)
    .then(response =>response.json())
    .then(data => onJourneyChange(data.results));    
  }

  return (
  <div className="journey-picker container">
    <h2 className="journey-picker__head">Kam chcete jet?</h2>
    <div className="journey-picker__body">
      <form className="journey-picker__form" onSubmit={handleSubmit}>
        <label>
          <div className="journey-picker__label">Odkud:</div>
          <select value={fromCity} onChange={(e) => {setFromCity(e.target.value)}}>
            <CityOptions cities={cities}/>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Kam:</div>
          <select value={toCity} onChange={(e) => {setToCity(e.target.value)}}>
            <CityOptions cities={cities}/>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Datum:</div>
          <select value={data} onChange={(e) => {setData(e.target.value)}}>
            <DatesOptions dates={dates}/>
          </select>
        </label>
        <div className="journey-picker__controls">
          <button 
            className="btn" 
            type="submit"
            disabled={!data || !fromCity || !toCity}
          > 
            Vyhledat spoj
          </button>
        </div>
      </form>
      <img className="journey-picker__map" src={mapImage} />
    </div>
  </div>
)};
