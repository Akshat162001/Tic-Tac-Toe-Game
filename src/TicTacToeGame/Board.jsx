import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();
  const isDraw = state.every((value) => value !== null);

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  
    return (
      <div className="board-container">
        {isWinner ? (
          <>
            {isWinner} won the game{" "}
            <button onClick={handleReset}  style={{
              borderRadius: '5px', // Adjust the value as needed
              backgroundColor: '#2196f3',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              fontSize:'18px',
               
               
            }}>Play Again</button>
          </>
        ) : isDraw ? ( // If it's a draw
          <>
            <h4><u>Game Over: It's a Draw!</u></h4>
            <button onClick={handleReset}  style={{
              borderRadius: '5px', // Adjust the value as needed
              backgroundColor: '#2196f3',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              fontSize:'20px',
               
               
            }}>Play Again</button>
          </>
        ) : (
        <>
          <h4><u>Player {isXTurn ? "X" : "O"} Please Move</u></h4>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
