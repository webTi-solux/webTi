import { useEffect, useState } from "react";
import { useLocation, useParams } from 'react-router-dom';
import React, {Component} from 'react';
import NavAfterLogin from "../components/NavAfterLogin_blue";
import UnderBar from "../components/UnderBar";
import "../styles/AllAboutMsg.css";
import styled from "styled-components";
import axios from "axios";
import Messagedetail from "../components/Messagedetail_receive.js"

function Message_receive() {
    

    let { msgid } = useParams();
    const [msg, getMsg] = useState([]);




    return (
        <div>
            <NavAfterLogin/>
            <div>
                <Messagedetail msgid={msgid}/>
            </div>
        <UnderBar/>
        </div>
    );
}

export default Message_receive;