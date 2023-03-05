import React from "react";
import { Chessboard } from "./components/Chessboard";
import "./App.css";
const App: React.FC = () => {
  return (
    <div className="main">
      <Chessboard />;
    </div>
  );
};

export default App;
