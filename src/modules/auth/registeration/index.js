import { connect } from "react-redux";
import Register from "./Register";
import { registerUser } from "../store/action";

const mapstatetoprop = (state) => {
    return {
        isLoading: state.userReducer.isLoading,
        status: state.userReducer.status
    }
}

const mapdispatchtoprop = (dispatch) => {
    return {
        registerUser: (payload) => {
            dispatch(registerUser(payload));
        } 
    }
}

const RegisterComponent = connect(mapstatetoprop, mapdispatchtoprop)(Register);
export default RegisterComponent;