import {useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, {Component} from 'react';
import NavBeforeLogin from "./routes/components/NavBeforeLogin";
import MyPage from './routes/MyPage.js';
import Home from './routes/Home.js';
import HowtoUse from './routes/HowtoUse.js';
function App(props) {
return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/mypage" element={<MyPage />}/>
    <Route path="/how-to-use" element={<HowtoUse />}/>
    </Routes>
  </BrowserRouter>
);
}

export default App;
