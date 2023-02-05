import React from 'react';
import NavAfterLogin from '../components/NavAfterLogin_blue';
import UnderBar from '../components/UnderBar';
import "../styles/AllAboutMsg.css";
import ReceivedMsgItem from '../components/ReceivedMsgItem';
import MsgModalForm from '../components/MsgModal';
import ReceivedMsgList from '../components/ReceivedMsgList';
import { useEffect, useState } from "react";

function ReceivedMsgTemplate() {
    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    
    var dateString = year + '-' + month  + '-' + day;

    const [messages, setMessages] = useState([
        {
            id: 1,
            title: '솔룩스가 궁금해요',
            userId: 'y123',
            dateString,
        },
        {
            id: 2,
            title: '진로가 비슷한 것 같아 질문드려요',
            userId: 'm456',
            dateString,
        },
        {
            id: 3,
            title: '안녕하세요',
            userId: 'hyeyoon',
            dateString,
        },
]);

    return(
        
        <div className='msg-template'>
            <NavAfterLogin/>
            <div className='msg-title'>받은 쪽지함</div>
            <div><hr className="msg-line"/></div>
            <ul className='msg-list-titles'>
                <li className='msg-list-title1'>No.</li>
                <li className='msg-list-title2'>제목</li>
                <li className='msg-list-title3'>보낸 이</li>
                <li className='msg-list-title4'>등록일</li>
            </ul>
            <div><hr className='msg-title-line'/></div>
            <ReceivedMsgList messages={messages}/>
            <UnderBar/>
        </div>
    );
}

export default ReceivedMsgTemplate;