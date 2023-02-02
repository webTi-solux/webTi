import { useEffect, useState } from "react";
import React, {Component} from 'react';
import styled from "styled-components";

const Info_period = styled.div`
position: absolute;
float:left;
margin-top: 50px;
margin-left: 695px;
font-family: "맑은고딕";
`;

function Period({startDate, finishDate}) {
    const [date, setDate] = useState([
        new Date(startDate),
        new Date(finishDate)
    ]);

    return (
        <div>
        <Info_period>
            yy.mm ~ yy.mm
        </Info_period>
        </div>
    );
}

export default Period;