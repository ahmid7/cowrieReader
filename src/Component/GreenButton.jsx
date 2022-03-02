import React from 'react'
import { useState } from 'react'

const GreenButton = (props) => {
   const [ buttonclick, setButtonClick ] = useState(false)

   function handleButton(){
    props.handleButton()
    setButtonClick(true)
  }

  return (
    <div>
        <div className={`w-[95px] h-[95px] lg:w-[105px] lg:h-[105px] cursor-pointer design-border-outer-green flex-center rounded-full border-green ${props.buttonValue === "Consulting" ? 'w-[95px] h-[95px] lg:w-[110px] lg:h-[110px]' : ""} ${buttonclick ? 'animate-spins' : ''}`} onClick = {handleButton}>
            <div className={`bg-dark-blue w-[83px] h-[83px] lg:w-[92px] lg:h-[92px] rounded-full flex-center ${props.buttonValue === "Consulting" ? 'w-[95px] h-[95px]  lg:w-[95px] lg:h-[95px]' : ""}`}>
                <div className={`w-16 h-16 lg:w-[70px] lg:h-[70px] design-border-inner-green rounded-full flex-center font-normal text-sm text-green border-green ${props.buttonValue === "Consulting" ? 'w-[65px] h-[65px] text-[0.7rem] lg:text-xs lg:w-[85px] lg:h-[85px]' : ""}`}>
                    <div className={`bg-dark-blue w-[60px] h-[60px] lg:w-[65px] lg:h-[65px] flex-center rounded-full flex-center ${props.buttonValue === "Consulting" ? 'w-[72px] h-[72px] text-[0.7rem] lg:text-xs lg:w-[70px] lg:h-[70px]' : ""} ${buttonclick ? 'animate-spin-back' : ''}`}>
                        {props.buttonValue}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GreenButton