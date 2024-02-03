import React from 'react'
// import Navbar from './components/Navbar/pages/Navbar'
import './common_css/index.css'
import Profile from './components/profile/Profile'


export default function App() {
  return (
    <div className='app-container' style={{display:'flex'}}>
    {/* <Navbar/> */}
    <Profile/>
    </div>
  )
}

