import * as types from './actionTypes.js'
import * as API from './api';

export const getPhasesList = (params) => {
    const req = API.getPhasesList(params);
    return {
        type: types.GET_PHASES_LIST,
        req
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
        req
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
        req: req
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

export const createWorkitem = (payload) => {
    const req = API.createWorkItem(payload);
    return {
        type: types.CREATE_WORKITEM,
        req
    }
}

export const createWorkItemSuccess = (data) => {
    return {
        type: types.CREATE_WORKITEM_SUCCESS,
        result: data 
    }
}


export const createWorkitemFailure = (error) => {
    return {
        type: types.CREATE_WORKITEM_FAILURE,
        error: error 
    }
}

