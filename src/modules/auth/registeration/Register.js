import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Label, Loader, Dimmer } from 'semantic-ui-react'

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
        // location.href('/login')
        navigate("/email-verification")
        break;
    
      default:
        break;
    }
  }, [status])

  const onsubmitHandler = () => {
    //  console.log();
    registerUser(formObj)
    console.log(isLoading);
  }
  return (
    <div>
      <Dimmer active={false}>
        <Loader active />
      </Dimmer>
      <Label >Name</Label>
      <Input onChange={(e) => { setformObj({ ...formObj, name: e.target.value }) }} type='text' placeholder="enetr the name" />
      <Label >phone</Label>
      <Input onChange={(e) => { setformObj({ ...formObj, phoneNumber: e.target.value }) }} type='number' placeholder="enetr the number" />
      <Label >email</Label>
      <Input onChange={(e) => { setformObj({ ...formObj, email: e.target.value }) }} type='email' placeholder="enetr the email" />
      <Label >password</Label>
      <Input onChange={(e) => { setformObj({ ...formObj, password: e.target.value }) }} type="text" placeholder="eneter the password" />
      <Button style={{ marginTop: "10px" }} onClick={() => onsubmitHandler()}>Submit</Button>
    </div>
  )
}
