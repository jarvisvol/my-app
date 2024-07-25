import { combineReducers } from "redux";
import userReducer from "../../modules/auth/store/reducer";
import { phasesReducer } from "../../modules/workitems_project/store/reducer";

const rootReducer = combineReducers({
    userReducer,
    phasesReducer
    
})

export default rootReducer;