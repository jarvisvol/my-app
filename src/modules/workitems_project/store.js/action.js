import * as types from './actionTypes.ks'
import * as API from './api';

export const getPhasesList = (params) => {
    const req = API.getWorkItemList(params);
    return {
        type: types.GET_PHASES_LIST,
        request: req
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