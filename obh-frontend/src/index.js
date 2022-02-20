import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import combineReducers from './reducers/index.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
const store = createStore(combineReducers, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="*" element={ <App /> }>
        </Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
