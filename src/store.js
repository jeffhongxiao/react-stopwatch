import { createStore } from "redux";

function update(model = { running: false, time: 0 }, action) {
  console.log(action.type);

  const updates = {
    TICK: m => {
      if (!m.running) {
        return Object.assign({}, m);
      }
      return Object.assign({}, m, { time: model.time + 1 });
    },
    STOP: m => {
      return Object.assign({}, m, { running: false });
    },
    START: m => {
      return Object.assign({}, m, { running: true });
    }
  };

  return (updates[action.type] || (() => model))(model);
}

const container = createStore(update, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default container;
