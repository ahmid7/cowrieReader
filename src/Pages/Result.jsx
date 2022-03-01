import Header from "../Component/Header"
import { Volume } from "../Svgicon"
import ConsultationButton from "../Component/ConsultationButton"
import { useNavigate } from "react-router-dom"
import { gsap } from "gsap"
import { useEffect,useRef } from "react"

const Result = () => {

  const navigate = useNavigate();
  const imageSlider = useRef()

  function click(){
    navigate('/consult')
  }

  const clickRoute = {
    whiteButton: function(){
      return navigate('/consult')
    },
    redButton: function(){
      return navigate('/')
    }
  }
  const buttonValue={
    'white':'Retake',
    'green':'Restart',
    'red':'Close'
  }

  useEffect(() => {
    gsap.fromTo(imageSlider.current,{
      width:"100%"
    },{
      width:"0%",
      duration:2,
      ease:"power2.out"
    })
  }, [])
  return (
    <div className="bg-dark-blue">
      <div className="bg-dark-blue container mx-auto pb-4 height-screen text-white px-8 lg:px-16 xl:px-20">
          <Header/>
          <div className="bg-darker-blue flex-col md:flex-row flex">
              <div className="w-full md:w-[250px] lg:w-[250px] xl:w-[320px] relative">
                  <img className="w-full h-[420px] md:h-[450px] xl:h-[550px] object-fit" src="./images/CowrieResult.webp" alt="cowrie-image"/>
                  <div className ="h-[420px] bg-dark-blue md:h-[450px] xl:h-[550px] absolute top-0 right-0" ref={imageSlider}></div>
              </div>
              <div className="font-normal text-sm lg:text-sm xl:text-base w-full md:w-[60%]  xl:w-[60%] px-3 md:px-0 pt-4 md:pt-0 md:ml-5 lg:ml-10">
                  <h2 className="py-4 xl:py-6 text-lg md:text-base xl:text-lg">The result</h2>
                  <p className="pb-4 md:pb-3 xl:pb-5 leading-6 ">
                      Amet sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. a dolor do amet sint. Velit officia consequat duis enim
                  </p>
                  <p className="pb-4 md:pb-3 xl:pb-5  leading-6 ">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                  <p className=" leading-6 ">
                  Amet sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                  <div className="bg-[#161C27]  px-2 py-2 xl:py-3 w-[70%] md:w-[40%] rounded-md my-10 md:mt-12 xl:mt-14">
                      <div className="small-border flex justify-between items-center px-2 py-2 xl:py-3 rounded-md text-xs lg:text-sm xl:text-base">
                          <p>Use audio note</p>
                          <Volume/>
                      </div>
                  </div>
              </div>
          </div>
          <ConsultationButton click={click} clickRoute ={clickRoute} buttonValue={buttonValue}/>
      </div>
    </div>
  )
}

export default Result