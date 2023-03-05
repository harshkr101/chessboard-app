import express, { Response, Request } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import { Position, getKnightMoves } from "./helper";

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(helmet());

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
