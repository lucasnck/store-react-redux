import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Routers from './pages/Routers'   

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/default.scss'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers, devtools)
ReactDOM.render(
    <Provider store={store}>
        <Routers />
    </Provider>
    , document.getElementById('root'));
