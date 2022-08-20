import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore } from 'redux';
import App from './App';
import allReducers from './reducers'
const root = ReactDOM.createRoot(document.getElementById('root'));
//middleware
const firstMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log('WE ARE FIRST MIIDDLEWARE')
      return next(action)

    }

  } 

}
//middleware SHORT 
const secondMiddleware = (store) => (next) => (action) => {
  console.log('WE ARE SECOND MIIDDLEWARE')
  return next(action)
}

//middleware INCREMENT 
const startAtPoint = (store) => (next) => (action) => {
  console.log('WE ARE THIRD MIIDDLEWARE')
  // console.log('WE ARE THIRD MIIDDLEWARE',action)
  // console.log('WE ARE THIRD MIIDDLEWARE',next)
  // console.log('store ', store)
  if (store.getState().counter >= 50) {
    return next({
      type:'DECREMENT'
    })
  }
  return next(action)
}

const store = legacy_createStore(
  allReducers,
  applyMiddleware(
    firstMiddleware,
    secondMiddleware, 
    startAtPoint
    )
    // ,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

