import { useEffect, useState, useRef } from "react";
import React, {Component} from 'react';
import styled from "styled-components";
import "../styles/WriteDetail.css"
import Period from "../components/Period";
import axios from "axios";

const WriteInfo_title = styled.div`
float:left;
font-family: "BlackOpsOne";
color: white;
background-color: ${props => props.color || "#BA6AA4"};
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
color: ${props => props.color || "#BA6AA4"};
`;

const WriteQ1_area = styled.textarea`
border-radius: 10px;
    width: 1000px;
    height: 80px;
    background-color: transparent;
    border-color: ${props => props.color || "#BA6AA4"};
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
color:  ${props => props.color || "#BA6AA4"};
`;

const WriteQ2_area = styled.textarea`
border-radius: 10px;
width: 1000px;
height: 100px;
background-color: transparent;
border-color: ${props => props.color || "#BA6AA4"};
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
    color:  ${props => props.color || "#BA6AA4"};
`;

const WriteQ3_area = styled.textarea`
    border-radius: 10px;
    width: 1000px;
    height: 100px;
    background-color: transparent;
    border-color: ${props => props.color || "#BA6AA4"};
    border-width: 3px;
    margin-left: 185px;
    margin-top: 10px;
    resize: none;
`;

function WriteDetail_pink() {




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

    // post
    const handleSubmit = async (e) => {
        e.preventDefault();

        // setState((prevState) => ({
        //     ...prevState,
        //     Activity: activityTagActive,
        //     Major: majorTagActive,
        // }))

            console.log(state);


        // writePost();
        // activity, major (해시태그) 안 들어감
        // 날짜 선택 안 할 경우 undefined로 들어감 -> 해결
        try {
            await axios.post('/donelist/', state)
            .then((response) => {
                sessionStorage.removeItem('DLColor')
                sessionStorage.removeItem('Title')
                sessionStorage.removeItem('finishDate')
                sessionStorage.removeItem('startDate')
            })} catch(e) {
                console.log(e);
            }
    }

    let activityTag = ["# 공모전", "# 동아리", "# 학회", "# 서포터즈", "# 인턴", "# 교내활동"];
    let majorTag = ["# 상경계열", "# 자연계열", "# 공과계열", "# 어문계열", "# 인문계열", "# 예체능계열", "# 기타"];

    let [activityTagActive, setactivityTagActive] = useState("");
    let [majorTagActive, setmajorTagActive] = useState("");

    const toggleActive1 = (e) => {
        setactivityTagActive(e.target.value);
        setState({
            ...state,
            Activity: e.target.value,
        });
            e.preventDefault();
    };

    const toggleActive2 = (e) => {
        setmajorTagActive(e.target.value);
        setState({
            ...state,
            Major: e.target.value,
        });
        e.preventDefault();
    };

    const [state, setState] = useState({
        Whatis:"",
        Whatdid:"",
        Episode:"",
        title: sessionStorage.Title,
        startDate: sessionStorage.startDate,
        finishDate: sessionStorage.finishDate,
        Major: majorTagActive,
        Activity: activityTagActive,
        Colorcode: sessionStorage.DLColor,
        userId: sessionStorage.userId
        }
    );

    return (
        <form>
            <div>
            <WriteInfo_title color="#BA6AA4">{sessionStorage.Title}</WriteInfo_title>
            <Period/>
            </div>
            <div>
            <WriteQ1_question color="#BA6AA4">WHAT IS ? </WriteQ1_question>
            <WriteQ1_area name="Whatis" color="#BA6AA4"
            value={state.Whatis} onChange={handleChangeState}
            maxLength={200} placeholder="어떤 활동이었는지 간단히 소개해주세요"></WriteQ1_area>
            </div>
            <div>
            <WriteQ2_question color="#BA6AA4">WHAT DID YOU DO ? </WriteQ2_question>
            <WriteQ2_area name="Whatdid" color="#BA6AA4"
            value={state.Whatdidyoudo} onChange={handleChangeState}
            maxLength={350} placeholder="구체적으로 어떤 일을 했는지(맡은 역할 등) 소개해주세요"></WriteQ2_area>
            </div>
            <div>
            <WriteQ3_question color="#BA6AA4">EPISODE or ADVICE ? </WriteQ3_question>
            <WriteQ3_area name="Episode" color="#BA6AA4"
            value={state.Episode} onChange={handleChangeState}
            maxLength={350} placeholder="이 활동이 자신에게 특히 어떤 도움을 주었는지, 기억에 남는 부분은 무엇이었는지 등 자유롭게 소개해주세요"></WriteQ3_area>
            </div>
            <div className="WritePink-letsHashtag" >Hashtag</div>
            <div className="WritePink-hashtag-activity">
        {activityTag.map((item1,idx1) => {
        return (
            <>
            <button key={idx1}
            value={item1}
            className={"WritePink-hashtagBtn-act" + (item1 == activityTagActive ? "-active" : "")}
            onClick={toggleActive1}
            >
            {item1}
            </button>
        </>
        );
    })}
    </div>
    <div className="WritePink-hashtag-major">
    {majorTag.map((item2, idx2) => {
        return (
            <>
            <button key={idx2} 
            value={item2}
            className={"WritePink-hashtagBtn-major" + (item2 == majorTagActive ? "-active" : "")}
            onClick={toggleActive2}
            >
            {item2}
            </button>
        </>
        );
    })}
    </div>
    <div>
        <button className="write-complete-pink" onClick={handleSubmit}>COMPLETE</button>
    </div>
            </form>
    );
}

export default WriteDetail_pink;