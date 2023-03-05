import React from "react";
import { Button } from "react-bootstrap";
import { Position } from "../types";

// Generate the list of possible moves
export const MoveList: React.FC<{ knightMoves: Position[] }> = ({
  knightMoves,
}) => {
  if (knightMoves.length > 0) {
    return (
      <div>
        <h4 className="text-center">Possible Moves:</h4>
        <ul className="list-group">
          {knightMoves.map((move, index) => (
            <li
              key={index}
              className="list-group-item"
            >{`${move.row}, ${move.column}`}</li>
          ))}
        </ul>
        <Button className="mt-3" variant="primary">
          Reset
        </Button>
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
