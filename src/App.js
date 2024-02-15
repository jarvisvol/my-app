import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './common_css/index.css'
import Profile from './components/profile/Profile'
import BarChart from './components/Project/BarChart'


export default function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/"  element={ <Profile/>}/>
        <Route path="/match-data"  element={ <BarChart/>}/>
       </Routes>
    </BrowserRouter>
  )
}

