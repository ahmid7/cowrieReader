import React from 'react'
import { useLayoutEffect, useRef} from 'react'
import { gsap } from "gsap"

const Header = () => { 
  const firstball = useRef(null)
  const secondball = useRef(null)
  const thirdball = useRef(null)
  const headerText = useRef(null)

    useLayoutEffect(() => {
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
            duration:1.5,
            delay:1
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
    <div className="text-white py-6">
        <div className="flex-center gap-x-1 relative pt-8 md:pt-0">
            <div className="absolute flex left-0 -top-1 md:top-1 items-center gap-x-2">
                <div className="bg-green w-3 h-3 xl:w-4 xl:h-4 rounded-full"></div>
                <p className='font-normal text-xs xl:text-sm '>Connected</p>
            </div>
            <div className="flex-center ">
                <div className="w-3 h-3 xl:w-4 xl:h-4 bg-white rounded-full mr-1" ref={firstball}></div>
                <div className="w-3 h-3  xl:w-4 xl:h-4 bg-white rounded-full flex-center" ref={secondball}>
                    <div className="w-1 h-2 xl:h-3 bg-dark-blue rounded-[50%]"></div>
                </div>
                <div className="w-3 h-3  xl:w-4 xl:h-4 bg-white rounded-full ml-1" ref={thirdball}></div>
            </div>
            <div className="relative p-1">
                <h2 className="font-bold text-base lg:text-lg xl:text-2xl">Cowrie Reader</h2>
                <div className="absolute top-0 h-full right-0 bg-dark-blue" ref={headerText}></div>
            </div>

        </div>
    </div>
  )
}

export default Header