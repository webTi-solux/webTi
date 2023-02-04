import React, {Component} from 'react';
import NavAfterLogin from './NavAfterLogin';
import UnderBar from './UnderBar';
import "../styles/AllAboutMsg.css";
import styled from 'styled-components';

function ReceivedMsgItem({message}) {
    
    const { id, title, content, userId, dateString } = message;
    
    return (
    <div className="received-msg-items">
        <span className='received-msg-id'>{id}</span>
        <span className='received-msg-title'>{title}</span>
        <span className='received-msg-userId'>{userId}</span>
        <span className='received-msg-dateString'>{dateString}</span>
    </div>
    );
}

export default ReceivedMsgItem;