import React from 'react'
import streak from "../assets/streak.png"
import zerodha from "../assets/zerodha.png"

function Header() {
  return (
    <>
    <div className='header  sticky top-0 left-0 bg-white z-50 border-b' >
        <div className='sec  h-16 flex items-center justify-between pl-12 pr-12'>
            <div className='flex gap-2 h-full items-center'>
               <img src={zerodha} alt="zerodha" className='w-20 h-2' />
               <div className='w-1 border-r-2 h-6'></div>
                <img src={streak} alt="streak" className='w-12' />
              
            </div>
            <div className='hidden lg:block'>
            <div className='Register flex gap-8 '>
                <button className='text-sm'>Home</button>
                <button className=' py-1 px-5 rounded-lg text-sm text-white font-sans' style={{backgroundColor:"#387ed1"}}>Sign Up</button>
                </div>
            </div>

        </div>

    </div>
      
    </>
  )
}

export default Header
