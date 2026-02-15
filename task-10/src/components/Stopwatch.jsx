import React, { useEffect, useState } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);  
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && time >= 0) {
      const id = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);

      return () => clearInterval(id);   
    }
  }, [isRunning]);  

  return (
    <div>
      <h1>StopWatch: {time}</h1>

      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}
