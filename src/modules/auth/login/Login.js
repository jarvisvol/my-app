import React, { useEffect, useState } from 'react'
import { Button, Input, Label } from 'semantic-ui-react'

export default function Login({userLogin, status, accessToken}) {
  const [formobj, setformobj] = useState({
    email:'',
    password:''
  })

  useEffect(() => {
    switch (status) {
      case 'USER_LOGIN_SUCCESS':
        window.localStorage.setItem('accessToken' ,accessToken.access_token)
        // console.log(accessToken);
        window.location.assign('/')
        break;
    
      default:
        break;
    }
  }, [status])

  const loginHandler = () => {
    // console.log(formobj, userLogin);
    userLogin(formobj);
  }

  return (
    <div>
      <Label >Email</Label>
      <Input onChange={(e) => {setformobj({...formobj, email:e.target.value})}} type='text' placeholer='enter the email'/>
      <Label>Password</Label>
      <Input onChange={(e) => {setformobj({...formobj, password:e.target.value})}} type='text' placeholer='enter the password'/>
      <Button onClick={() => loginHandler()} style={{marginTop:'10px'}}>Login</Button>
    </div>
  )
}
