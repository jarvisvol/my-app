import HTTP from '../../../Utils/Http/Http'
import store from '../../../Utils/store/store';
import {
    userRegisterSuccess,
    userRegisterFail,
    userLoginSuccess,
    userLoginFail,
} from './action'


export const registerUser = async(payload) => {
    try {
        const result = await HTTP.post('/user/register', payload);
        store.dispatch(userRegisterSuccess(result.data));
    } catch (error) {
        store.dispatch(userRegisterFail('result'))
    }
}

export const userLogin  = async(payload) => {
    try {
        const respo = await HTTP.post('user/login', payload);
        store.dispatch(userLoginSuccess(respo));
    } catch (error) {
        store.dispatch(userLoginFail)
    }
}