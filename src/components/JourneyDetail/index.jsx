import React from "react";
import './style.css';
import BusStop from "../BusStop";

const JourneyDetail = ({journey}) => {
    console.log(journey.stops);

    return(
        <>
        <div className="journey-detail container">
            <h2>Podrobnosti cesty</h2>
            <div className="stops">
                {journey.stops.map((stops => {
                    return(     
                        <BusStop key={stops.code} name={stops.name} station={stops.station} time={stops.time}/>
                    )
                }))}
                
            </div>
        </div>
        </>
    )
}

export default JourneyDetail;