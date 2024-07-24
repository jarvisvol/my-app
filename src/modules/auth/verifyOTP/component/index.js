import { connect } from "react-redux";
import VerifyOtp from "./VerifyOtp";
import { resendOtp, verifyOtp } from "../../store/action";
// import { registerUser } from "../store/action";

const mapstatetoprop = (state) => {
    return {
        isLoading: state.userReducer.isLoading,
        status: state.userReducer.status,
        email: state.userReducer.registeruserDta
    }
}

const mapdispatchtoprop = (dispatch) => {
    return {
        verifyOtp: (payload) => {
            dispatch(verifyOtp(payload));
        },
        resendOtp: (payload) => {
            dispatch(resendOtp(payload));
        }
    }
}

const VerifyOtpCompo = connect(mapstatetoprop, mapdispatchtoprop)(VerifyOtp);
export default VerifyOtpCompo;