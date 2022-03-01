import React from 'react'

const Header = () => {
  return (
    <div className="text-white py-6">
        <div className="flex-center gap-x-1 relative pt-8 md:pt-0">
            <div className="absolute flex left-0 -top-1 md:top-1 items-center gap-x-2">
                <div className="bg-green w-3 h-3 xl:w-4 xl:h-4 rounded-full"></div>
                <p className='font-normal text-xs xl:text-sm '>Connected</p>
            </div>
            <div className="flex-center ">
                <div className="w-3 h-3 xl:w-4 xl:h-4 bg-white rounded-full mr-1"></div>
                <div className="w-3 h-3  xl:w-4 xl:h-4 bg-white rounded-full flex-center">
                    <div className="w-1 h-2 xl:h-3 bg-dark-blue rounded-[50%]"></div>
                </div>
                <div className="w-3 h-3  xl:w-4 xl:h-4 bg-white rounded-full ml-1"></div>
            </div>
            <h2 className='font-bold text-md xl:text-lg'>Cowrie Reader</h2>

        </div>
    </div>
  )
}

export default Header