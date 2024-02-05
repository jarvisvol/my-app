import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './common_css/index.css'
import Profile from './components/profile/Profile'
// import Chart from './components/Project/Chart'


export default function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/"  element={ <Profile/>}/>
        {/* <Route path="/match-data"  element={ <Chart/>}/> */}
       </Routes>
    </BrowserRouter>
  )
}

