import HTTP from '../../../Utils/Http/Http'
import store from '../../../Utils/store/store';
import {
    userRegisterSuccess,
    userRegisterFail,
} from './action'


export const registerUser = async(payload) => {
    try {
        const result = await HTTP.post('/user/register', payload);
        store.dispatch(userRegisterSuccess(result.data));
    } catch (error) {
        store.dispatch(userRegisterFail('result'))
    }
}