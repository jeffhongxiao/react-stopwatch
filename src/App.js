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
    this.timer = this.timer.bind(this);
  }

  timer() {
    this.setState(this.update(this.state, "TICK"));
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  update(model, intent) {
    const updates = {
      TICK: m => {
        if (!this.state.running) {
          return m;
        }
        return Object.assign({}, m, { time: this.state.time + 1 });
      },
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
