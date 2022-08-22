import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import App from './App'
import reducer from './reducers'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);



const store = legacy_createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
)
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);