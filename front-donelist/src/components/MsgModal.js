import { useEffect, useState } from "react";
import React, {Component} from 'react';
import Modal from 'react-modal';
import styled from "styled-components";
import "../styles/MsgModal.css";
import { useNavigate } from "react-router-dom";

function MsgModal(props) {
    function closeModal() {
        props.closeModal();
    }
    const [msgState, setMsgState] = useState({
        msgTitle:"",
        msgContent:"",
        }
    );
    const navigate = useNavigate();
    const handleChangeMsgState = (e) => {
        e.preventDefault();
        setMsgState({
            ...msgState,
            [e.target.name]: e.target.value,
        });
    }

    const handleMsgSubmit =(e) => {
        e.preventDefault();
        //console.log(msgState);
        /*navigate('/received-msg-page-detail', {state : { messageTitle : msgState.msgTitle, 
        messageContent: msgState.msgContent },
        });*/
    }

    return (
        <div className="msgModal">
        <div className="msgmodalBody">
            <button className="msgmodalCloseBtn" type="button" onClick={closeModal}>
            ✖</button>
            <form>
            <div className="msgmodal-title">제목</div>
            <input className="msgmodal-title-txtarea" 
            name="msgTitle" value={msgState.msgTitle}
            onChange={handleChangeMsgState}></input>

            <div className="msgmodal-contents">내용</div>
            <textarea className="msgmodal-contents-txtarea" 
            name="msgContent" value={msgState.msgContent} 
            onChange={handleChangeMsgState}></textarea>
            <div>
        <button className="msgmodal-sendBtn" type="submit" onClick={handleMsgSubmit}>쪽지 보내기</button>
        </div>
            </form>
        </div>
        <div></div>
        </div>
    );
}

export default MsgModal;