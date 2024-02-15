import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './common_css/index.css'
import Profile from './components/profile/Profile'
import MyMatchData from './components/Project/MyMatchData';


export default function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/"  element={ <Profile/>}/>
        <Route path="/match-data"  element={ <MyMatchData/>}/>
       </Routes>
    </BrowserRouter>
  )
}

