import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      time: 0
    };

    this.update = this.update.bind(this);
  }

  update(model, intent) {
    console.log("intent = ", intent);
    const updates = {
      STOP: m => {
        return Object.assign({}, m, { running: false });
      },
      START: m => {
        return Object.assign({}, m, { running: true });
      }
    };
    return updates[intent](model);
  }

  render() {
    const view = model => {
      let minutes = Math.floor(model.time / 60);
      let seconds = model.time % 60;
      let secondsFormatted = `${seconds < 10 ? "0" : ""}${seconds}`;

      let handler = event => {
        this.setState(this.update(model, model.running ? "STOP" : "START"));
      };

      return (
        <div>
          <div>
            {minutes}:{secondsFormatted}
          </div>
          <button onClick={handler}>{model.running ? "Stop" : "Start"}</button>
        </div>
      );
    };

    return view(this.state);
  }
}

export default App;
