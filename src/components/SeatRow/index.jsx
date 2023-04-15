import React from "react";
import Seat from "../Seat";
import './style.css';


const SeatRow = ({row, rowSelectedSeat}) => {
    
    return (
        <div className="seat-row">
            {row.map((sedadlo =>  {
             
                return(
                    <Seat key={sedadlo.number} number={sedadlo.number} isOccupied={sedadlo.isOccupied} isSelected={sedadlo.number == rowSelectedSeat ? 'true' : 'false'}/>

                )
            }
                
            ))}
        </div>
    )
}

export default SeatRow;