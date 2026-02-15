import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("");
  const [debounce, setDebounce] = useState("");

  function handle(e) {
    setInput1(e.target.value);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(input1);
    }, 3000);

    return () => clearTimeout(timer); 
  }, [input1]);

  return (
    <>
      <input
        type="text"
        onChange={handle}
        value={input1}
        placeholder="Type here..."
      />

      <h1>{debounce}</h1>
    </>
  );
}

export default App;
