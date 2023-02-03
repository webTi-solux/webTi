import React, {Component} from 'react';
import "../styles/UnderBar.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// 화면 최하단에 들어가는 css

function UnderBar() {
    return (
    <div className='underbar'>
        <hr className="real-line"/>
        <p className="circle1"></p><p className="circle2"></p><p className="circle3"></p>
    </div>
    );
}

export default UnderBar;
