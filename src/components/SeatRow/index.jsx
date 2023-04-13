import React from "react";
import Seat from "../Seat";
import './style.css';


const SeatRow = ({row}) => {
    return (
        <div className="seat-row">
            {row.map((sedadlo => 
                <Seat key={sedadlo.number} number={sedadlo.number} isOccupied={sedadlo.isOccupied}/>
            ))}
        </div>
    )
}

export default SeatRow;