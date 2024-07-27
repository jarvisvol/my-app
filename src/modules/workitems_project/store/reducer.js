import * as types from './actionTypes';


const initialState = {
    status: '',
    isLoading: false,
    phases: [],
    isAuthentecated: true,
    workitems: []
};

export const phasesReducer = (state = initialState, action) => {
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
        case types.GET_WORKITEM_LIST:
            return {
                ...state,
                isLoading: true,
                status: action.type
            }
        case types.GET_WORKITEM_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                status: action.type,
                workitems: action.result.data.data
            }
        case types.GET_WORKITEM_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                status: action.type,
                error: action.error
            }
        case types.UPDATE_WORKITEM_PHASE:
            return {
                ...state,
                isLoading: true,
                status: action.type,
            }
        case types.UPDATE_WORKITEM_PHASE_FAILURE:
            return {
                ...state,
                isLoading: false,
                status: action.type,
                error: action.error
            }
        case types.UPDATE_WORKITEM_PHASE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                status: action.type,
            }
        case types.CREATE_WORKITEM:
            return {
                ...state,
                isLoading: true,
                status: action.type,
            }
        case types.CREATE_WORKITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                status: action.type,
                newWorkitem: action.result.data.data.data
            }
        case types.CREATE_WORKITEM_FAILURE:
            return {
                ...state,
                isLoading: false,
                status: action.type,
                error: action.error
            }
        default:
            return state;
    }
}