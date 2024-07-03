import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './common_css/index.css'
import Profile from './components/profile/Profile'
import MatchLayout from './components/Project/components/MatchLayout';
import Todos from './components/Project/project-3/Todos';
import RegisterComponent from './modules/auth/registeration/index';
import LoginComponent from './modules/auth/login';


export default function App() {
  const [posn, setPosn] = useState([0,0]);
  const handleSqaureClick =(x,y) =>{
    setPosn([x,y]);
    console.log(x,y, setPosn);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/match-data" element={<MatchLayout />} />
        <Route path="/workitems" setPosn={setPosn} element={<Todos knightPosition={posn} handleSqaureClick={handleSqaureClick}/>} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

