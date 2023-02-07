import React from 'react';
import NavAfterLogin from '../components/NavAfterLogin_blue';
import UnderBar from '../components/UnderBar';
import "../styles/AllAboutMsg.css";
import ReceivedMsgItem from '../components/ReceivedMsgItem';
import MsgModalForm from '../components/MsgModal';
import ReceivedMsgList from '../components/ReceivedMsgList';
import { useEffect, useState } from "react";
import axios from 'axios';

function ReceivedMsgTemplate() {
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);
    let dateString = year + '-' + month  + '-' + day;
    // 예시: 2023-02-07

//test 용으로 post 하기
    const postMsg = async () => {
        const postMsgItem = {
            sendId: 5678,
            receivedId: 1234,
            message: "배고프당",
            time: dateString,
        }
        try {
            await axios.post('/dm/', postMsgItem
            ) .then((response) => {
            console.log(response.status);
            console.log(response.data);
        })} catch(e) {
            console.log(e);
        }
    }

    let messages = []
    // get 요청
    const GetReceivedMsg = async () => {
        const msg = await axios.get('/dm/').then((res) => {return res.data});
        // console.log(msg[0].message) -> 이렇게 쓰는 거 먹힘...
        // msg.map((item, idx) =>
        // console.log("item", item, "idx", idx)
        // )
        messages = msg.map((item, idx) => 
        ({ 
            _id: msg[idx]._id,
            sendId: msg[idx].sendId,
            receiveId: msg[idx].receiveId,
            message: msg[idx].message,
            time: msg[idx].time,
            doneId: msg[idx].doneId,    
        }))

        // 여기선 값이 들어가있는데 함수 밖으로 나가면 없음..
        //console.log(messages)
    }

    useEffect(() => {
        GetReceivedMsg();
        // 여긴 안 들어옴
        console.log(messages)
    })

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