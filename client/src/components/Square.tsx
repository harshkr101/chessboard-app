import React from "react";

export const Square: React.FC<{
  row: number;
  column: number;
  isKnightHere: boolean;
  handleClick: (row: number, column: number) => void;
}> = ({ row, column, isKnightHere, handleClick }) => {
  // Determine the square's color
  const color = (row + column) % 2 === 0 ? "white" : "dark";
  // Determine the square's label
  const label = `${String.fromCharCode(97 + column)}${8 - row}`;

  return (
    <div className={`square ${color}`} onClick={() => handleClick(row, column)}>
      <div className="label">{label}</div>
      {isKnightHere && <div className="knight" />}
    </div>
  );
};
