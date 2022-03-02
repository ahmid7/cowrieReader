import { useNavigate } from "react-router-dom"
import { useState,useLayoutEffect,useRef } from "react"
import { gsap } from 'gsap'

const HeroPage = () => {
  let navigate = useNavigate()
  const [ buttonClick, setButtonClick ] = useState(false)
  const startButton = useRef(null)
  const firstball = useRef(null)
  const secondball = useRef(null)
  const thirdball = useRef(null)
  const headerText = useRef(null)

  function click() {
    setTimeout(() =>{
      navigate('/consult')
    },3000)
    setButtonClick(true)
  }


  useLayoutEffect(() => {
    gsap.fromTo(startButton.current, {
        scale:0.1,
        visibility:'hidden'
    },{
        scale: 1,
        duration: 2,
        ease:'power2.out',
        delay:5,
        visibility:"visible",
    })

    gsap.fromTo(firstball.current,{
        y:-50,
    },{
        y:0,
        duration:1,
        visibility:"visible",
    })

    gsap.fromTo(headerText.current, {
        width:'100%'
    },{
        width:'0%',
        duration:3,
    }) 

    gsap.fromTo(secondball.current,{
        y:+50,
    },{
        y:0,
        duration:1,
        visibility:"visible",
    })
    gsap.fromTo(thirdball.current,{
        y:-50,
    },{
        y:0,
        duration:1,
        visibility:"visible",
    })
    
  },[])
  
  return (
    <div className="w-screen h-screen flex-center bg-dark-blue">
        <div className="text-[#FFFFFF] flex-center flex-col">
            <div className="flex-center gap-x-2">
                <div className="flex-center gap-x-1">
                    <div className="w-4 h-4 bg-white rounded-full invisible" ref={firstball}></div>
                    <div className="w-4 h-4 bg-white rounded-full flex-center invisible" ref={secondball}>
                        <div className="w-1 h-3 bg-dark-blue rounded-[50%] "></div>
                    </div>
                    <div className="w-4 h-4 bg-white rounded-full invisible" ref={thirdball} ></div>
                </div>
                <div className="relative p-1">
                 <h2 className="font-bold text-base lg:text-lg xl:text-2xl">Cowrie Reader</h2>
                 <div className="absolute top-0 h-full right-0 bg-dark-blue" ref={headerText}></div>
                </div>
            </div>

            <div className={`w-20 h-20 xl:w-24 xl:h-24 design-border-outer-green flex-center rounded-full mt-12 mouse-hover outline-none focused:outline-none invisible ${buttonClick ? "animate-spins" : ""}`} ref={startButton} onClick= { () => {click()} }>
                <div className="bg-dark-blue w-[75px] h-[75px] xl:w-[85px] xl:h-[85px] flex-center rounded-full ">
                    <div className="w-14 h-14 xl:w-16 xl:h-16 design-border-inner-green rounded-full flex-center font-semibold text-sm text-green mouse-hover outline-none relative">
                        <div className={`bg-dark-blue flex-center rounded-full w-[54px] h-[54px] xl:w-[60px] xl:h-[60px] absolute ${buttonClick ? "animate-spin-back" : ""}`}>
                            Start
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroPage
