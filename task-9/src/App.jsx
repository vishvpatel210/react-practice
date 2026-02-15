import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'


function App() {
  const [product,setProduct] = useState(null)
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data)=>{
      setProduct(data);
    });
  },[])

  function catagory(e){
    setProduct(e.target.value);
  }

  return (
    <>
      <h1>welcom to My Store</h1>

      <select name="" id="" value={val} onChange={catagory}>
        <option value="men's clothing">men's clothing</option>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics</option>
        <option value="women's clothing">women's clothing</option>
      </select>

      <h1>{product.catagory}</h1>
    </>
  )
}

export default App
