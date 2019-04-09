import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    let model = {
      time: 0
    };

    const view = model => {
      return (
        <div>
          <div>{model.time}</div>
        </div>
      );
    };

    return view(model);
  }
}

export default App;
