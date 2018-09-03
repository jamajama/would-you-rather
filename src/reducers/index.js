import {combineReducers} from 'redux';
import users from './users';
import questions from './questions';
import login from './auth';

export default combineReducers({
    users,
    questions,
    login
});