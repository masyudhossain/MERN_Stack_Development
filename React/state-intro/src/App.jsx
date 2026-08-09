import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // let a = 0;

  return (
    <>
      <div>The count is {count}</div>
      {/* <div>The count is {a}</div> */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update count
      </button>
      //not updated
      {/* <button
        onClick={() => {
          a = a + 1;
        }}
      >
        Update count
      </button> */}
    </>
  );
}

export default App;
