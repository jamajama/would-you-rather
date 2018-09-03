import {getUser} from '../utils/api';

export const AUTH_LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const AUTH_LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export function receiveAuthLogin(user) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        authenticated: true,
        loggedInUser: user
    }
}

export function receiveAuthLogout() {
    return {
        type: AUTH_LOGOUT_SUCCESS,
        authenticated: null,
        loggedInUser: null
    }
}

export function handleLoginUser(id) {
    return (dispatch) => {
        getUser(id).then((user) => {
            dispatch(receiveAuthLogin(user));
        });
    };
}

export function handleLogoutUser() {
    return (dispatch) => {
        dispatch(receiveAuthLogout());
    }
}