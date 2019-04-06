import { createStore } from 'redux';
import reducer from './reducer';

let state = createStore(
        reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default state;