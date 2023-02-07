import { useEffect, useState } from "react";
import NavAfterLogin from "./NavAfterLogin_blue";
import UnderBar from "../components/UnderBar";
import { renderMatches, useLocation, useResolvedPath } from "react-router-dom";
import "../styles/likedList.css";
import { Link } from "react-router-dom";

const LikedList= ({doneId}) => {
    console.log(doneId)
        return (
            <div>
                <div className="liked-list-items">
                    <Link to={`/visit-detail/${doneId._id}`}><div className="liked-text">
                        <p>{doneId.userId.Nickname}의 DoneList</p>
                        
                    </div></Link>
                </div>

            </div>      
    );
}

export default LikedList;