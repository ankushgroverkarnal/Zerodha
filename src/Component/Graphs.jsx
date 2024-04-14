import React, {useRef, useState } from 'react'
import i from "../assets/i.png"
import support from "../assets/support.png"
import support2 from "../assets/Support2.png"
import circle from "../assets/circle.png"
import abc from "../assets/abc.png"
import green from "../assets/green.png"
import oscillator from "../assets/oscillator.png"


function Graphs() {
  const [hide, sethide] = useState("")
  const [text, settext] = useState("View Details")
  const [hide1, sethide1] = useState("")
  const [text1, settext1] = useState("View Details")
  const[fivetext,setfivetext]=useState("5min")
  const[tentext,settentext]=useState("10min")
  const[fifteentext,setfifteentext]=useState("15min")
  const[thirtytext,setthirtytext]=useState("30min")
  const[hourtext,sethourtext]=useState("hour")
  const[daytext,setdaytext]=useState("day")

  const graph1 =useRef()
  const graph2 =useRef()
  const graph3 =useRef()
  const graph4 =useRef()
  const fives =useRef()
  const tens =useRef()
  const fifteens =useRef()
  const thritys =useRef()
  const hours =useRef()
  const days =useRef()
  

const five=()=>{
  fives.current.style.backgroundColor="#387ed1"
  fives.current.style.color="white"
  setfivetext("5 Minutes")
  settentext("10min")
  sethourtext("hour")
  setthirtytext("30 Min")
  setdaytext("day")
  tens.current.style.backgroundColor="white"
  tens.current.style.color="gray"
  thritys.current.style.backgroundColor="white"
  thritys.current.style.color="gray"
  fifteens.current.style.backgroundColor="white"
  fifteens.current.style.color="gray"
  hours.current.style.backgroundColor="white"
  hours.current.style.color="gray"
  graph1.current.style.position="absolute"
  graph1.current.style.left="218px"
  graph1.current.style.transition="all,0.5s"
  graph2.current.style.position="absolute"
  graph2.current.style.top="20px"
  graph2.current.style.right="68px"
  graph2.current.style.transition="all,0.5s"
  graph3.current.style.position="absolute"
  graph3.current.style.left="243px"
  graph3.current.style.transition="all,0.5s"
  graph4.current.style.position="absolute"
  graph4.current.style.left="218px"
  graph4.current.style.transition="all,0.5s"
  days.current.style.backgroundColor="white"
  days.current.style.color="gray"

}
const ten =()=>{
  tens.current.style.backgroundColor="#387ed1"
  tens.current.style.color="white"
  setfivetext("5min")
  settentext("10 Minutes")
  setfifteentext("15 Min")
  setthirtytext("30 Min")
  sethourtext("hour")
  setdaytext("day")

  fifteens.current.style.backgroundColor="white"
  fifteens.current.style.color="gray"
  hours.current.style.backgroundColor="white"
  hours.current.style.color="gray"
  fives.current.style.backgroundColor="white"
  fives.current.style.color="gray"
  graph1.current.style.position="absolute"
  graph1.current.style.left="250px"
  graph1.current.style.top="22px"
  graph1.current.style.transition="all,0.5s"
  graph3.current.style.position="absolute"
  graph3.current.style.left="275px"
  graph3.current.style.transition="all,0.5s"
  days.current.style.backgroundColor="white"
  days.current.style.color="gray"
}
const fifteen=()=>{
  fifteens.current.style.backgroundColor="#387ed1"
  fifteens.current.style.color="white"
  fives.current.style.backgroundColor="white"
  fives.current.style.color="gray"
  thritys.current.style.backgroundColor="white"
  thritys.current.style.color="gray"
  tens.current.style.backgroundColor="white"
  tens.current.style.color="gray"
  settentext("10min")
  setfifteentext("15 Minutes")
  setfivetext("5min")
  setthirtytext("30 Min")
  sethourtext("hour")
  hours.current.style.backgroundColor="white"
  hours.current.style.color="gray"
  graph1.current.style.position="absolute"
  graph1.current.style.left="265px"
  graph1.current.style.transition="all,0.5s"
    graph2.current.style.position="absolute"
  graph2.current.style.top="20px"
  graph2.current.style.right="68px"
  graph2.current.style.transition="all,0.5s"
  graph4.current.style.position="absolute"
  graph4.current.style.left="250px"
  graph4.current.style.transition="all,0.5s"
  days.current.style.backgroundColor="white"
  days.current.style.color="gray"
  setdaytext("day")

}
const thirty=()=>{
  fifteens.current.style.backgroundColor="white"
  fifteens.current.style.color="gray"
  thritys.current.style.backgroundColor="#387ed1"
  thritys.current.style.color="white"
  graph1.current.style.position="absolute"
  graph1.current.style.left="265px"
  graph1.current.style.transition="all,0.5s"
  graph2.current.style.position="absolute"
  graph2.current.style.top="20px"
  graph2.current.style.right="120px"
  graph2.current.style.transition="all,0.5s"
  fives.current.style.backgroundColor="white"
  fives.current.style.color="gray"
  tens.current.style.backgroundColor="white"
  tens.current.style.color="gray"
  setthirtytext("30 Minutes")
  setfifteentext("15 Min")
  settentext("10min")
  sethourtext("hour")
  setfivetext("5min")
  hours.current.style.backgroundColor="white"
  hours.current.style.color="gray"
  graph4.current.style.position="absolute"
  graph4.current.style.left="265px"
  graph4.current.style.transition="all,0.5s"
  graph3.current.style.position="absolute"
  graph3.current.style.left="275px"
  graph3.current.style.transition="all,0.5s"
  days.current.style.backgroundColor="white"
  days.current.style.color="gray"
  setdaytext("day")

}
const hour =()=>{
  setthirtytext("30 Min")
  setfifteentext("15 Min")
  settentext("10min")
  sethourtext("1 Hour")
  setfivetext("5min")
  fives.current.style.backgroundColor="white"
  fives.current.style.color="gray"
  thritys.current.style.backgroundColor="white"
  thritys.current.style.color="gray"
  fifteens.current.style.backgroundColor="white"
  fifteens.current.style.color="gray"
  tens.current.style.backgroundColor="white"
  tens.current.style.color="gray"
  hours.current.style.backgroundColor="#387ed1"
  hours.current.style.color="white"
  fives.current.style.backgroundColor="white"
  fives.current.style.color="gray"
  graph1.current.style.position="absolute"
  graph1.current.style.left="313px"
  graph1.current.style.transition="all,0.5s"
  graph2.current.style.position="absolute"
  graph2.current.style.top="20px"
  graph2.current.style.right="120px"
  graph2.current.style.transition="all,0.5s"
  graph3.current.style.position="absolute"
  graph3.current.style.left="323px"
  graph3.current.style.transition="all,0.5s"
  graph4.current.style.position="absolute"
  graph4.current.style.left="295px"
  graph4.current.style.transition="all,0.5s"
  days.current.style.backgroundColor="white"
  days.current.style.color="gray"
  setdaytext("day")

}
const day=()=>{
  setdaytext("1 Day")
  setthirtytext("30 Min")
  setfifteentext("15 Min")
  settentext("10min")
  setfivetext("5min")
  sethourtext("hour")
  thritys.current.style.backgroundColor="white"
  thritys.current.style.color="gray"
  fifteens.current.style.backgroundColor="white"
  fifteens.current.style.color="gray"
  tens.current.style.backgroundColor="white"
  tens.current.style.color="gray"
  hours.current.style.backgroundColor="white"
  hours.current.style.color="gray"
 
  days.current.style.backgroundColor="#387ed1"
  days.current.style.color="white"
  graph1.current.style.position="absolute"
  graph1.current.style.left="313px"
  graph1.current.style.transition="all,0.5s"
  graph2.current.style.position="absolute"
  graph2.current.style.top="20px"
  graph2.current.style.right="100px"
  graph3.current.style.position="absolute"
  graph3.current.style.left="370px"
  graph3.current.style.transition="all,0.5s"
  graph4.current.style.position="absolute"
  graph4.current.style.left="250px"
  graph4.current.style.transition="all,0.5s"

}
  
  

  const ViweDetail = () => {
    settext(text ? "ViewDetail" : "Less Details")
    sethide(!hide)
   
  }
  const ViweDetail2 = () => {
    sethide1(!hide1)
    settext1(text1 ? "ViewDetail" : "Less Details")
  }


  return (
    <>
<div className="container">
        <div className=''>
    <div className='  lg:main flex justify-center h-[50px] items-center lg:fixed top-16 bg-white z-50 w-full' >
        <div className= ' bg-white flex gap-3 text-[14px]  '>
            <button className=' text-neutral-400  px-2 py-1 rounded-lg font-semibold'  ref={fives} onClick={five}>{fivetext}</button>
            <button className=' text-neutral-400  px-2 py-1 rounded-lg font-semibold' ref={tens} onClick={ten} >{tentext}</button>
            <button className=' text-neutral-400  px-2 py-1 rounded-lg font-semibold' ref={fifteens} onClick={fifteen}>{fifteentext}</button>
            <button className=' text-neutral-400  px-2 py-1 rounded-lg font-semibold' ref={thritys} onClick={thirty}>{thirtytext}</button>
            <button className=' text-neutral-400  px-2 py-1 rounded-lg font-semibold' ref={hours} onClick={hour}>{hourtext}</button>
            <button className=' text-neutral-400  px-2 py-1 rounded-lg font-semibold' ref={days} onClick={day}>{daytext}</button>
        </div>
 </div></div>
 

 
    </div>

    {/* ------------------------ */}
    

    {/* ------------------------------------------------------------------------------- */}
    <div className='nifty  h-16 flex flex-col justify-center mt-12 z-50  pl-12 fixed w-full bg-white' >
    <div className='flex gap-3 items-center'>

   
<i className="fa-solid fa-less-than"></i>
<svg xmlns="http://www.w3.org/2000/svg" className='w-7' viewBox="0 0 64 64" xmlns:v="https://vecta.io/nano"><path d="M1.8 31.9l8.7-21.1 21.3-8.9 21.3 8.9 9.1 21.1-9.1 21.2-21.1 9-21.5-8.9z" fill="#f2b61a"/><path d="M10.5 10.8l7.9 21.1-7.9 21.3-8.7-21.3z" fill="#e41f28"/><g fill="#e96f24"><path d="M10.5 10.8L32 18.7l21.1-7.9-21.3-8.9z"/><path d="M53.1 53.1l-7.8-21.2 7.8-21.1 9.1 21.1z"/></g><path d="M10.5 53.2l21.3-7.9 21.3 7.8-21.1 9z" fill="#e41f28"/><path d="M32 18.7l13.3 13.2 7.8-21.1z" fill="#392e7d"/><path d="M18.4 31.9L32 18.7l13.3 13.2-13.5 13.4z" fill="#fff"/></svg>
<span className='text-[23px] font-medium font-sans'>NIFTY 50</span>
</div>
<div className='rupees flex gap-1 items-center ml-8'>
    <span>₹ 22096.75</span>
    <i className="fa-solid fa-arrow-up" style={{color:"#63E6BE"}}></i>
    <span className='text-green-500'>(+0.39%)</span>

</div>
</div>







{/* -------------------------------------------------------------------------------------------- */}
      <div className="lg:main flex justify-center gap-5 sm:flex flex-wrap mt-28  ">
        <div className='lg:summary w-[550px]   h-auto pb-2 shadow-xl'>
          <div className='flex justify-between h-12 items-center pl-8 pr-6 relative'>
            <span className='font-semibold text-sm'>Summary</span>
            <img src={i} alt="image" className='i w-4' />

            <div className='content w-64 text-sm absolute -top-10 -right-64 bg-white py-1 px-1' >
              <p>Here is a Snapshot of the most popular technical indicators. We take these into consideration, analyze them, run some internal calculations and help you understand the overall market conditions.</p>

            </div>
          </div>

          <div className='flex items-center justify-center h-16 relative'>
            <img src={support} alt='support' className='w-64 relative' />
            <img src={circle} alt='circle' className='w-5' ref={graph1} style={{position:"absolute",top:"20px",left:"218px"}}/>       
          </div>
          <div className="market_trend flex h-20 items-center justify-center gap-20 mr-7 text-sm">
            <div className='w-12 text-center'>
              <span className='pl-5'>14</span>
              <button className='bg-pink-200 text-red-500 text-sm py-1 px-3 rounded-lg'>Bearish</button>
            </div>
            <div className='w-12 text-center'>
              <span className='pl-5 '>8</span>
              <button className='text-neutral-500 bg-neutral-200 text-sm py-1 px-3 rounded-lg'>Neutral</button>
            </div>
            <div className='w-12 text-center'>
              <span className='pl-5'>5</span>
              <button className='text-greenl-500 bg-green-200 text-sm py-1 px-3 rounded-lg'>Bullish</button>
            </div>

          </div>
          <div className="data  ">
            <div className='flex gap-24 justify-center h-20 items-end leading-2'>
              <div className='w-13'>
                <p className='text-[14px]'>22076.49</p>
                <p className='text-[12px] text-neutral-400 font-medium' >EMA (20)</p>
              </div>
              <div className='w-13'>
                <p className='text-[14px]'>22055.49</p>
                <p className='text-[12px] text-neutral-400 font-medium'>SMA(20)</p>
              </div>
              <div className='w-13'>
                <p className='text-[14px]'>49.45</p>
                <p className='text-[12px] text-neutral-400 font-medium'>RSI(14)</p>
              </div>
            </div>

            <div className='flex gap-[75px] justify-center h-12 items-end leading-2'>
              <div className='w-13'>
                <p className='text-[14px]'>-96.92</p>
                <p className='text-[12px] text-neutral-400 font-medium' >Awesome Osc.</p>
              </div>
              <div className='w-13'>
                <p className='text-[14px]'>22055.49</p>
                <p className='text-[12px] text-neutral-400 font-medium'>Macd(12,26,9)</p>
              </div>
              <div className='w-13'>
                <p className='text-[14px]'>49.45</p>
                <p className='text-[12px] text-neutral-400 font-medium'>CCI(20)</p>
              </div>
            </div>


          </div>


        </div>



        {/* ------------------------------------------------------------------------------- */}

        <div className="support w-[550px] shadow-xl  lg:block">
          <div className='flex justify-between h-12 items-center pl-8 pr-6 relative'>
            <span className='font-semibold text-sm'>Support & Resistance</span>
            <img src={i} alt="image" className='w-4 i2' />
            <div className="content2 w-72 text-sm absolute -top-24 right-16 bg-white py-1 px-1 z-50">
              <p>Support: Support prevents the price from falling further. It is a price point on the chart where the trader expects maximum demand (in terms of buying) coming into the stock/index. Whenever the price falls to the support line, it is likely to bounce back. Resistance is something that stops the price from rising further. The resistance level is a price point on the chart where traders expect maximum supply (in terms of selling) for the stock/index. The resistance level is always above the current market price</p>
            </div>
          </div>
          <div className='flex items-end justify-center h-16 '>
           <div className='relative'><img src={support2} alt='support' className='w-64 ' />
            <img src={green} alt='circle' className='w-5' ref={graph2} style={{position:"absolute",top:"20px",right:"68px"}}/>
          </div></div>
          <div className='s flex justify-center h-8 items-center gap-[50px] text-[12px]  '>
            <div className='flex gap-8'>
              <span>S3</span>
              <span>S2</span>
              <span>S1</span>
            </div>
            <div className='flex gap-8'>
              <span>R1</span>
              <span>R2</span>
              <span className=''>R3</span>
            </div>

          </div>

          <div className="data">
            <div className='flex gap-24 justify-center h-32 items-end leading-2'>
              <div className='w-13'>
                <p className='text-[14px]'>22076.49</p>
                <p className='text-[12px] text-neutral-400 font-medium' >S1</p>
              </div>
              <div className='w-13'>
                <p className='text-[14px]'>22055.49</p>
                <p className='text-[12px] text-neutral-400 font-medium'>S2</p>
              </div>
              <div className='w-13'>
                <p className='text-[14px]'>49.45</p>
                <p className='text-[12px] text-neutral-400 font-medium'>S3</p>
              </div>
            </div>

            <div className='flex gap-[108px] justify-center h-12 items-end leading-2 '>
              <div className='w-13'>
                <p className='text-[14px]'>-96.92</p>
                <p className='text-[12px] text-neutral-400 font-medium' >R1</p>
              </div>
              <div className='w-13 '>
                <p className='text-[14px]'>22055.49</p>
                <p className='text-[12px] text-neutral-400 font-medium'>R2</p>
              </div>
              <div className='w-13'>
                <p className='text-[14px]'>49.45</p>
                <p className='text-[12px] text-neutral-400 font-medium'>R3</p>
              </div>
            </div>

          </div>



        </div>



      </div>
      {/* ---------------------------------------------------------------------------------- */}
      <div className="grapgh2 flex justify-center gap-5 sm:flex  flex-wrap mt-5 sm:justify-center">
        <div className="moving w-[550px]  h-auto pb-2  shadow-xl">

          <div className='flex justify-between h-12 items-center pl-8 pr-6'>
            <span className='font-semibold text-sm'>Moving average</span>

          </div>
          <div className='flex items-center justify-center h-16'>
            <img src={abc} alt='support' className='w-64 relative' />
            <img src={circle} alt='circle' className='w-5' ref={graph3} style={{position:"absolute",left:"243px"}} />
          </div>
          <div className="market_trend flex h-20 items-center justify-center gap-20 mr-7 text-sm">
            <div className='w-12 text-center'>
              <span className='pl-5'>14</span>
              <button className='bg-orange-100 text-orange-500 text-sm py-1 px-3 rounded-lg'>Bearish</button>
            </div>
            <div className='w-12 text-center'>
              <span className='pl-5 '>8</span>
              <button className='text-neutral-500 bg-neutral-200 text-sm py-1 px-3 rounded-lg'>Neutral</button>
            </div>
            <div className='w-12 text-center'>
              <span className='pl-5'>5</span>
              <button className='text-blue-500 bg-blue-100 text-sm py-1 px-3 rounded-lg'>Bullish</button>
            </div>

          </div>
          <div className="data  ">
            <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
              <div>
                <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                <span className='pl-2'>EMA (5)</span>
              </div>
              <div><span>22101.44</span></div>


            </div>
            <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
              <div>
                <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                <span className='pl-2'>SMA (5)</span>
              </div>
              <div><span>22101.44</span></div>


            </div>
            <div className='data invisble h-auto'>

              {hide ? <div className='hide'>


                <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                  <div>
                    <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                    <span className='pl-2'>SMA (5)</span>
                  </div>
                  <div><span>22101.44</span></div>


                </div>
                <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                  <div>
                    <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                    <span className='pl-2'>SMA (5)</span>
                  </div>
                  <div><span>22101.44</span></div>


                </div>
                <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                  <div>
                    <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                    <span className='pl-2'>SMA (5)</span>
                  </div>
                  <div><span>22101.44</span></div>


                </div>
                <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                  <div>
                    <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                    <span className='pl-2'>SMA (5)</span>
                  </div>
                  <div><span>22101.44</span></div>


                </div>
                <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                  <div>
                    <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                    <span className='pl-2'>SMA (5)</span>
                  </div>
                  <div><span>22101.44</span></div>


                </div>
                <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                  <div>
                    <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                    <span className='pl-2'>SMA (5)</span>
                  </div>
                  <div><span>22101.44</span></div>


                </div>
                <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                  <div>
                    <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                    <span className='pl-2'>SMA (5)</span>
                  </div>
                  <div><span>22101.44</span></div>


                </div>
                <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                  <div>
                    <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                    <span className='pl-2'>SMA (5)</span>
                  </div>
                  <div><span>22101.44</span></div>


                </div>
                <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                  <div>
                    <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                    <span className='pl-2'>SMA (5)</span>
                  </div>
                  <div><span>22101.44</span></div>


                </div>
                <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                  <div>
                    <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                    <span className='pl-2'>SMA (5)</span>
                  </div>
                  <div><span>22101.44</span></div>


                </div>
                <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                  <div>
                    <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                    <span className='pl-2'>SMA (5)</span>
                  </div>
                  <div><span>22101.44</span></div>


                </div>
                <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                  <div>
                    <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                    <span className='pl-2'>SMA (5)</span>
                  </div>
                  <div><span>22101.44</span></div>


                </div>
              </div> : ""}
              <div className='flex  items-center gap-1 justify-end pr-16 text-neutral-200 hover:text-blue-500'><button className='text-neutral-500 hover:text-blue-500' onClick={ViweDetail}>{text}</button>
                <i className="fa-solid fa-angle-down "></i></div>
            </div>




            {/* ------------ */}
          </div>



        </div>
        {/* ------------------------------------------------------------------ */}

        <div className="oscillator  w-[550px]   h-auto pb-2  shadow-xl">
          <div className="moving w-[550px] h-auto pb-2 ">

            <div className='flex justify-between h-12 items-center pl-8 pr-6'>
              <span className='font-semibold text-sm'>Oscillators</span>

            </div>
            <div className='flex items-center justify-center h-16 relative'>
              <img src={oscillator} alt='support' className='w-64 ' />
              <img src={circle} alt='circle' ref={graph4} className='w-5' style={{position:"absolute",left:"218px"}} />
            </div>
            <div className="market_trend flex h-20 items-center justify-center gap-20 mr-7 text-sm">
              <div className='w-12 text-center'>
                <span className='pl-5'>14</span>
                <button className='bg-pink-100 text-red-500 text-sm py-1 px-3 rounded-lg'>Bearish</button>
              </div>
              <div className='w-12 text-center'>
                <span className='pl-5 '>8</span>
                <button className='text-neutral-500 bg-neutral-100 text-sm py-1 px-3 rounded-lg'>Neutral</button>
              </div>
              <div className='w-12 text-center'>
                <span className='pl-5'>5</span>
                <button className='text-blue-500 bg-blue-100 text-sm py-1 px-3 rounded-lg'>Bullish</button>
              </div>

            </div>
            <div className="data  ">
              <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                <div>
                  <button className='bg-neutral-200 text-neutral-500 text-sm px-2   rounded-sm'>R</button>
                  <span className='pl-2'>RSI(14)</span>
                </div>
                <div><span>51.48</span></div>


              </div>
              <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                <div>
                  <button className='bg-neutral-200 text-neutral-500 text-sm px-2   rounded-sm'>N</button>
                  <span className='pl-2'>SMA (5)</span>
                </div>
                <div><span>22101.44</span></div>


              </div>
              <div className='data invisble h-auto'>

                {hide1 ? <div className='hide'>


                  <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                    <div>
                      <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                      <span className='pl-2'>SMA (5)</span>
                    </div>
                    <div><span>22101.44</span></div>


                  </div>
                  <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                    <div>
                      <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                      <span className='pl-2'>SMA (5)</span>
                    </div>
                    <div><span>22101.44</span></div>


                  </div>
                  <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                    <div>
                      <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                      <span className='pl-2'>SMA (5)</span>
                    </div>
                    <div><span>22101.44</span></div>


                  </div>
                  <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                    <div>
                      <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                      <span className='pl-2'>SMA (5)</span>
                    </div>
                    <div><span>22101.44</span></div>


                  </div>
                  <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                    <div>
                      <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                      <span className='pl-2'>SMA (5)</span>
                    </div>
                    <div><span>22101.44</span></div>


                  </div>
                  <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                    <div>
                      <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                      <span className='pl-2'>SMA (5)</span>
                    </div>
                    <div><span>22101.44</span></div>


                  </div>
                  <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                    <div>
                      <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                      <span className='pl-2'>SMA (5)</span>
                    </div>
                    <div><span>22101.44</span></div>


                  </div>
                  <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                    <div>
                      <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                      <span className='pl-2'>SMA (5)</span>
                    </div>
                    <div><span>22101.44</span></div>


                  </div>
                  <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                    <div>
                      <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                      <span className='pl-2'>SMA (5)</span>
                    </div>
                    <div><span>22101.44</span></div>


                  </div>
                  <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                    <div>
                      <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                      <span className='pl-2'>SMA (5)</span>
                    </div>
                    <div><span>22101.44</span></div>


                  </div>
                  <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                    <div>
                      <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                      <span className='pl-2'>SMA (5)</span>
                    </div>
                    <div><span>22101.44</span></div>


                  </div>
                  <div className='flex justify-between pl-16 pr-16 text-sm h-8 items-center'>
                    <div>
                      <button className='bg-pink-200 text-red-500 text-sm px-2   rounded-sm'>S</button>
                      <span className='pl-2'>SMA (5)</span>
                    </div>
                    <div><span>22101.44</span></div>


                  </div>
                </div> : ""}
                <div className='flex  items-center gap-1 justify-end pr-16 text-neutral-200'>
                  <button className='text-neutral-500'
                    onClick={ViweDetail2}>{text1}</button>
                  <i className="fa-solid fa-angle-down"></i></div>
              </div>




              {/* ------------ */}
            </div>



          </div>
        </div>


      </div>





    </>
  )
}

export default Graphs
