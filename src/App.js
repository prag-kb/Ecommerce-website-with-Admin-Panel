import "./App.css";

function App() {
  const boardStyle = {
    background: "skyblue",
    margin: 10,
    padding: 20,
  };

  const gameStyles = {
    background: "salmon",
    margin: 10,
    padding: 20,
  };
  const squareStyle = {
    background: "gold",
    margin: 10,
    padding: 20,
  };

  const Board = () => {
    return (
      <div style={boardStyle}>
        Board
        <div className="board-row">
        <Square /> <Square /> <Square />
        </div>
        <div className="board-row">
        <Square /> <Square /> <Square />
        </div>
        <div className="board-row">
        <Square /> <Square /> <Square />
        </div>
      </div>
    );
  };

  const Square = () => {
    return <div style={squareStyle}>Square</div>;
  };



  return (
    <>
      <div className="game" style={gameStyles}>
        Game
        <Board />
      </div>
    </>
  );
}

export default App;
