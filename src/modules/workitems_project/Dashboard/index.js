import { connect } from 'react-redux'
import {getPhasesList, getWorkitemList, updateWorkitemPhase} from '../store/action'
import Dashboard from './Dashboard'

const mapStateToProp = (state) => {
    return {
        status: state.phasesReducer.status,
        accessToken: state.userReducer.loginData,
        phases: state.phasesReducer.data,
        isLoading: state.phasesReducer.isLoading,
        workitems: state.phasesReducer.workitems
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        getPhasesList: (payload) => {
            dispatch(getPhasesList(payload));
        },
        getWorkitemList: (params)=> {
            dispatch(getWorkitemList(params))
        },
        updateWorkitemPhase: (params) => {
            dispatch(updateWorkitemPhase(params));
        }
    }
}

const DashboardComponent = connect(mapStateToProp, mapDispatchToProp)(Dashboard);

export default DashboardComponent;