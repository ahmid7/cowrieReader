import Header from '../Component/Header'
import WhiteButton from '../Component/WhiteButton'
import RedButton from '../Component/RedButton'
import GreenButton from '../Component/GreenButton'
import { useNavigate } from 'react-router-dom'
import { useRef, useState,useEffect, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

const ChooseConsultation = () => {
  const imageSlide = useRef();
  const navigate = useNavigate();
  const [buttonGreenclick, setButtonGreenClick] = useState(false)

  function updateButtonGreenClick(){
    setButtonGreenClick(true)
  }

  useLayoutEffect(() => {
    gsap.fromTo(imageSlide.current,{
      width:"100%"
    },{
      width:"0%",
      duration:2,
      ease: "power2.out"
    })
  },[])

  const handleButton ={
    WhiteButton: function(){
      return setTimeout(() => {navigate('/consult')},2000)
    },
    RedButton: function(){
      return navigate('/')
    },
    GreenButton:function(){
      setTimeout(() => {navigate('/result')},2000)
    }
  }

  return (
    <div className="bg-dark-blue">
      <div className="lg:px-12 container mx-auto px-8 height-screen lg:pb-4 text-white">

        <div>
            <Header/>
            <div className="relative">
              <img className='w-full h-[350px] xl:h-[500px] object-fill' src='./images/Cowrie.webp' alt="cowry-image"/>
              <div className="absolute bg-dark-blue h-[350px] xl:h-[500px] top-0 right-0 " ref={imageSlide}></div>
              {
                buttonGreenclick && 
                <p className={`absolute absolute-center block`}>Consulting..</p>
              }
            </div>
        </div>

        <div className="text-white flex-center gap-x-4 md:gap-x-6 font-normal mt-10 md:mt-8">
          <WhiteButton buttonValue ='Retake' handleButton = {handleButton.WhiteButton}/>
          <div onClick={updateButtonGreenClick}>
            <GreenButton buttonValue ='Choose' handleButton ={handleButton.GreenButton}/>
          </div>
          <RedButton buttonValue='Close' handleButton = {handleButton.RedButton}/>
        </div>

      </div>
    </div>
  )
}

export default ChooseConsultation
