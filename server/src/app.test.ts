import { getKnightMoves } from "./helper";

describe("getKnightMoves", () => {
  it("should return the valid moves for a given position", () => {
    const position = { row: 3, column: 4 };
    const expectedMoves = [
      { row: 1, column: 3 },
      { row: 1, column: 5 },
      { row: 2, column: 2 },
      { row: 2, column: 6 },
      { row: 4, column: 2 },
      { row: 4, column: 6 },
      { row: 5, column: 3 },
      { row: 5, column: 5 },
    ];

    const actualMoves = getKnightMoves(position);

    expect(actualMoves).toEqual(expectedMoves);
  });

  it("should return an empty array if there are no valid moves", () => {
    const position = {};
    const expectedMoves: [] = [];

    const actualMoves = getKnightMoves(position);

    expect(actualMoves).toEqual(expectedMoves);
  });
});
