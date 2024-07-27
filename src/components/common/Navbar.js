import React, { useEffect } from 'react'
import CreateWiModal from './CreateWiModal'
import { connect } from 'react-redux'
import { createWorkitem } from '../../modules/workitems_project/store/action.js'
import { Icon } from 'semantic-ui-react'
import { userDetail } from '../../modules/auth/store/action.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Modal, Button, Input, Label } from 'semantic-ui-react';

function NavbarCompo({userDetailsData, userDetail, status, isAuthenticated}) {

    const navigate = useNavigate();

    const [user, setUser] = useState({name:"user"})

    useEffect(() => {


    }, [])

    useEffect(() => {

        switch (status) {
            case 'GET_USER_DETAIL_SUCCESS':
                setUser({
                    name: userDetailsData.data.name
                })
                break;
            case 'GET_USER_DETAIL_FAILURE':
                // navigate('/login');
            default:
                break;
        }

    }, [status])

    // useEffect(() => {
    //     if(!isAuthenticated){
    //         navigate('/login');
    //     }
    // }, [isAuthenticated])

    return (
        <div className='nav-container' style={{alignItems:"center", display: window.location.href.includes(['login, register']) ? 'none': "normal" }} >
            <CreateWiModal createWorkItem={createWorkitem}/>
            <Icon style={{float:'right', }} name='user' size='big'/>
            <span style={{float:'right',fontSize:"14px", fontWeight:"600", position:"relative", top:"10px", marginRight:"10px" }}>{user.name}</span>
        </div>
    )
}


const mapStateToProp = (state) => {
    return {
        userDetailsData: state.userReducer.userDetails,
        isAuthenticated: state.userReducer.isAuthenticated
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        createWorkItem: (payload) => {
            dispatch(createWorkitem(payload))
        },
        userDetail: () => {
            dispatch(userDetail)
        }
        

    }
}
const NavBar = connect(mapStateToProp, mapDispatchToProp)(NavbarCompo)
export default NavBar