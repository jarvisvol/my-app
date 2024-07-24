import { combineReducers } from "redux";
import userReducer from "../../modules/auth/store/reducer";
import { phasesreducer } from "../../modules/workitems_project/store.js/reducer";

const rootReducer = combineReducers({
    userReducer,
    phasesreducer
    
})

export default rootReducer;