import Login from './Login'
import { connect } from 'react-redux'
import {
    userLogin
} from '../store/action'

const mapStateToProp = (state) => {
    return {
        status: state.userReducer.status,
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        userLogin: (payload) => {
            dispatch(userLogin(payload));
        }
    }
}

const LoginComponent = connect(mapStateToProp, mapDispatchToProp)(Login);

export default LoginComponent;