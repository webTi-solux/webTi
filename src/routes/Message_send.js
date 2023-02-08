import { useEffect, useState } from "react";
import { useLocation, useParams } from 'react-router-dom';
import React, {Component} from 'react';
import NavAfterLogin from "../components/NavAfterLogin_blue";
import UnderBar from "../components/UnderBar";
import "../styles/AllAboutMsg.css";
import styled from "styled-components";
import axios from "axios";
import Messagedetail from "../components/Messagedetail_send.js"

function Message_receive() {
    

    let { msgid } = useParams();

    const [message, getMessage] = useState([]);
    const getMessages = async () => {
        const Msgs = await axios.get('/dm/receive/' + msgid +'/').then((res) => {
            return res.data
        })
        console.log(Msgs)

        getMessage(Msgs)


    }

    useEffect(() => {
        getMessages();
        console.log(message)

    },)


    return (
        <div>
            <NavAfterLogin/>
            <div>
                <Messagedetail message={message}/>
            </div>
        <UnderBar/>
        </div>
    );
}

export default Message_receive;