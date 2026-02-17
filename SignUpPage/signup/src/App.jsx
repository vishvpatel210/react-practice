// import { useState , useref } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [formData,setForm]  = useState({
//     name:" ",
//     email:" ",
//     phone:" "
//   })

//   const nameRef = useref();
//   const emailRef = useref();
//   const phoneRef = useref();

// // function handleFormData(event){
// //     
// //     setForm({...formData , [event.target.name] : event.target.value})
// // }

// function handleSubmit(event){
//   event.preventDefault();
//   localStorage.setItem("userData",JSON.stringify(formData));

//   const currentData = {
//     name : nameRef.current.value;
//     email : emailRef.current.value;
//     phone : phoneRef.current.value;
// }
// }

//   return (
//     <>
//         <form action="">
//           <input type="text" ref={nameRef} name="name"  placeholder='Enter your name' value={formData.name}/>
//           <input type="email" ref={emailRef} name='email' placeholder='Enter your Email' value={formData.email} />
//           <input type="phone" ref={phoneRef} name='number' placeholder='Enter your mobile number'value={formData.phone} />
//           <button type='button' onClick={handleSubmit}>Submit</button>
//         </form>
//     </>
//   )
// }

// export default App






import { useState, useRef } from 'react'
import './App.css'

function App() {

  const [formData, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  function handleChange(event) {
    setForm({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const currentData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value
    };

    localStorage.setItem("userData", JSON.stringify(currentData));

    console.log(currentData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={nameRef}
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          ref={emailRef}
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          ref={phoneRef}
          name="phone"
          placeholder="Enter your mobile number"
          value={formData.phone}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App

