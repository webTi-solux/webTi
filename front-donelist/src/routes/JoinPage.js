import '../styles/JoinPage.css';
import logo from "../imgs/webTi_logo.png";
import NavBeforeLogin from "../components/NavBeforeLogin";
import UnderBar from "../components/UnderBar";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// 회원가입 페이지

function JoinPage () {
    return (
        <div>
        <NavBeforeLogin/>
        <div className="join-main">
            <div className="join-imgs">
                <div className="join-container-image">
                <img src={logo} alt="logo" className="join-logo"/>
                </div>
            </div>
            
            <div className="join-sub-main">            
                <div className='join-first-input'>
                    <div className='join-v-line'></div>
                    <span className="join-nickname">nickname</span>
                    <input className="join-input-nickname" type="text"/>
                </div>
                
                <div className="join-second-input">
                    <div className="join-v-line2"></div>
                    <span className="join-id">id</span>
                    <input className="join-input-id" type="text"/>
                </div>

                <div className='join-third-input'>
                    <div className='join-v-line3'></div>
                    <span className="join-pwd">password</span>
                    <input className="join-input-pwd" type="password"/>
                </div>
                
                <div className="join-fourth-input">
                    <div className="join-v-line4"></div>
                    <span className="join-cpwd">confrim pw</span>
                    <input className="join-input-cpwd" type="password"/>
                </div>

                <div className="join-fiveth-input">
                    <div className="join-v-line5"></div>
                    <span className="join-ad-year">입학년도</span>
                    <input className="join-input-ad-year" type="text"/>
                </div>
                
                <div className="sign-up-button">
                    <button className="sign-up-button-Ui">SIGN UP</button>
                </div>
            </div>
        </div>
    <UnderBar/>
    </div>
    );
}

export default JoinPage;