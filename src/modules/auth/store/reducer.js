import * as types from './actionType'


const initialState = {
    data:[],
    isLoading: false,
    error: '',
    status: '',
    loginData: {},
    registeruserDta: {}

}

const userReducer  = (state = initialState, action) =>{
    switch (action.type) {
        case types.REGISTER_USER:
            return {
                ...state,
                isLoading: true,
                status: action.type,
                registeruserDta: action.payload.email
            }
        case types.REGISTER_USER_SUCCESS:
            return {
                ...state,
                data: action.result,
                // isLoading: false,
                status: action.type
            }
        case types.REGISTER_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.result,
                status: action.type
            }
        case types.USER_LOGIN:
            return {
                ...state,
                isLoading: true,
                status: action.type
            }
        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                loginData: action.result.data.data,
                status: action.type
            }
        case types.USER_LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                status: action.type
            }
        case types.RESEND_OTP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                status: action.type
            }

        case types.RESEND_OTP_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        case types.OTP_VERIFY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                status: action.type
            }

        case types.OTP_VERIFY_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false
            }
        default:
            return state;
    }
}

export default userReducer;