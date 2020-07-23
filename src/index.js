import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import {composeWithDevTools} from 'redux-devtools-extension'; 
import {Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.querySelector('#root')
);