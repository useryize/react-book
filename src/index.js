import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stroe'
import App from './app';

let AppDOM = (
    <Provider store={ store }>
        <App />
    </Provider>
);

reactDOM.render(AppDOM, document.getElementById('root'));