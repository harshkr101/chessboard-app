import React from "react";
import { Position } from "../types";

// Generate the list of possible moves
export const MoveList: React.FC<{
  knightMoves: Position[];
}> = ({ knightMoves }) => {
  if (knightMoves.length > 0) {
    return (
      <div className="move-list">
        <h4 className="text-center">Possible Moves:</h4>
        <ul className="list-group">
          {knightMoves.map((move, index) => (
            <li key={index} className="list-group-item">
              Row: {`${move.row}`}, Column: {`${move.column}`}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h3>No possible move</h3>
      </div>
    );
  }
};
