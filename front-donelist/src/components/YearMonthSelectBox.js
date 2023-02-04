import '../styles/YearMonthSelectBox.css';
import React, {useState} from "react";
import ReactDOM from 'react-dom';
import ModalCreateDL from './ModalCreateDL';

// ModalCreateDL.js 에 들어가는 던리스트 날짜 선택하는 select box.

function YearMonthSelectBox() {
    const nowYear = 2024;
    // a = [1, 2, ..., 19, 20]
    const a = Array(20).fill().map((v, index) => index+1);
    // years = [2023, 2022, ... , 2005]
    const years = a.map(index => nowYear - index)
    const [selectYear, setSelectYear] = useState(years[0]);

    // months = [1, 2, 3, ... , 12]
    const months = Array(12).fill().map((v, index) => index + 1);
    const [selectMonth, setSelectMonth] = useState(months[0]);

    const Zero = num => (num < 10) && (num >= 0) ? "0"+num : num;

    return (
        <div className='selectbox'>
            <div className='selectbox-year'>
                <select onChange = {(e) => setSelectYear(e.target.value)} className='select-year'>
                    <option  selected disabled>Year</option>
                    {years.map(year => 
                    <option selected={year == selectYear} value={year}>{year}</option>
                    )}
                </select>
            </div>
                <span className='selectbox-comma'>.</span>
            <div className='selectbox-month'>
            <select onChange = {(e) => setSelectMonth(e.target.value)} className='select-month'>
                <option selected disabled>Month</option>
                {months.map(month => 
                <option selected={month == selectMonth} value={month}>{Zero(month)}</option>
                )}
            </select>
            </div>
        </div>
    );
}

//ReactDOM.render(<YearMonthSelectBox />, document.getElementById("root"));

export default YearMonthSelectBox;