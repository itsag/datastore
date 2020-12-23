const _ = require("lodash");

const createStore = () => {
  // Container
  let state;

  // Dispatch
  const dispatch = action => {
    // Update state
    state = {
      ...state,
      [action.key]: action.value
    };

    return state;
  };

  // Get
  const get = key => {
    if (state[key]) {
      return state[key];
    }

    const result = { ...state };

    for (const key in state) {
      if (_.isUndefined(state[key])) {
        delete result[key];
      }
    }

    return result;
  };

  // Update
  const update = (key, value) => {
    return dispatch({ key, value });
  };

  // Remove
  const remove = key => {
    return dispatch({ key });
  };

  // Reset
  const reset = () => {
    state = {};
  };

  return {
    get,
    update,
    remove,
    reset
  };
};

// Exports
module.exports = { createStore };
