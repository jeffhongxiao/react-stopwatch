import React, { Component } from "react";
import "./App.css";
import container from "./store";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = container.getState();

    container.subscribe(this.render);
    this.timer = this.timer.bind(this);
  }

  timer() {
    // this.setState(this.update(this.state, "TICK"));

    // container.dispatch({type: 'TICK'});
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const view = model => {
      let minutes = Math.floor(model.time / 60);
      let seconds = model.time % 60;
      let secondsFormatted = `${seconds < 10 ? "0" : ""}${seconds}`;

      let handler = event => {
        container.dispatch(container.getState().running ? {type: 'Stop'} : {type: 'Start'});
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
