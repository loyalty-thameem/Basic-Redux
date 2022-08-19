const redux = require('redux');

// Reducer is pure function and taken currentState  and  action. then return currentState value
const rootReducer = (currentState = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return currentState + 1;
    case 'DECREMENT':
      return currentState - 1;
    default:
      return currentState;
  }
};

// Create a Store...
const store = redux.createStore(rootReducer);
console.log('initial State =======>', store.getState());

// Dispatch actions...
store.dispatch({ type: 'INCREMENT' });
console.log('state after INCREMENT =======>', store.getState());