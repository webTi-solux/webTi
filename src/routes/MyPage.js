import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../styles/myPage.css"
import NavAfterLogin from "../components/NavAfterLogin";
import UnderBar from "../components/UnderBar";
import dl_mini from "../imgs/donelist_mini.png";
import MyPageGreeting from "../components/MyPageGreeting";
import LikedList from "../components/LikedList";
import axios from "axios";

const MyPage = (props) => {
    const history = useNavigate();
    const onLogout = () => {
        // sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('userNick')
          // App 으로 이동(새로고침)
        history(`/`);

    }


    const [like, getLike] = useState([]);

    useEffect(() => {
        axios.get("/likecontent/").then((res) => {

            let likefilter = res.data.filter(x=> {
                return x.userId === sessionStorage.userId
            })

            getLike(likefilter)
    })}, [])

    return (
        <div>

        <NavAfterLogin/>
        <div className="profile">
        <p className="user-picture"></p>
        <MyPageGreeting />
        <button className="modify-Info">정보수정</button>
        <button className="log-out" onClick={onLogout}>로그아웃</button>
        </div>
        <img src={dl_mini} alt="dl_mini" className="img-DL"></img>
        <button className="directToDL">나의 던리스트 바로가기</button>
        <button className="mypage-receivedMsg">받은 쪽지함</button>
        <button className="sendMsg">보낸 쪽지함</button>
        <div>
        <button className="Title_myLiked">내가 좋아요를 누른 던리스트</button>
        </div>
        <div>
            {/*<button liked={liked} setLiked={setLiked} onClick={() => handleLiked()}>좋아요기능테스트</button>*/}
        </div>
        <LikedList />
        <UnderBar/>
        </div>
    );
}

export default MyPage;