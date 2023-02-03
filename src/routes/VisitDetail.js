import { useEffect, useState } from "react";
import React, {Component} from 'react';
import { useParams } from "react-router-dom";
import Visit_blue from "../components/Visit_blue";
import axios from "axios";
import NavAfterLogin from "../components/NavAfterLogin";


function VisitDetail() {

   
    let { doneId } = useParams();
    const [donelist, getDonelist] = useState([]);
    const getDonelists = async() => {

    const donelists = await axios.get('/donelist/' + doneId).then((res) => res.data)
    
    getDonelist(donelists)
    }
      
    

    useEffect(() => {
        getDonelists();
    }, [])


    return (
    <div>
        <NavAfterLogin/>
        <Visit_blue donelist={donelist}/>
    </div>
    );
}

export default VisitDetail;
