import HTTP from '../../../Utils/Http/Http'
import store from '../../../Utils/store/store'
import {
    getPhasesListSuccess,
    getPhasesListFailure,
    getWorkitemListSuccess,
    getWorkitemListFailure,
    updateWorkitemPhaseSuccess,
    updateWorkitemPhaseFailure,
    createWorkItemSuccess,
    createWorkitemFailure

} from './action'

export  const getPhasesList = async(params) => {
    try {
        const result = await HTTP.get('/phases/list');
        store.dispatch(getPhasesListSuccess(result));
    } catch (error) {
        store.dispatch(getPhasesListFailure(error))
    }
}

export  const getWorkitemList = async(params) => {
    try {
        const result = await HTTP.get('/work-item/list');
        store.dispatch(getWorkitemListSuccess(result));
    } catch (error) {
        store.dispatch(getWorkitemListFailure(error))
    }
}

export  const updateWorkitemPhase = async(payload) => {
    try {
        const result = await HTTP.put(`/work-item/${payload.id}`, payload);
        store.dispatch(updateWorkitemPhaseSuccess(result));
    } catch (error) {
        store.dispatch(updateWorkitemPhaseFailure(error))
    }
}

export  const createWorkItem = async(payload) => {
    try {
        const result = await HTTP.post(`/work-item/create`, payload);
        store.dispatch(createWorkItemSuccess(result));
    } catch (error) {
        store.dispatch(createWorkitemFailure(error))
    }
}