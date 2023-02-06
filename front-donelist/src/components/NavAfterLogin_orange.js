import React, {Component} from 'react';
import "../styles/fixedNav.css"
import { Link } from 'react-router-dom';

class NavAfterLogin extends Component {
	render(){
        const toLogout = () => {
            // sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
              sessionStorage.removeItem('userId')
              sessionStorage.removeItem('userNick')
              sessionStorage.removeItem('userPw')
              sessionStorage.removeItem('userAdYear')

              // App 으로 이동(새로고침)
              
          }
		
        return (
            <div>
            <nav className="nav3">
                <input className="search-box"
                type="search"
                placeholder="  해시태그 검색"></input>
                <ul>
                    <Link to="/main"><li><button className="topBar">홈</button></li></Link>
                    <Link to="/mypage"><li><button className="topBar">마이페이지</button></li></Link>
                    <Link to="/"><li><button className="topBar" onClick={toLogout}>로그아웃</button></li></Link>
                    <Link to="/how-to-use"><li><button className="topBar">이용방법</button></li></Link>
                </ul>
                </nav>   
            </div>
        );
	}
}

export default NavAfterLogin;