import React, {Component, useEffect} from 'react';
import "../styles/AllAboutMsg.css";
import ReceivedMsgItem from '../components/ReceivedMsgItem';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const MsgList = styled.ul`
    display: flex;
    align-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
`;

function ReceivedMsgList({ messages }) {

    useEffect(() => {
        return console.log(messages)
    })
    return (
    <div className='received-msg-item'>
        
        <MsgList >
        {messages.slice(0).reverse().map((message) => (
        <li><ReceivedMsgItem
        message={message}
        key={message._id}
        /><hr className='received-msg-line'/><br/><br/></li>
    ))}
        </MsgList>
    </div> 
    );
}

export default ReceivedMsgList;