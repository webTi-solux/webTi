import '../styles/ModalCreateDL.css';
import RadioButton from './RadioButton';
import { useEffect, useState } from "react";
import React, { Component } from "react";
import YearMonthSelectBox from './YearMonthSelectBox';
import DonelistBar from "./DonelistBar";

// 메인화면에서 던리스트 생성하는 모달 창
function ModalCreateDL({setModalOpen}) {

    // 모달 창 끄기
    const closeModal = () => {
        setModalOpen(false);
    }

    return(
        <div className="cdlw-container">
            <div className='cdlw-Graph-Color'>
                <span className='cdlw-choose'>Graph Color</span>
                <div>
                    <RadioButton />
                </div>
            </div>

            <div className='cdlw-Donelist-Name'>
                <span className='cdlw-choose' >Donelist Name</span>
                <input className='cdlw-input'/>
            </div>

            <div className='cdlw-Period'>
                <span className='cdlw-choose'>Period</span>
                <div className='cdlw-date'>
                <div className='cdlw-date-start'>
                    <YearMonthSelectBox />
                </div>
                    <span className='cdlw-date-hyp'> ~ </span>
                <div className='cdlw-date-done'>
                    <YearMonthSelectBox />
                </div>
                </div>
            </div>

            <div className='cdlw-buttons'>
                <button className='cdlw-add'
                onClick={<DonelistBar />}>Add</button>
                <button className='cdlw-cancel' onClick={closeModal}>Cancel</button>
            </div>
        </div>
    );
}

// add 버튼 누를 경우 : 입력받은 Donelist 정보 -> DB에 저장 후, main에서 새로고침..? 해야 함.

export default ModalCreateDL;