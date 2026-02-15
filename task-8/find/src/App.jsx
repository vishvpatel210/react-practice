import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


//  const [numbers,setNumbers] = useState([10,88,90,50]);

//   function onhandle(){
//     const sorted = [...numbers].sort((a,b)=> a-b);
//     setNumbers(sorted)
//   }
//   return (
//     <> 
//       <button onClick={onhandle}>sort</button>
//       <h1>{numbers.join(",")}</h1>
//     </>
//   )



 const [name ,setName] = useState(["vishv","jonty","kamlesh","trikam"]);



  function accending() {
    const arr1 = [...name].sort((a, b) =>
      a.localeCompare(b)
    );
    setName(arr1);
  }

  function decending() {
    const arr1 = [...name].sort((a, b) =>
      b.localeCompare(a)
    );
    setName(arr1);
  }

  return (
    <>
      <button onClick={accending}>A To Z</button>
      <button onClick={decending}>Z To A</button>

      <h1>{name.join(", ")}</h1>
    </>
  );
}

export default App;


  

