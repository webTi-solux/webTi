import { useEffect, useState } from "react";
import React, {Component} from 'react';
import styled from "styled-components";
import EmptyHeartImg from "../imgs/emptyheart.png";
import FullHeartImg from "../imgs/fullheart.png";
import "../styles/Btns.css";
import LikedList from "./LikedList";
import { useNavigate } from "react-router-dom";

const LikeBtn = (props) => {

    const [state, setState] = useState({
        isChecked: false,
    })

    const [liked, setLiked] = useState({
        ownerId : "hyeyoon20", // 좋아요 받은 던리스트 주인 아이디
        userId : "minjin" // 방문해서 누른 사람
    }) //좋아요 버튼 관련 state로 설정. 아직 onclick이벤트 시 콘솔창에 던리스트 주인 아이디가 찍히게만 설정해둔 상태
    // 이 정보가 마이페이지의 '내가좋아요를누른던리스트'로 넘어가도록 해야 하는데 방법을 찾지 못함...ㅜ

    const onClick = (e) => {
        e.preventDefault();
        if (state.isChecked == false) {
            setState({				
                isChecked: true,	
            });
            console.log(liked.ownerId)
        }
        else {
            setState({
                isChecked: false,	
            });
        }
    }

    return (
        <React.Fragment>
        <div>
            <div>
            {state.isChecked ?
            <button className="heartBtn" onClick={onClick}><img width="47px" src={FullHeartImg} /></button>
            : <button className="heartBtn" onClick={onClick}><img width="47px" src={EmptyHeartImg} /></button>}
            <div className="liked">좋아요</div>
            </div>
        </div>
        </React.Fragment>
    );
}


export default LikeBtn;