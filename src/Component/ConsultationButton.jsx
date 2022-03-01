

const ConsultationButton = (props) => {
    // no way to use radial gradient for border-radius, use the divs to achieve that effect hence many divs
  return (
    <div className='text-white flex-center gap-x-4 md:gap-x-6 font-normal mt-10 md:mt-8 '>
        <div className="w-[72px] h-[72px] lg:w-[85px] lg:h-[85px] flex-center rounded-full design-border-outer-white flex-center" onClick ={() => props.clickRoute.whiteButton()}>
            <div className="w-[64px] h-[64px] lg:w-[75px] lg:h-[75px] bg-dark-blue rounded-full flex-center">
                <div className="lg:w-14 lg:h-14 w-[50px] h-[50px] design-border-inner-white rounded-full flex-center  text-xs">
                    <div className='bg-dark-blue w-[46px] h-[46px] lg:w-[52px] lg:h-[52px] rounded-full flex-center'>
                        {props.buttonValue.white}
                    </div>
                </div>
            </div>
        </div>

        <div className={`w-[95px] h-[95px] lg:w-[105px] lg:h-[105px] design-border-outer-green flex-center rounded-full border-green ${props.buttonValue.green === "Consulting" ? 'w-[95px] h-[95px] lg:w-[115px] lg:h-[115px]' : ""}`} onClick = {() => {props.click()}}>
            <div className={`bg-dark-blue w-[83px] h-[83px] lg:w-[92px] lg:h-[92px] rounded-full flex-center ${props.buttonValue.green === "Consulting" ? 'w-[90px] h-[90px]  lg:w-[102px] lg:h-[102px]' : ""}`}>
                <div className={`w-16 h-16 lg:w-[70px] lg:h-[70px] design-border-inner-green rounded-full flex-center font-normal text-sm text-green border-green ${props.buttonValue.green === "Consulting" ? 'w-[70px] h-[70px] text-[0.7rem] lg:text-xs lg:w-[85px] lg:h-[85px]' : ""}`}>
                    <div className={`bg-dark-blue w-[60px] h-[60px] lg:w-[65px] lg:h-[65px] flex-center rounded-full flex-center ${props.buttonValue.green === "Consulting" ? 'w-[72px] h-[72px] text-[0.7rem] lg:text-xs lg:w-[81px] lg:h-[81px]' : ""}`}>
                        {props.buttonValue.green}
                    </div>
                </div>
            </div>
        </div>

        <div className="w-[72px] h-[72px] lg:w-[85px] lg:h-[85px] flex-center rounded-full design-border-outer-red flex-center" onClick ={() => props.clickRoute.redButton()}>
            <div className="w-[64px] h-[64px] lg:w-[75px] lg:h-[75px] bg-dark-blue rounded-full flex-center">
                <div className="lg:w-14 lg:h-14 w-[50px] h-[50px] design-border-inner-red rounded-full flex-center  text-xs">
                    <div className='bg-dark-blue w-[46px] h-[46px] lg:w-[52px] lg:h-[52px] rounded-full flex-center'>
                        {props.buttonValue.red}
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default ConsultationButton