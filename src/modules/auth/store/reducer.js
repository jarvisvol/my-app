import * as types from './actionType'


const initialState = {
    data:[],
    isLoading: false,
    error: '',
    status: '',
    loginData: {}
}

const userReducer  = (state = initialState, action) =>{
    switch (action.type) {
        case types.REGISTER_USER:
            return {
                ...state,
                isLoading: true,
                status: action.type
            }
        case types.REGISTER_USER_SUCCESS:
            return {
                data: action.result.data,
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
        default:
            return state;
    }
}

export default userReducer;