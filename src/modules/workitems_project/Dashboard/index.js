import { connect } from 'react-redux'
import {getPhasesList} from '../store/action'
import Dashboard from './Dashboard'

const mapStateToProp = (state) => {
    return {
        status: state.phasesReducer.status,
        accessToken: state.userReducer.loginData,
        phases: state.phasesReducer.data,
        isLoading: state.phasesReducer.isLoading
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        getPhasesList: (payload) => {
            dispatch(getPhasesList(payload));
        }
    }
}

const DashboardComponent = connect(mapStateToProp, mapDispatchToProp)(Dashboard);

export default DashboardComponent;