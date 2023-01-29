import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import { useSelector } from 'react-redux';

function App() {
  const authenticate = useSelector((state) => state.auth.authenticate);
  useEffect(()=>{
    console.log("authenticate",authenticate)
  },[authenticate])
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminLogin" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
