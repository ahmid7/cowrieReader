import Header from "../Component/Header"
import WhiteButton from '../Component/WhiteButton'
import RedButton from '../Component/RedButton'
import GreenButton from '../Component/GreenButton'
import { ResultDataArray } from "../Data"
import ResultData from "../Component/ResultData"
import { Volume } from "../Svgicon"
import { useNavigate } from "react-router-dom"
import { useLayoutEffect,useRef, useState,useCallback } from "react"
import { gsap } from "gsap"
import AOS from "aos";
import "aos/dist/aos.css";

const Result = () => {
  const navigate = useNavigate();
  const imageSlider = useRef()
  // const volumeShow = useRef()
  const [volumeClick,setVolumeClicked] = useState(false)
  const [ RandomNo, setRandomNo ]  = useState()

  function updateVolumeClick(){
    setVolumeClicked(!volumeClick)
  }

  const generateResult = () => {
    const generateRandomArrayNo = Math.floor(Math.random() * ResultDataArray.length)
    const datas = ResultDataArray[generateRandomArrayNo]
    const value = generateRandomArrayNo
    return datas
  }

  function updateVolume(){
    updateVolumeClick()
    speech()
  }

  // speech value
  let texttospeech = speechSynthesis

  function speech(){
    let voice = texttospeech.getVoices()
    let utterThis = new SpeechSynthesisUtterance('odunayo')
    utterThis.voice = voice[0]
    texttospeech.speak(utterThis)
  }

  const handleButton ={
    WhiteButton: function(){
      return setTimeout(() => {navigate('/')},2000)
    },
    RedButton: function(){
      return navigate('/')
    },
    GreenButton:function(){
      setTimeout(() => {navigate('/consult')},2000)
    }
  }

  useLayoutEffect(() => {
    gsap.fromTo(imageSlider.current,{
      height:"100%"
    },{
      height:"0%",
      duration:2,
      delay:0.5,
      ease:"power2.out"
    });

    // gsap.to(volumeShow.current, {
    //   display:'block',
    //   delay:2,
    //   ease:'power2.out'
    // });    

    // aos initialization
    AOS.init({
      once:true
    });

    AOS.refresh();    
  }, [])

  return (
    <div className="bg-dark-blue">

      <div className="bg-dark-blue container mx-auto pb-4 height-screen text-white px-8 lg:px-16 xl:px-20">
          <Header/>
          <div className="bg-darker-blue flex-col md:flex-row flex overflow-hidden">

              <div className="w-full md:w-[250px] lg:w-[270px] xl:w-[320px] relative">
                  <img className="w-full h-[420px] md:h-[470px] xl:h-[550px] object-fit" src="./images/CowrieResult.webp" alt="cowrie-image"/>
                  <div className ="bg-darker-blue w-full h-full absolute bottom-0 right-0" ref={imageSlider}></div>
              </div>

              <div className="font-normal text-sm lg:text-sm xl:text-base w-full md:w-[62%]  xl:w-[60%] px-3 md:px-0 pt-4 md:pt-0 md:ml-5 lg:ml-10 ">
                  <h2 className="py-4 xl:py-6 text-lg md:text-base xl:text-lg" data-aos="fade-left" data-aos-delay="700" data-aos-duration='2000'>The result</h2>
                  <ResultData generateResult = { generateResult }/>

                  <div className="bg-[#161C27] px-2 py-2 xl:py-3 w-[70%] md:w-[40%] rounded-md my-10 md:mt-12 xl:mt-14" onClick= { updateVolume }>
                      <div className="small-border flex justify-between items-center px-2 py-2 xl:py-3 rounded-md text-xs lg:text-sm xl:text-base">
                          <p>Use audio note</p>

                          <div className="relative ">
                            <Volume/>
                            <div className={`w-4 h-1 bg-[red] absolute skew-y-[-45deg] block top-3 left-0 ml-1 mb-3 ${volumeClick ? "hidden": "" }`}>
                            </div>
                          </div>
                      </div>
                  </div>

              </div>

          </div>

          <div className="text-white flex-center gap-x-4 md:gap-x-6 font-normal mt-10 md:mt-8">
            <WhiteButton  buttonValue ='Retake' handleButton = {handleButton.WhiteButton}/>
            <GreenButton buttonValue ='Restart' handleButton ={handleButton.GreenButton}/>
            <RedButton buttonValue='Close' handleButton = {handleButton.RedButton}/>
          </div>
      </div>

    </div>
  )
}

export default Result
