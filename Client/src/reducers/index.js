import {combineReducers} from 'redux';//

import posts from './posts';
import auth from './auth';

//combineReducers is a function that takes an object as an argument and returns a single reducer of all fresh new states
export default combineReducers({
    posts,
    auth,
})