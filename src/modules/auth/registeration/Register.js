import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Button, Label, Loader, Dimmer } from 'semantic-ui-react'
import '../login/css/index.css'

export default function Register({ registerUser, isLoading, status }) {

  const navigate = useNavigate();

  const [formObj, setformObj] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: ""
  })

  useEffect(() => {
    switch (status) {
      case 'REGISTER_USER_SUCCESS':
        navigate("/email-verification")
        break;
    
      default:
        break;
    }
  }, [status, navigate])

  const onsubmitHandler = () => {
    registerUser(formObj)
    console.log(isLoading);
  }
  return (
    <div className='field-container' style={{top:"45px"}}>
      <Dimmer active={false}>
        <Loader active />
      </Dimmer>
      <Label >Name</Label>
      <input className='input-field' onChange={(e) => { setformObj({ ...formObj, name: e.target.value }) }} type='text' placeholder="Enter the name" />
      <Label >Phone Number</Label>
      <input className='input-field' onChange={(e) => { setformObj({ ...formObj, phoneNumber: e.target.value }) }} type='number' placeholder="Enter the number" />
      <Label >Email</Label>
      <input className='input-field' onChange={(e) => { setformObj({ ...formObj, email: e.target.value }) }} type='email' placeholder="Enter the email" />
      <Label >Pqassword</Label>
      <input className='input-field'  onChange={(e) => { setformObj({ ...formObj, password: e.target.value }) }} type="password" placeholder="Enter the password" />
      <Button className='login-btn' style={{ marginTop: "10px" }} onClick={() => onsubmitHandler()}>Sign up</Button>
      <Link to={'/login'} className="link-text">Sign in</Link>
    </div>
  )
}
