import React from "react";
import Board from "./board";

class Game extends React.Component {
  state = {
    history: [{ squares: Array(9).fill(null) }]
  };

  onClick = i => {
    console.log(i);
  };

  render() {
    return (
      <div>
        <h1>Game Component</h1>
        <Board onClick={this.onClick} squares={this.state.history[0]} />
      </div>
    );
  }
}

export default Game;