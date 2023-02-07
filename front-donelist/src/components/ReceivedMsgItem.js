import React, {Component} from 'react';
import NavAfterLogin from './NavAfterLogin_blue';
import UnderBar from '../components/UnderBar';
import "../styles/AllAboutMsg.css";
import styled from 'styled-components';

function ReceivedMsgItem({messages}) {
    
    // _id, sendId, receivedId, message, time, doneId
    const { id, sendId, receivedId, message, time, doneId } = messages;
    
    return (
    <div className="received-msg-items">
        <span className='received-msg-id'>{id}</span>
        <span className='received-msg-title'>{message}</span>
        <span className='received-msg-userId'>{sendId}</span>
        <span className='received-msg-dateString'>{time}</span>
    </div>
    );
}

export default ReceivedMsgItem;