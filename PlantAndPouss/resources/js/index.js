import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './Reducers/reducers';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import GameBoard from './Components/GameBoard';
import MainNavBar from './Components/MainNavBar';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

ReactDOM.render(
    <Provider store={store}>
        <GameBoard />
    </Provider>,
    document.getElementById('root')
);

ReactDOM.render(
    <MainNavBar />,
    document.getElementById('nav')
);