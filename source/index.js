// Modules
const _ = require("lodash");

// Create Store
const createStore = () => {
  // @container
  // Stores all the data of the store
  let container;

  // ------------------
  // @dispatch
  // Makes changes to the container
  // ------------------
  const dispatch = action => {
    if (!_.isObject(action)) {
      return action;
    }

    if (_.isEmpty(action)) {
      return action;
    }

    if (_.isNil(action.key) || _.isEmpty(action.key)) {
      return action;
    }

    container = {
      ...container,
      [action.key]: action.value
    };

    return action;
  };

  // ------------------
  // @get
  // Get a single value from state or the whole state
  // ------------------
  const get = key => {
    if (container[key]) {
      return container[key];
    }

    const object = { ...container };

    for (const k in container) {
      if (_.isUndefined(container[k])) {
        delete object[k];
      }
    }

    return object;
  };

  // ------------------
  // @update
  // Adds the passed key-value to the store
  // ------------------
  const update = (key, value) => {
    return dispatch({ key, value });
  };

  // ------------------
  // @remove
  // Removes the passed key's value from the store
  // ------------------
  const remove = key => {
    return dispatch({ key });
  };

  return { get, update, remove };
};

// Exports
module.exports = { createStore };
