import React, { useState } from "react";

export default function Toggle() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <h1>This is toggle button to show/hide</h1>}

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}
