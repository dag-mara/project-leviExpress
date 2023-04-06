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

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [data, setData] = useState('');
  const [cities, setCities] = useState([]);
  

  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
    .then(response => response.json())
    .then(data => setCities(data.results));
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Odesílám formulář s cestou z města ' + fromCity + ' do města ' + toCity + ' na termín ' + data);
  }

  return (
  <div className="journey-picker container">
    <h2 className="journey-picker__head">Kam chcete jet?</h2>
    <div className="journey-picker__body">
      <form className="journey-picker__form" onSubmit={handleSubmit}>
        <label>
          <div className="journey-picker__label">Odkud:</div>
          <select value={fromCity} onChange={(e) => {setFromCity(e.target.value)}}>
            {/* <option value="">Vyberte</option>
            <option value="mesto01">Město 01</option>
            <option value="mesto02">Město 02</option>
            <option value="mesto03">Město 03</option>
            <option value="mesto04">Město 04</option>
            <option value="mesto05">Město 05</option> */}
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
            <option value="">Vyberte</option>
            <option value="datum01">Datum 01</option>
            <option value="datum02">Datum 02</option>
            <option value="datum03">Datum 03</option>
            <option value="datum04">Datum 04</option>
            <option value="datum05">Datum 05</option>
          </select>
        </label>
        <div className="journey-picker__controls">
          <button 
            className="btn" 
            type="submit"
          > 
            Vyhledat spoj
          </button>
        </div>
      </form>
      <img className="journey-picker__map" src={mapImage} />
    </div>
  </div>
)};
