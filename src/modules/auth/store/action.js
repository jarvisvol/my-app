import * as types from './actionType'
import * as API from './api'

export const registerUser = (payload) => {
const request = API.registerUser(payload)
    return {
        type: types.REGISTER_USER,
        request: request,
        payload: payload
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

export const verifyOtp = (payload) => {
    const request = API.otpVerify(payload)
    return {
        type: types.OTP_VERIFY,
        request: request
    }
}

export const verifyOTPSuccess = (data) => {
    return {
        type: types.OTP_VERIFY_SUCCESS,
        result: data
    }
}

export const verifyOTPFailure = (error) => {
    return {
        type: types.OTP_VERIFY_FAILURE,
        error: error
    }
}


export const resendOtp = (payload) => {
    const request = API.resendOtp(payload)
    return {
        type: types.RESEND_OTP,
        request: request
    }
}

export const resendOtpSuccess = (data) => {
    return {
        type: types.RESEND_OTP_SUCCESS,
        result: data
    }
}

export const resendOtpFailure = (error) => {
    return {
        type: types.RESEND_OTP_FAILURE,
        error: error
    }
}