import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Square } from "./Square";
import { MoveList } from "./MoveList";
import { Position } from "../types";
export const Chessboard: React.FC = () => {
  const [knightPosition, setKnightPosition] = useState<Position>({
    row: 0,
    column: 0,
  });

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
      <Row className="justify-content-center">
        <Col xs={8}>
          <div className="chessboard">{squares}</div>
        </Col>
        <Col xs={4}>
          <MoveList knightPosition={knightPosition} />
        </Col>
      </Row>
    </Container>
  );
};
