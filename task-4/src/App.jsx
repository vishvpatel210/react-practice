import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState(" ");
  const [input1,setinput1] = useState(" ");
    const [show, setShow] = useState("")

  function textChange(event){
      setText(event.target.value);
  } 

  
  function handle(event){
     setShow(input1)
  }

  function inputChange(event){
    setinput1(event.target.value);
  }``
  return (
    <>
      <input type="text" value={text} onChange={textChange} placeholder='please enter the value'  />
      <h1>{text}</h1>
      

      <input type="text" value={input1} onChange={inputChange}   /><br /><br />
     
      <h1>{show}</h1>
      <button onClick={handle}>submit</button>
    </>
  )
}

export default App
