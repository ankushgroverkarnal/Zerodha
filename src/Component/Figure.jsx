import React from 'react'
import streak2 from "../assets/streak2.png"
import zerodha from "../assets/zerodha.png"

function Figure() {
  return (
    <>
    <div className="fig h-40 mt-8  text-xs pl-16" style={{backgroundColor:"#f7f7fa",color:"#9babc6"}}>
        <div className='flex gap-2 h-10 items-center'>
            <span>c</span>
            <span>Powered by</span>
            <img src={streak2} alt="" className='w-12' />
        </div>
<div className='flex flex-col h-20 justify-center'>
    <img src={zerodha} alt="zerodha" className='w-24 h-3 grayscale'/>
    <p className='mt-1'>NSE &BSE-SEBI Registration No: INZO00031633 CDSL SEBI Registration No: IN-DP-431-2019</p>
</div>

    </div>
      
    </>
  )
}

export default Figure
