import * as api_util from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => (
    {
        type: RECEIVE_CURRENT_USER,
        user
    }
);

export const logoutCurrentUser = () => (
    {
        type: LOGOUT_CURRENT_USER
    }
);

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const signup = (user) => dispatch => (
    api_util.signup(user).then(
        (new_user) => dispatch(receiveCurrentUser(new_user)),
        (e) => dispatch(receiveErrors(e))
    )
)

export const login = (user) => dispatch => (
    api_util.login(user).then(
        (new_user) => dispatch(receiveCurrentUser(new_user)),
        (e) => dispatch(receiveErrors(e))
    )
)
export const logout = () => dispatch => (
    api_util.logout().then(
        () => dispatch(logoutCurrentUser()),
        (e)=> dispatch(receiveErrors(e))
    )
);