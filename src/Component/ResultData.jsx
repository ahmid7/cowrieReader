import React,{ useEffect,useState } from 'react'

const ResultData = ({ generateResult, handleRandomNo }) => {
  const [ datas,setDatas ] = useState([])

  useEffect( () => {
    // setDatas(generateResult())
    let arrValue = generateResult()
    setDatas(arrValue[0])
    handleRandomNo(arrValue[1])
  },[])

  return (
    <div>
        <div className="hidden md:flex flex-col gap-y-4 md:gap-y-3 xl:gap-y-5 overflow-hidden">
            {
                datas.map((data,index) => (
                <p key ={ index } className="leading-6 overflow-hidden" data-aos="fade-down" data-aos-delay="1000" data-aos-duration='3000'>{data}</p>
                ))
            }
        </div>

        <div className="flex md:hidden flex-col gap-y-4 md:gap-y-3 xl:gap-y-5 overflow-hidden">
        {
            datas.map((data,index) => (
            <p key= {index} className="leading-6 overflow-hidden" data-aos="fade-down" data-aos-delay="800" data-aos-duration='3000'>{data}</p>
            ))
        }
        </div>
    </div>
  )
}

export default ResultData