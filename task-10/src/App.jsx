import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import Stopwatch from './components/Stopwatch';
let initialvalue = 60;

function App() {
  const [seconds, setSeconds] = useState(initialvalue);
  const [isRunning,setRunning] = useState(false);

  useEffect(()=>{
    let id=null;
    if(isRunning && seconds>0){
      id = setInterval(()=>{
        setSeconds((pre) => pre-1);
      },1000)
    }

    return() => clearInterval(id);

  },[isRunning,seconds])
  return (
    <>
      <h1>Timer: {seconds}</h1>
      <button onClick={()=> setRunning(true)}>start</button>
      <button onClick={()=> setRunning(false)}>Pause</button>
      <button  onClick={()=> {
        setRunning(false);
        setSeconds(initialvalue);
      }}>reset</button>

      <Stopwatch></Stopwatch>
    </>
  )
}

export default App
