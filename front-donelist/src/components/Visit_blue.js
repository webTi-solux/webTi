import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import React, { Component } from "react";
import NavAfterLogin from "./NavAfterLogin_blue";
import styled from "styled-components";
import toSendingMsg from "../imgs/MsgBtn.png";
import Period from "./Period";
import LikeBtn from "./LikeBtn";
import Comment from "./Comment";
import WriteMessage from "./MsgModal";
import axios from "axios";

const VisitInfo_title = styled.div`
  position: absolute;
  font-family: "BlackOpsOne";
  color: white;
  background-color: ${(props) => props.color || "#6582BB"};
  width: 500px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  font-size: 25px;
  text-align: center;
  margin-top: 35px;
  margin-left: 100px;
`;

const VisitQ1_question = styled.div`
  position: absolute;
  margin-top: 95px;
  margin-left: 100px;
  font-family: "BlackOpsOne";
  font-size: 20px;
  color: ${(props) => props.color || "#6582BB"};
`;

const VisitQ1_area = styled.div`
  position: absolute;
  border-radius: 10px;
  width: 800px;
  height: 100px;
  background-color: transparent;
  border-width: 3px;
  border: solid ${(props) => props.color || "#6582BB"};
  margin-left: 100px;
  margin-top: 120px;
`;

const VisitQ2_question = styled.div`
  position: absolute;
  margin-top: 250px;
  margin-left: 100px;
  font-family: "BlackOpsOne";
  font-size: 20px;
  color: ${(props) => props.color || "#6582BB"};
`;

const VisitQ2_area = styled.div`
  position: absolute;
  border-radius: 10px;
  width: 800px;
  height: 120px;
  background-color: transparent;
  border-width: 3px;
  border: solid ${(props) => props.color || "#6582BB"};
  margin-left: 100px;
  margin-top: 280px;
`;

const VisitQ3_question = styled.div`
  position: absolute;
  margin-top: 450px;
  margin-left: 100px;
  font-family: "BlackOpsOne";
  font-size: 20px;
  color: ${(props) => props.color || "#6582BB"};
`;

const VisitQ3_area = styled.div`
  position: absolute;
  border-radius: 10px;
  width: 800px;
  height: 120px;
  background-color: transparent;
  border-width: 3px;
  border: solid ${(props) => props.color || "#6582BB"};
  margin-left: 100px;
  margin-top: 480px;
`;

const Activity_Tag_Area = styled.div`
  position: absolute;
  margin-top: 630px;
  margin-left: 100px;
  background-color: ${(props) => props.color || "#6582BB"};
  width: 100px;
  border-radius: 20px;
  height: 30px;
  color: white;
  text-align: center;
  line-height: 30px;
  font-family: "나눔스퀘어";
  font-weight: bold;
`;

const Major_Tag_Area = styled.div`
  position: absolute;
  margin-top: 630px;
  margin-left: 220px;
  background-color: ${(props) => props.color || "#6582BB"};
  width: 100px;
  border-radius: 20px;
  height: 30px;
  color: white;
  text-align: center;
  line-height: 30px;
  font-family: "나눔스퀘어";
  font-weight: bold;
`;

const Visit_Btn_Area = styled.div`
  position: absolute;
  border-radius: 35px;
  width: 350px;
  height: 75px;
  background-color: ${(props) => props.color || "#6582BB"};
  margin-left: 980px;
  margin-top: 190px;
`;

const Visit_blue = ({ donelist }) => {
  const [popup, setPopup] = useState(false);
  //console.log('state', location.state);

  const seeQ1 = donelist.Whatis;
  const seeQ2 = donelist.Whatdid;
  const seeQ3 = donelist.Episode;
  const seeActTag = donelist.Activity;
  const seeMajorTag = donelist.Major;

  return (
    <div>
      <div>
        <VisitInfo_title>{donelist.title}</VisitInfo_title>
        <div>
          <Period start={donelist.startDate} finish={donelist.finishDate} />
        </div>
        <div>
          <VisitQ1_question>WHAT IS ? </VisitQ1_question>
          <VisitQ1_area>{seeQ1}</VisitQ1_area>
        </div>
        <div>
          <VisitQ2_question>WHAT DID YOU DO ? </VisitQ2_question>
          <VisitQ2_area>{seeQ2}</VisitQ2_area>
        </div>
        <div>
          <VisitQ3_question>EPISODE or ADVICE ?</VisitQ3_question>
          <VisitQ3_area>{seeQ3}</VisitQ3_area>
        </div>
        <Activity_Tag_Area>{seeActTag} </Activity_Tag_Area>
        <Major_Tag_Area>{seeMajorTag}</Major_Tag_Area>
        {sessionStorage.userId !== donelist.userId ? (
          <div>
            <Visit_Btn_Area>
              <LikeBtn doneId={donelist._id} />
              <div>
                <button
                  type="button"
                  className="MessageBtn"
                  onClick={() => setPopup(!popup)}
                >
                  <img width="47px" src={toSendingMsg} />
                </button>
                <div className="sendingMsg">쪽지</div>
              </div>
              <Comment />
              {popup && (
                <WriteMessage
                  closeModal={() => setPopup(!popup)}
                ></WriteMessage>
              )}
            </Visit_Btn_Area>
          </div>
        ) : (
          <div>
            <Visit_Btn_Area>
              <div>
                <p className="modifydone">수정하기</p>
              </div>
            </Visit_Btn_Area>
          </div>
        )}
      </div>
    </div>
  );
};

export default Visit_blue;
