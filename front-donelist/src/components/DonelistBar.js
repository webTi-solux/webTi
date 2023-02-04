import { useEffect, useState } from "react";
import React, { Component } from "react";
import ModalCreateDL from "./ModalCreateDL";
import styled from "styled-components";
import Main from "../routes/Main";

// 미해결 : 던리스트가 스크롤 움직이면 따라 움직이지 않고 뷰포트 위치에 그대로 있음.

const DonelistBar = (props) => {
    //던리스트 시작 날짜, 끝난 날짜
    const title = props.donelist.title;
    const startYear = props.donelist.startY;
    const startMonth = props.donelist.startM;
    const endYear = props.donelist.endY;
    const endMonth = props.donelist.endM;
    // 위에서부터 몇 번째 던리스트인지, y축 계산 위함. index 값 받아옴.
    const orderY = props.donelist.index;
    const RIGHTAREA = 70;
    const TOPAREA = -530;

    // 던리스트 길이 계산 함수 
    const CalDLlength = () => {
        if (startMonth >= endMonth) {
            return (( 13 + endMonth - startMonth) + (endYear - startYear - 1)*12)*50;
        } 
        else
        { return ((endMonth - startMonth +1) + (endYear - startYear)*12)*50; }
    }

    // 던리스트 오른쪽 margin 길이 계산 함수 
    const CalRightMargin = () => {
        return (RIGHTAREA + ((12-endMonth)+(2023-endYear)*12) *50);
    }

    // 던리스트 top margin 계산 함수
    const CalTopMargin = () => {
        return (TOPAREA + 100 * orderY);
    }

    // 색상코드 찾아주는 함수
    const ColorCode = (color) => {
        if (color === "blue") {return "#6582BB"}
        else if (color === "pink") {return "#BA6AA4"}
        else if (color === "orange") {return "#C7705E"}
        else if (color === "green") {return "#8BBB65"}
    };

    // 한 자리 숫자 앞에 0 붙여 두자리 만들기
    const Zero = num => (num < 10) && (num >= 0) ? "0"+num : num;

    // 던리스트 길이, 오른쪽 margin 길이, top margin 길이, 색상코드
    const DLlength = CalDLlength();
    const RightMargin = CalRightMargin();
    const TopMargin = CalTopMargin();
    const color = ColorCode(props.donelist.color);


    const CreateDLContainer1 = styled.div`
    position: relative;
    display: flex;
    flex-direction: row-reverse;
`;

    const CreateDLContainer2 = styled.div`
    position: absolute;
    width: ${DLlength}px;
    height: 100px;
    margin-right: ${RightMargin}px;
    margin-top: ${TopMargin}px;
`;

// 던리스트
    const CreateDL = styled.div`
    position: absolute;
    width: ${DLlength}px;
    height: 40px;
    background-color: ${color};
    border-radius: 50px;
`;

// 던리스트 - 제목 (title)
const CreateDLname = styled.span`
    position: absolute;
    width: max-content;
    height: auto;
    margin-top: 50px;
    margin-left: 10px;
    color: ${color};
    font-family: "BlackOpsOne";
    font-size: 22px;
`;

// 던리스트 - 날짜 
const CreateDLDate = styled.span`
    position: absolute;
    width: max-content;
    height: auto;
    margin-top: 75px;
    margin-left: 10px;
    color: #828282;
    font-family: "BlackOpsOne";
    font-size: 15px;
`;

    return (
        <CreateDLContainer1>
            <CreateDLContainer2>
                <CreateDL />
                <CreateDLname>{title}</CreateDLname>
                <CreateDLDate>{startYear-2000}.{Zero(startMonth)} - {endYear-2000}.{Zero(endMonth)}</CreateDLDate>
            </CreateDLContainer2>
        </CreateDLContainer1>
    );
}

export default DonelistBar;