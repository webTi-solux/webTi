import '../styles/RadioButton.css';
import React, {useState} from "react";


// ModalCreateDL.js 에 들어가는 색상선택 컴포넌트.

function RadioButton() {
    // blue, pink, orange, green
    // #6582BB, #BA6AA4, #C7705E, #8BBB65
    //const DLcolors = ["blue", "pink", "orange", "green"];
    const [DLcolor, setDLColor] = useState("blue");

    return (
            <label className='radioBtn'>
                <input className='selectBtn'
                    name='color'
                    type="radio"
                    onChange= {() => setDLColor("blue")}
                    checked={DLcolor === "blue"} />
                <span className='custom-radio'></span>
                <div className='colorBar-blue' color={DLcolor}></div>

                <input className='selectBtn'
                    name='color'
                    type="radio"
                    onChange= {() => setDLColor("pink")}
                    checked={DLcolor === "pink"} />
                <span className='custom-radio'></span>
                <div className='colorBar-pink' color={DLcolor}></div>
                
                <input className='selectBtn'
                    name='color'
                    type="radio"
                    onChange= {() => setDLColor("orange")}
                    checked={DLcolor === "orange"} />
                <span className='custom-radio'></span>
                <div className='colorBar-orange' color={DLcolor}></div>

                <input className='selectBtn'
                    name='color'
                    type="radio"
                    onChange= {() => setDLColor("green")}
                    checked={DLcolor === "green"} />
                <span className='custom-radio'></span>
                <div className='colorBar-green' color={DLcolor}></div>
            </label>
        
    );
}

export default RadioButton;