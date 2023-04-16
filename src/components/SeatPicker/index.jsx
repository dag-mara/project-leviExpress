import React from "react";
import './style.css';
import SeatRow from "../SeatRow";

const SeatPicker = ({seats, journeyId, selectedSeat, onSeatSelected}) => {

    return(
        <div className="seat-picker container">
        <h2>Vyberte sedadlo</h2>
        <div className="seats">
        {seats.map((seatRow, index) => {
            return(     
                <SeatRow key={index} row={seatRow} rowSelectedSeat={selectedSeat} onSeatSelected={onSeatSelected}/>
            )
        })}
        </div>
      </div>
    )
}

export default SeatPicker;