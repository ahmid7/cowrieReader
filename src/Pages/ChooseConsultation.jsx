import React from 'react'
import Header from '../Component/Header'
import ConsultationButton from '../Component/ConsultationButton'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'

const ChooseConsultation = () => {
  const buttonValue={
    'white':'Retake',
    'green':'Choose',
    'red':'Close'
  }

  const buttonValue2={
    'white':'Retake',
    'green':'Consulting',
    'red':'Close'
  }

  // set route
  const navigate = useNavigate();

  // 
  const [buttonclick, setButtonClick] = useState(false)

  function click(){
    setTimeout(() => {
      navigate('/result') 
    },3000)
    setButtonClick(true)
  }

  const clickRoute = {
    whiteButton: function(){
      return navigate('/consult')
    },
    redButton: function(){
      return navigate('/')
    }
  }
  return (
    <div className="bg-dark-blue">
      <div className="lg:px-12 container mx-auto px-8 height-screen  lg:pb-4  text-white">
        <div>
            <Header/>
            <div className="relative">
              <img className='w-full h-[350px] xl:h-[500px] object-fill' src='./images/Cowrie.webp' alt="cowry-image"/>
              {
                buttonclick && 
                <p className={`absolute absolute-center`}>Consulting ...</p> 
              }
              {
                !buttonclick && 
                <p className={`absolute absolute-center hidden`}>Consulting ...</p>
              }
            </div>
        </div>

        <ConsultationButton click={click} clickRoute={clickRoute} buttonValue={ buttonclick ? buttonValue2 : buttonValue }/>
    </div>
    </div>
  )
}

export default ChooseConsultation