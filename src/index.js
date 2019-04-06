import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import { Provider } from 'react-redux';
import store from './store';

const AppDom = (
    <Provider store = { store }>
        <App />
    </Provider>
)

ReactDOM.render(AppDom, document.getElementById('root'));