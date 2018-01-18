import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore'
import {Provider} from 'react-redux'
import './common.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__ || {};
const factory = createStore(initialState);

ReactDOM.render(
    <Provider store={factory.store}>
        <App history={factory.history}/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
