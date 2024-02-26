import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './common_css/index.css'
import Profile from './components/profile/Profile'
import MatchLayout from './components/Project/components/MatchLayout';


export default function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/"  element={ <Profile/>}/>
        <Route path="/match-data"  element={ <MatchLayout/>}/>
       </Routes>
    </BrowserRouter>
  )
}

