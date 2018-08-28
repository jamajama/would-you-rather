import {getUser} from '../utils/api';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        authenticated: true,
        loggedInUser: user
    }
}

export function handleLoginUser(id) {
    return (dispatch) => {
        getUser(id).then((user) => {
            dispatch(receiveLogin(user));
        });
    };
}