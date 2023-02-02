import React from 'react';
import NavAfterLogin from '../components/NavAfterLogin';
import UnderBar from '../components/UnderBar';
import "../styles/AllAboutMsg.css";
import { useEffect, useState } from "react";

function SendMsgTemplate() {
    return(
        
        <div className='msg-template'>
            <NavAfterLogin/>
            <div className='msg-title'>보낸 쪽지함</div>
            <div><hr className="msg-line"/></div>
            <ul className='msg-list-titles'>
                <li className='msg-list-title1'>No.</li>
                <li className='msg-list-title2'>제목</li>
                <li className='msg-list-title3'>받는 이</li>
                <li className='msg-list-title4'>등록일</li>
            </ul>
            <div><hr className='msg-title-line'/></div>
            {/*리스트가 나와야 하는 영역*/}
            <UnderBar/>
        </div>
    );
}

export default SendMsgTemplate;