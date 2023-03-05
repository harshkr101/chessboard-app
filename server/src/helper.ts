export interface Position {
  row: number;
  column: number;
}

export function getKnightMoves(position: Position): Position[] {
  const row = position.row;
  const column = position.column;
  if (Object.keys(position).length === 0) {
    return [];
  }

  // Check all possible moves for the knight
  const possibleMoves = [
    { row: row - 2, column: column - 1 },
    { row: row - 2, column: column + 1 },
    { row: row - 1, column: column - 2 },
    { row: row - 1, column: column + 2 },
    { row: row + 1, column: column - 2 },
    { row: row + 1, column: column + 2 },
    { row: row + 2, column: column - 1 },
    { row: row + 2, column: column + 1 },
  ];

  // Filter out moves that are outside the board
  const validMoves: Position[] = possibleMoves.filter(
    (move) =>
      move.row >= 0 && move.row <= 7 && move.column >= 0 && move.column <= 7
  );

  return validMoves;
}
