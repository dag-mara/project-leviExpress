import React from "react";
import './style.css';
import SeatRow from "../SeatRow";

const SeatPicker = ({seats, journeyId}) => {

    return(
        <div className="seat-picker container">
        <h2>Vyberte sedadlo</h2>
        <div className="seats">
        {seats.map((seatRow, index) => {
            return(     
                <SeatRow key={index} row={seatRow}/>
            )
        })}
        </div>
      </div>
    )
}

export default SeatPicker;