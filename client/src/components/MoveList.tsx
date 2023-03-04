import React, { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Position } from "../types";

// Generate the list of possible moves
export const MoveList: React.FC<{ knightPosition: Position }> = ({
  knightPosition,
}) => {
  const [knightMoves, setKnightMoves] = useState<Position[]>([]);

  const getMoves = useCallback(async () => {
    console.log("position", knightPosition);
    const response = await fetch("http://localhost:3001/api/possible-moves", {
      method: "POST",
      body: JSON.stringify(knightPosition),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setKnightMoves(data);
    } else {
      console.error("Unable to fetch data");
    }
  }, [knightPosition]);

  useEffect(() => {
    getMoves();
  }, [getMoves]);

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
