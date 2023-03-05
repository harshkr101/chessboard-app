import React, { useState, useCallback, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Square } from "./Square";
import { MoveList } from "./MoveList";
import { Position } from "../types";

export const Chessboard: React.FC = () => {
  const [knightPosition, setKnightPosition] = useState<Position>({
    row: 0,
    column: 0,
  });
  const [knightMoves, setKnightMoves] = useState<Position[]>([]);

  const getMoves = useCallback(async () => {
    console.log(knightPosition);
    const response = await fetch("http://localhost:3001/api/possible-moves", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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

  // Function to handle clicks on the chessboard
  const setPosition = (row: number, column: number): void => {
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
          handleClick={setPosition}
        />
      );
    }
  }

  return (
    <Container className="mt-3">
      <div className="info">
        <h1 className="text-center">Knight Moves</h1>
        <p className="text-center">Select the Knight starting position</p>
      </div>

      <Row className="justify-content-center flex">
        <Col xs={8}>
          <div className="chessboard">{squares}</div>
        </Col>

        <Col xs={4}>
          <MoveList knightMoves={knightMoves} />
          <div className="btn-wrapper">
            <Button
              className="btn btn-primary m-1"
              onClick={() => setPosition(0, 0)}
            >
              Reset
            </Button>
          </div>
        </Col>
      </Row>
      <div className="current-position">
        <p>Current Position:</p>
        <p>
          Row: {knightPosition.row}, Column: {knightPosition.column}
        </p>
      </div>
    </Container>
  );
};
