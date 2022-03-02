import React from 'react'
import { useState } from 'react'

const WhiteButton = (props) => {
  const [ buttonclick, setButtonClick ] = useState(false)

  function handleButton(){
      props.handleButton()
      setButtonClick(true)
  }
  return (
    <div>
        <div className={`w-[72px] h-[72px] lg:w-[85px] lg:h-[85px] flex-center rounded-full design-border-outer-white flex-center cursor-pointer ${buttonclick ? 'animate-spins' : ''}`} onClick ={handleButton}>
            <div className="w-[64px] h-[64px] lg:w-[75px] lg:h-[75px] bg-dark-blue rounded-full flex-center">
                <div className="lg:w-14 lg:h-14 w-[50px] h-[50px] design-border-inner-white rounded-full flex-center  text-xs">
                    <div className={`bg-dark-blue w-[46px] h-[46px] lg:w-[52px] lg:h-[52px] rounded-full flex-center ${buttonclick ? 'animate-spin-back' : ''}`}>
                        {props.buttonValue}
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default WhiteButton