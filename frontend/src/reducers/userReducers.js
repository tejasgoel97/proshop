import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGOUT } from '../actions/userAction'

const userInfo = JSON.parse(localStorage.getItem('userInfo'))
let initialState = { userInfo: userInfo };
if (!userInfo) initialState = { userInfo: {} };
console.log("LOCAL STORAGE", userInfo)


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:

            return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FAIL:

            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}