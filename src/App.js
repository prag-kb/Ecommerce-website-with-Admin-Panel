import "./App.css";
import React, { useState } from "react";
import  ReactDOM  from "react";

function App() {
  const boardStyle = {
    background: "skyblue",
    margin: 10,
    padding: 20,
  };

  const Board = () => {
    const initialSquares = [
      null,null,null,
      null,null,null,
      null,null,null,
    ];
    const [squares, setSquares] = useState(initialSquares);
    const renderSquare = (i) => {
      return <Square value = {squares[i]} />;
    };


    return (
      <div style={boardStyle}>
        Board
        <div className="board-row">
          {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
        </div>
      </div>
    );
  };

  const Square = (props) => {
   const [value, setValue] = useState(null);

    return <button className="square" onClick={()=>{}}>{props.value}</button>;
  };

  return (
    <>
      <div className="game">
        Game
        <Board />
      </div>
    </>
  );
}

export default App;
