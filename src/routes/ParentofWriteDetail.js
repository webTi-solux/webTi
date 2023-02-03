import NavAfterLogin from "../components/NavAfterLogin";
import { useEffect, useState } from "react";
import React, {Component} from 'react';
import BlueVersion from "../components/WriteDetail_blue";
import OrangeVersion from "../components/WriteDetail_orange";
import GreenVersion from "../components/WriteDetail_green";
import PinkVersion from "../components/WriteDetail_pink";

function WriteDetail() {
    return (
        <div>
            <div><NavAfterLogin/></div>
            <div><BlueVersion/></div> 
            {/* or <OrangeVersion/> or <GreenVersion/> or <PinkVersion/> */}
        </div>
    );
}

export default WriteDetail;