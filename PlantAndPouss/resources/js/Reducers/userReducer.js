import {
    LOGIN_USER,
    FAIL_LOGIN,
} from '../Constants/UserConstants';

const initialState = [
    {
        user: {},
    }
]

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return [
                ...state,
                {
                    user: action.user,
                }
            ]

        default:
            return state
    }
}
