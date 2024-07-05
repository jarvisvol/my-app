import * as types from './actionType'
import * as API from './api'

export const registerUser = (payload) => {
const request = API.registerUser(payload)
    return {
        type: types.REGISTER_USER,
        request: request
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

export const userLogin = (payload) => {
    const request = API.userLogin(payload)
    return {
        type: types.USER_LOGIN,
        request: request
    }
}

export const userLoginSuccess = (data) => {
    return {
        type: types.USER_LOGIN_SUCCESS,
        result: data
    }
}

export const userLoginFail = (error) => {
    return {
        type: types.USER_LOGIN_FAIL,
        error: error
    }
}