import * as types from './actionTypes.js'
import * as API from './api';

export const getPhasesList = (params) => {
    const req = API.getPhasesList(params);
    return {
        type: types.GET_PHASES_LIST,
    }
}

export const getPhasesListSuccess = (data) => {
    return {
        type: types.GET_PHASES_LIST_SUCCESS,
        result: data 
    }
}


export const getPhasesListFailure = (error) => {
    return {
        type: types.GET_PHASES_LIST_FAILURE,
        error: error 
    }
}