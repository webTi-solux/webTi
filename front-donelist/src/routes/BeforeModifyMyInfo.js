import '../styles/BeforeModifyMyInfo.css';
import logo from "../imgs/webTi_logo.png";
import NavAfterLogin from "../components/NavAfterLogin_blue";
import UnderBar from "../components/UnderBar";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

// 내 정보 수정 화면에 들어가기 전, 계정 확인 화면. 로그인 화면과 유사.

function BeforeModifyMyInfo() {

    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('');

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const history = useNavigate();
    const onClickBmod = async () => {
        const users = await axios.get('/member/' + inputId+"/").then((res) => {return res.data});
        
        console.log(users)
    
        try{
        
        if (users.status === 404) {
        alert("아이디가 존재하지 않거나 바르지 않습니다.");
        } else if (users.Password !== inputPw) {
        alert("비말번호가 바르지 않습니다.");
        }
        else {
        history(`/modify-my-info-page`);
        }
        } catch (error) {
    
        //실패하면 throw new Error("") 값 출력
        window.alert(error);
    }
    }
return (
    <div>
    <NavAfterLogin/>
    <div className="b-mod-main">
    <div className="b-mod-sub-main">
        <div className="b-mod-imgs">
            <div className="b-mod-container-image">
            <img src={logo} alt="logo" className="b-mod-logo"/>
            </div>
        </div>
        <div className='b-mod-first-input'>
            <div className='b-mod-v-line'></div>
            <span className="b-mod-text-id">ID</span>
            <input className="b-mod-user-id" value={inputId} onChange={handleInputId} type="text"/>
        </div>
        
        <div className="b-mod-second-input">
            <div className="b-mod-v-line2"></div>
            <span className="b-mod-text-pwd">Password</span>
            <input className="b-mod-user-pwd" value={inputPw} onChange={handleInputPw} type="password"/>
        </div>
        
        <div className="b-mod-button">
            <button className="b-mod-button-Ui" onClick={onClickBmod}>정보 수정</button>
        </div>
    </div>
    </div>
    <UnderBar/>
    </div>
);
}

export default BeforeModifyMyInfo;