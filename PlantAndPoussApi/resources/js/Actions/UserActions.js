import {
    LOGIN_USER,
    FAIL_LOGIN,
} from '../Constants/UserConstants';
import { sendRequest } from './RequestAction';

export const userLoginFetch = user => {
    return dispatch => {
        return sendRequest(process.env.BASE_URL + "/login", 'POST', user)
            .then(data => {
                if (data.message) {
                    dispatch(failLogin(data.message))
                } else {
                    localStorage.setItem("token", data.token)
                    dispatch(loginUser(data.user))
                }
            })
    }
}

const loginUser = userObj => ({
    type: LOGIN_USER,
    user: userObj
})

const failLogin = error => ({
    type: FAIL_LOGIN,
    error: error
})