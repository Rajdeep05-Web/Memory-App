import React from 'react';
import {createRoot} from 'react-dom/client';


import {Provider} from 'react-redux';//import the Provider component from react-redux
import {createStore, applyMiddleware, compose} from 'redux';//import the createStore function from redux
import {thunk} from 'redux-thunk';//import the thunk middleware

import App from './App';

import reducers from './reducers/index.js'//import the combined reducers object from the reducers folder to pass into the store


const store = createStore(reducers, compose(applyMiddleware(thunk)));//create a store and pass in the reducers and the middleware

const root = createRoot( document.getElementById('root') )//create a root and pass in the root element



root.render(

/* // wrap the App component with the Provider component and pass in the store */
<Provider store={store}>
    <App/>
</Provider>



)


