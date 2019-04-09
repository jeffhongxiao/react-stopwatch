import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    let model = {
      time: 0
    };

    const view = model => {
      let minutes = Math.floor(model.time / 60);
      let seconds = model.time % 60;
      let secondsFormatted = `${seconds < 10 ? "0" : ""}${seconds}`;
      return (
        <div>
          <div>
            {minutes}:{secondsFormatted}
          </div>
          <button onClick={console.log}>Button</button>
        </div>
      );
    };

    return view(model);
  }
}

export default App;
