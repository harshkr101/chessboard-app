import React, { useState, useCallback, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Square } from "./Square";
import { MoveList } from "./MoveList";
import { Position } from "../types";

export const Chessboard: React.FC = () => {
  const [knightPosition, setKnightPosition] = useState<Position>({
    row: 0,
    column: 0,
  });
  const [knightMoves, setKnightMoves] = useState<Position[]>([]);

  useEffect(() => {
    const getMoves = async () => {
      console.log(knightPosition);
      const response = await fetch("http://localhost:3001/api/possible-moves", {
        method: "POST",
        body: JSON.stringify({
          row: 2,
          column: 2,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setKnightMoves(data);
      } else {
        console.error("Unable to fetch data");
      }
    };
    getMoves();
  }, [knightPosition]);

  // Function to handle clicks on the chessboard
  const handleClick = (row: number, column: number): void => {
    setKnightPosition({ row, column });
  };

  // Generate the chessboard squares
  const squares = [];

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      const isKnightHere =
        knightPosition.row === row && knightPosition.column === column;

      squares.push(
        <Square
          key={`${row},${column}`}
          row={row}
          column={column}
          isKnightHere={isKnightHere}
          handleClick={handleClick}
        />
      );
    }
  }

  return (
    <Container className="mt-3">
      <h1 className="text-center">Knight Moves</h1>
      <p className="text-center">Select the Knight starting position:</p>
      <p>
        Current Position:{knightPosition.row},{knightPosition.column}
      </p>
      <Row className="justify-content-center">
        <Col xs={8}>
          <div className="chessboard">{squares}</div>
        </Col>

        <Col xs={4}>
          <MoveList knightMoves={knightMoves} />
        </Col>
      </Row>
    </Container>
  );
};
