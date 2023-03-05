import express, { Response, Request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(helmet());

interface Position {
  row: number;
  column: number;
}

function getKnightMoves(position: Position): Position[] {
  // const moves: Position[] = [];

  const row = position.row;
  const column = position.column;

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

app.post("/api/possible-moves", (req: Request, res: Response) => {
  const position: Position = req.body;
  if (position === undefined || position === null) {
    res.send(400).end();
  }
  const validMoves = getKnightMoves(position);
  res.status(200).json(validMoves);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
