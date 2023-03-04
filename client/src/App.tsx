import React from "react";
import { Container } from "react-bootstrap";
import { Chessboard } from "./components/Chessboard";
import "./App.css";
const App = () => {
  return (
    <Container>
      <Chessboard />
    </Container>
  );
};

export default App;
