import React from "react";
import Square from "./square";

function Board(props) {
  const renderSquare = i => (
    <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
  );

  return (
    <div>
      <div className="board-row">
        {/* <Square value='1' />
        <Square value='2' />
        <Square value='3' /> */}
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {/* <Square value='4' />
        <Square value='5' />
        <Square value='6' /> */}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {/* <Square value='7' />
        <Square value='8' />
        <Square value='9' /> */}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;