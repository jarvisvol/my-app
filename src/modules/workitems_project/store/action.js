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

export const getWorkitemList = (params) => {
    const req = API.getWorkitemList(params);
    return {
        type: types.GET_WORKITEM_LIST,
    }
}

export const getWorkitemListSuccess = (data) => {
    return {
        type: types.GET_WORKITEM_LIST_SUCCESS,
        result: data 
    }
}


export const getWorkitemListFailure = (error) => {
    return {
        type: types.GET_WORKITEM_LIST_FAILURE,
        error: error 
    }
}

export const updateWorkitemPhase = (payload) => {
    const req = API.updateWorkitemPhase(payload);
    return {
        type: types.UPDATE_WORKITEM_PHASE,
    }
}

export const updateWorkitemPhaseSuccess = (data) => {
    return {
        type: types.UPDATE_WORKITEM_PHASE_SUCCESS,
        result: data 
    }
}


export const updateWorkitemPhaseFailure = (error) => {
    return {
        type: types.UPDATE_WORKITEM_PHASE_FAILURE,
        error: error 
    }
}

