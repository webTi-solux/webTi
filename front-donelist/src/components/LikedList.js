import { useEffect, useState } from "react";
import NavAfterLogin from "./NavAfterLogin_blue";
import UnderBar from "../components/UnderBar";
import { renderMatches, useLocation, useResolvedPath } from "react-router-dom";
import "../styles/likedList.css";
import { Link } from "react-router-dom";
import axios from "axios";

const LikedList= ({doneId}) => {
    //console.log(doneId.userId)

    const [likedUserNick, setLikedUserNick] = useState()

    useEffect(()=> {
        axios.get("/member/" + doneId.userId + '/').then((res) => {

            let nickfilter = res.data.Nickname;

            setLikedUserNick(nickfilter)
    })}, [])

    // css 수정 -> '닉네임'의 '활동명' 앞에 D 로고 같은 거 넣으면 좋을 듯
        return (
            <div>
                <div className="liked-list-items">
                    <Link to={`/visit-detail/${doneId._id}`}><div className="liked-text">
                        <p>{likedUserNick}의 "{doneId.title}"</p>
                    </div></Link>
                </div>

            </div>      
    );
}

export default LikedList;