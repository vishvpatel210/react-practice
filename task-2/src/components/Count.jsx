import React from 'react'
import { useState } from 'react'

export default function Count() {

    const [count,setcount] = useState(0);

   function buttonPlus(){
        
        setcount(count+1);
    }

    function buttonMinus(){
        
        setcount(count-1);
    }

    function reset(){
        setcount(0);
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={buttonPlus}>increament</button>
      <button disabled={count === 0} onClick={buttonMinus}>Decreament</button>
      <button onClick={reset}>RESET</button>
    </div>
  )
}
