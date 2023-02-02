import NavAfterLogin from "../components/NavAfterLogin";
import { useEffect, useState } from "react";
import React, {Component} from 'react';
import VisitBlue from "../components/Visit_blue";

function VisitDetail() {
    return (
        <div>
            <NavAfterLogin/>
            <VisitBlue/>
        </div>
    );
}

export default VisitDetail;