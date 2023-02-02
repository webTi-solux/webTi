import { useEffect, useState } from "react";
import NavAfterLogin from "../components/NavAfterLogin";
import UnderBar from "../components/UnderBar";
import { renderMatches, useLocation, useResolvedPath } from "react-router-dom";
import "../styles/likedList.css";

const LikedList= (props) => {
        return (
            <div className="list-area">
                <div className="liked-list-items">
                </div>

            </div>      
    );
}

export default LikedList;