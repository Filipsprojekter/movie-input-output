import React from './../node_modules/react';
import ReactDOM from './../node_modules/react-dom';
import { createStore } from './../node_modules/redux';
import App from './components/App';
import combineReducers from './reducers';
import { Provider } from './../node_modules/react-redux';

ReactDOM.render(
    <Provider store={createStore(combineReducers)}>
        <App />
    </Provider>,
     document.getElementById('root')
);

/* import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './../node_modules/redux';
import App from './components/App';
import combineReducers from './reducers'; */



/* ReactDOM.render(<Provider store={createStore(combineReducers)}>
<App />
</Provider>
, document.getElementById('root')); */

