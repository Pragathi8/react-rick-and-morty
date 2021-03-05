import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from 'redux-saga';
import thunk from "redux-thunk";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import charactersReducer from "./store/reducers/characters";
import { watchSagas } from './store/sagas/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] Dispatching action", action);
      const result = next(action);
      console.log("next state", store.getState());
      return result;
    };
  };
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  charactersReducer,
  composeEnhancers(applyMiddleware(logger, thunk, sagaMiddleware))
);

sagaMiddleware.run(watchSagas);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
