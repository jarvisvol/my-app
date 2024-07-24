import * as types from './actionTypes';


const initialState = {
    status: '',
    isLoading: false,
    phases: [],
    isAuthentecated: true
};

export const phasesreducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PHASES_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.result.data.data,
                status: action.type
            }
        case types.GET_PHASES_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                status: action.type,
            }
        case types.GET_PHASES_LIST:
            return {
                ...state,
                isLoading: true,
                status: action.type
            }
        default:
            return state;
    }
}