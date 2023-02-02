import { useEffect, useState, useRef } from "react";
import React, {Component} from 'react';
import styled from "styled-components";
import "../styles/WriteDetail.css"
import Period from "../components/Period";

const WriteInfo_title = styled.div`
float:left;
font-family: "BlackOpsOne";
color: white;
background-color: ${props => props.color || "#6582BB"};
width: 500px;
height: 40px;
line-height: 40px;
border-radius: 20px;
font-size: 25px;
text-align: center;
margin-top: 35px;
margin-left: 185px;
`;


const WriteQ1_question = styled.div`
float:left;
margin-top: 110px;
margin-left: -500px;
font-family: "BlackOpsOne";
font-size: 20px;
color: ${props => props.color || "#6582BB"};
`;

const WriteQ1_area = styled.textarea`
border-radius: 10px;
    width: 1000px;
    height: 80px;
    background-color: transparent;
    border-color: ${props => props.color || "#6582BB"};
    border-width: 3px;
    margin-left: 185px;
    margin-top: 65px;
    resize: none;
`;

const WriteQ2_question = styled.div`
margin-top: 30px;
margin-left: 185px;
font-family: "BlackOpsOne";
font-size: 20px;
color:  ${props => props.color || "#6582BB"};
`;

const WriteQ2_area = styled.textarea`
border-radius: 10px;
width: 1000px;
height: 100px;
background-color: transparent;
border-color: ${props => props.color || "#6582BB"};
border-width: 3px;
margin-left: 185px;
margin-top: 10px;
resize: none;
`;

const WriteQ3_question = styled.div`
margin-top: 30px;
    margin-left: 185px;
    font-family: "BlackOpsOne";
    font-size: 20px;
    color:  ${props => props.color || "#6582BB"};
`;

const WriteQ3_area = styled.textarea`
    border-radius: 10px;
    width: 1000px;
    height: 100px;
    background-color: transparent;
    border-color: ${props => props.color || "#6582BB"};
    border-width: 3px;
    margin-left: 185px;
    margin-top: 10px;
    resize: none;
`;

function WriteDetail_orange() {

    const [state, setState] = useState({
        writeWhatis:"",
        writeWhatdidyoudo:"",
        writeEpisode:"",
        }
    );

    const handleChangeState = (e) => {
        e.preventDefault();
        
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    {/*const movePage = useNavigate();
    function writePost(){
        movePage('/visit-detail');
        console.log('move to here',state);
    }*/}

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(state);
        //writePost();
    }

    let activityTag = ["# 공모전", "# 동아리", "# 학회", "# 서포터즈", "# 인턴"];
    let majorTag = ["# 상경계열", "# 자연계열", "# 공과계열", "# 어문계열", "# 인문계열", "# 예체능계열"];

    let [activityTagActive, setactivityTagActive] = useState("");
    let [majorTagActive, setmajorTagActive] = useState("");

    const toggleActive1 = (e) => {
        setactivityTagActive((prev) => {
        e.preventDefault();
        return e.target.value;
        });
        console.log(e.target.value);
    };

    const toggleActive2 = (e) => {
        setmajorTagActive((prev) => {
        e.preventDefault();
        return e.target.value;
        });
        console.log(e.target.value);
    };

    return (
        <form>
            <div>
            <WriteInfo_title color="#C7705E">Programming Club "SOLUX"</WriteInfo_title>
            <Period/>
            </div>
            <div>
            <WriteQ1_question color="#C7705E">WHAT IS ? </WriteQ1_question>
            <WriteQ1_area name="writeWhatis" color="#C7705E"
            value={state.writeWhatis} onChange={handleChangeState}
            maxLength={200} placeholder="어떤 활동이었는지 간단히 소개해주세요"></WriteQ1_area>
            </div>
            <div>
            <WriteQ2_question color="#C7705E">WHAT DID YOU DO ? </WriteQ2_question>
            <WriteQ2_area name="writeWhatdidyoudo" color="#C7705E"
            value={state.writeWhatdidyoudo} onChange={handleChangeState}
            maxLength={350} placeholder="구체적으로 어떤 일을 했는지(맡은 역할 등) 소개해주세요"></WriteQ2_area>
            </div>
            <div>
            <WriteQ3_question color="#C7705E">EPISODE or ADVICE ? </WriteQ3_question>
            <WriteQ3_area name="writeEpisode" color="#C7705E"
            value={state.writeEpisode} onChange={handleChangeState}
            maxLength={350} placeholder="이 활동이 자신에게 특히 어떤 도움을 주었는지, 기억에 남는 부분은 무엇이었는지 등 자유롭게 소개해주세요"></WriteQ3_area>
            </div>
            <div className="WriteOrange-letsHashtag" >Hashtag</div>
            <div className="WriteOrange-hashtag-activity">
        {activityTag.map((item1,idx1) => {
        return (
            <>
            <button key={idx1}
            value={item1}
            className={"WriteOrange-hashtagBtn-act" + (item1 == activityTagActive ? "-active" : "")}
            onClick={toggleActive1}
            >
            {item1}
            </button>
        </>
        );
    })}
    </div>
    <div className="WriteOrange-hashtag-major">
    {majorTag.map((item2, idx2) => {
        return (
            <>
            <button key={idx2}
            value={item2}
            className={"WriteOrange-hashtagBtn-major" + (item2 == majorTagActive ? "-active" : "")}
            onClick={toggleActive2}
            >
            {item2}
            </button>
        </>
        );
    })}
    </div>
    <div>
        <button className="write-complete-orange" onClick={handleSubmit}>COMPLETE</button>
    </div>
            </form>
    );
}

export default WriteDetail_orange;
