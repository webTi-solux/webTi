import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import React, {useState, Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBeforeLogin from "./components/NavBeforeLogin";
import MyPage from './routes/MyPage.js';
import Home from './routes/home.js';
import HowtoUse from './routes/HowtoUse.js';
import LoginUi from "./routes/LoginUi";
import JoinPage from "./routes/JoinPage";
import ModifyMyInfo from "./routes/ModifyMyInfo";
import BeforeModifyMyInfo from "./routes/BeforeModifyMyInfo";
import LikedList from "./components/LikedList";
import Main from './routes/Main';
import ModalCreateDL from './components/ModalCreateDL';
import WriteDetail from './routes/WriteDetail';
import VisitDetail from './routes/VisitDetail';
import YearMonthSelectBox from './components/YearMonthSelectBox_start';
import ReceivedMsgs from './routes/ReceivedMsgTemplate';
import MessageTest from './components/MessageTest';
import SendMsgs from './routes/SendMsgTemplate';
import DonelistBar from './components/DonelistBar';
import axios from 'axios';
import { useEffect } from 'react';


const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    margin:0;
    padding:0;
    background-color : #EAE9D5;
  }
`;

function App() {


  useEffect(() => {
    
    
  }, [])

  
  return (
    <div>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mypage/" element={
              <MyPage />
              }/>
              {/* user 아이디로 구별 해야함 */}
        <Route path="/how-to-use" element={<HowtoUse />}/>
        <Route path="/login-page" element={<LoginUi />}/>
        <Route path="/join-page" element={<JoinPage />}/>
        <Route path="/modify-my-info-page" element={<ModifyMyInfo />}/>
        <Route path="/before-modify-my-info-page" element={<BeforeModifyMyInfo />}/>
        {/*<Route path="/liked-list" element={<LikedList/>}/>*/}
        <Route path="/main" element={<Main />}/>
        <Route path="/write-detail/:DLcolor" element={<WriteDetail/>}/>
        <Route path="/visit-detail/:doneId" element={<VisitDetail/>}/>
        <Route path="/cdlw-page" element={<ModalCreateDL />}/>
        <Route path="/selectbox-page" element={<YearMonthSelectBox />}/>
        <Route path="/msgs-to-me" element={<ReceivedMsgs />}/>
        <Route path="/msgs-to-me-detail" element={<MessageTest />}/>
        <Route path="/msgs-from-me" element={<SendMsgs />}/>
        <Route path="/donelistbar" element={<DonelistBar />}/>
  </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
