import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './common_css/index.css'
import Profile from './components/profile/Profile'
import MatchLayout from './components/Project/components/MatchLayout';
import RegisterComponent from './modules/auth/registeration/index';
import LoginComponent from './modules/auth/login';
import VerifyOtpCompo from './modules/auth/verifyOTP/component/index';
import DashboardComponent from './modules/workitems_project/Dashboard/index.js';
import Navbar from './components/common/Navbar.js';
import 'semantic-ui-css/semantic.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/match-data" element={<MatchLayout />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/email-verification" element={<VerifyOtpCompo />} />
        <Route path="/dashboard" element={<DashboardComponent/>} />
      </Routes>
    </BrowserRouter>
  )
}

