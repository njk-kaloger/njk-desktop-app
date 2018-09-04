import React, { Component } from "react";
import "./components/styles/app.css";

class App extends Component {
  render() {
    return (
      <div className="row">
        <div id="game-container">
          <p className="subtext">Favourite Game</p>
          <h3> No Game Chosen</h3>
        </div>
        <div id="goal-container">
          <p>
            <span id="favourite-game">Game Library</span>
          </p>
        </div>
        <div id="right-container">
          <button id="add-button">Add New Game</button>
        </div>
      </div>
    );
  }
}

export default App;
