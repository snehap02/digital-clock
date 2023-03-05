import React from "react";
import { useState } from "react";
import "./index.css";

const App = () => {
  
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let cTime = `${hour} : ${min} : ${sec}`;

    let pM = "#000000";
    let aM = "#000000";
    const [pm, setP] = useState(pM);
    const [am, setA] = useState(aM);
    const [ctime, setTime] = useState(cTime);
    
    
    setTimeout(() => {
      hour = new Date().getHours();
      min = new Date().getMinutes();
      sec = new Date().getSeconds();
      cTime = `${hour} : ${min} : ${sec}`;
      if(hour < 10){
        cTime = `0${hour} : ${min} : ${sec}`;
      }
      if(hour >= 12){
        let text = "#cbd5e1";
        setP(text);
      }
      if(hour < 12){
        let textone = "#cbd5e1";
        setA(textone);
      }
      if(min < 10){
        cTime = `${hour} : 0${min} : ${sec}`;
      }
      setTime(cTime);
      if(sec < 10){
        cTime = `${hour} : ${min} : 0${sec}`;
      }
      setTime(cTime);

    }, 1000);

    // setTimeout(() => {
    //   hour = new Date().getHours();
    //   min = new Date().getMinutes();
    //   sec = new Date().getSeconds();
    //   cTime = `${hour} : ${min} : ${sec}`;
      
    //   if(min < 10){
    //     cTime = `${hour} : 0${min} : ${sec}`;
    //   }
    //   setTime(cTime);

    // }, 1000);

  
  
  return(
    <>  
      <div className="text-center mt-[250px] sm:hidden text-3xl">OOPs....Not Fully Responsive🥺</div>
      {/* <div className="w-20 h-20 absolute bg-black"></div> */}
      <div className="bg-red-400 hidden sm:w-[650px] sm:h-[300px] md:w-[700px] md:h-[300px] lg:w-[800px] lg:h-[300px] mt-[200px] rounded-3xl sm:flex justify-center items-center shadow-xl shadow-red-900 ring-4 ring-red-800 relative">
        <div className="bg-slate-800 sm:w-[610px] sm:h-[260px] md:w-[650px] md:h-[260px] lg:w-[760px] lg:h-[265px] rounded-3xl flex justify-center items-center gap-5">
          <h1 className="font-orbitron text-[80px] lg:text-8xl text-slate-300 -ml-2 hidden sm:block">{ctime}</h1>
          <h2 className="sm:w-20 flex flex-col justify-center items-center gap-5 font-orbitron text-2xl font-bold lg:gap-6">
            <span style={{color: am}}>AM</span>
            <span style={{color: pm}}>PM</span>
          </h2>
        </div>
      </div>
    </>
  )
}

export default App;