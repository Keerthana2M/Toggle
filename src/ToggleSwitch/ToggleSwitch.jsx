import { useState } from "react";
import "./ToggleSwitch.css";
export  const ToggleSwitch = ()=>{
    const[isOn,setIsOn] =useState(false);
    const handleToggleSwitch = ()=>{
        setIsOn(!isOn);
    }
    const checkIsOn = isOn? "on":"off";
    const toggleBGColor ={ backgroundColor: isOn ? "#4caf50":"#f44336"};
      return(
        <div className="Toggle-switch" style={toggleBGColor} onClick={handleToggleSwitch}>
            <div className={`Switch ${checkIsOn}`}>
                <span className="Switch-state">{checkIsOn}</span>
            </div>
        </div>
      )
}