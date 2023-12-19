import { useState } from "react";
import { BlazorCounter } from "./BlazorWrapper/BlazorCounter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <hr />
        {/* div などのコンテナで囲わないと、その親の Element が mount の root になる */}
        <div>
          <BlazorCounter />
        </div>
      </div>
    </>
  );
}

export default App;
