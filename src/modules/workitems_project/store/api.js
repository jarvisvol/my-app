import HTTP from '../../../Utils/Http/Http'
import store from '../../../Utils/store/store'
import {
    getPhasesListSuccess,
    getPhasesListFailure

} from './action'

export  const getPhasesList = async(params) => {
    try {
        const result = await HTTP.get('/phases/list');
        store.dispatch(getPhasesListSuccess(result));
    } catch (error) {
        store.dispatch(getPhasesListFailure(error))
    }
}