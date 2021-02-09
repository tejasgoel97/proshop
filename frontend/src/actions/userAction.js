import axios from 'axios'

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL"
export const USER_LOGOUT = "USER_LOGOUT"


export const UserAction = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: USER_LOGIN_REQUEST });
        console.log("LOADING IS SET")
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            console.log("In the try")
            const { data } = await axios.post('/api/users/login', { email: email, password, password }, config);
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
            console.log("request has been sent successfullt and herre is the data", data)
            localStorage.setItem("userInfo", JSON.stringify(data))

        } catch (error) {
            console.log("GOT EError", error)
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.message ? error.response.data.message : error.message,
            })
        }


    }
}