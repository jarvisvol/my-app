import React, { useEffect, useState } from 'react'
import { Button, Label } from 'semantic-ui-react'
import './css/index.css'
import { Link } from 'react-router-dom'
import Loader from '../../../components/common/Loader'

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
  }, [status, accessToken])

  const loginHandler = () => {
    // console.log(formobj, userLogin);
    userLogin(formobj);
  }

  return (
    <div className='main-container'>
      <Loader/>
      <div className='field-container'>
      {
        formobj.email.length || formobj.password.length ? "" : <li className='warning-text'>Please enter the details</li>
      }
      <Label className='label field' >Email</Label>
      <input className='input-field' onChange={(e) => {setformobj({...formobj, email:e.target.value})}} type='text' placeholer='enter the email'/>
      <Label className='label field'>Password</Label>
      <input className='input-field' onChange={(e) => {setformobj({...formobj, password:e.target.value})}} type='password' placeholer='enter the password'/>
      <Button className='login-btn' onClick={() => loginHandler()} style={{marginTop:'10px'}}>Sign in</Button>
      <Link to={'/register'} className="link-text">Sign up</Link>
      </div>
    </div>
  )
}
