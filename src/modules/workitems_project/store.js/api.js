import HTTP from '../../../Utils/Http/Http'
import store from '../../../Utils/store/store'
import {
    getWorkItemListSuccess,
    getWorkItemListFailure

} from './action'

export  const getPhasesList = async(params) => {
    try {
        const result = await HTTP.get('/phases/list');
        store.dispatch(getWorkItemListSuccess(result));
    } catch (error) {
        store.dispatch(getWorkItemListFailure(error))
    }
}