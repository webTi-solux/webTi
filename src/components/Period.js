import { useEffect, useState } from "react";
import React, {Component} from 'react';
import styled from "styled-components";
import moment from 'moment';

const Info_period = styled.div`
position: absolute;
float:left;
margin-top: 50px;
margin-left: 695px;
font-family: "맑은고딕";
font-size: 20px;
`;

function Period({start, finish}) {
    const startDate = moment(start).format('YYYY.MM')
    const finishDate = moment(finish).format('YYYY.MM')

    useEffect(() => {
        sessionStorage.setItem("startDate", startDate)
        sessionStorage.setItem("finishDate", finishDate)
    }, [])


    return (
        <div>
        <Info_period>
            {startDate} ~ {finishDate}
        </Info_period>
        </div>
    );
}

export default Period;