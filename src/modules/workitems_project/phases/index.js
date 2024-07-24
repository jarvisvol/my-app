import Phases from './Phases'
import { connect } from 'react-redux'

const mapStateToProp = (state) => {
    return {
        status: state.userReducer.status,
        accessToken: state.userReducer.loginData
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        // userLogin: (payload) => {
        //     dispatch(userLogin(payload));
        // }
    }
}

const PhasesComponent = connect(mapStateToProp, mapDispatchToProp)(Phases);

export default PhasesComponent;