import { createStore } from "redux";

function update(model = { running: false, time: 0 }, action) {
  console.log(action.type);

  const updates = {
    TICK: m => {
      if (!m.running) {
        return Object.assign({}, m);
      }
      return Object.assign({}, m, { time: 101 });   // this.state.time + 1
    },
    STOP: m => {
      return Object.assign({}, m, { running: false });
    },
    START: m => {
      return Object.assign({}, m, { running: true });
    }
  };

  return (updates[action.type] || (m => {}))(model);
}

const initialState = { running: false, time: 42 };
const container = createStore(update, initialState);
export default container;
