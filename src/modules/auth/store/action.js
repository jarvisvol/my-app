import * as types from './actionType'
import * as API from './api'

export const registerUser = (payload) => {
const request = API.registerUser(payload)
    return {
        type: types.REGISTER_USER,
    }
}

export const userRegisterSuccess = (data) => {
    return {
        type: types.REGISTER_USER_SUCCESS,
        result: data
    }
}

export const userRegisterFail = (result) => {
    return {
        type: types.REGISTER_USER_FAIL,
        result: result 
    }
}

export const userLogin = () => {
    return {
        type: types.USER_LOGIN
    }
}